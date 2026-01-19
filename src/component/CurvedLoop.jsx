import { useRef, useEffect, useState, useMemo, useId } from "react";
import "./CurvedLoop.css";

const CurvedLoop = ({
  marqueeText = "",
  items = null,
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    if (items) return null;
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText, items]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText =
    textLength && !items
      ? Array(Math.ceil(1800 / textLength) + 2)
          .fill(text)
          .join("")
      : text;
  const ready = items ? true : spacing > 0;

  // For items mode
  const itemWidth = 200; // Approximate width for each item
  const itemCount = items ? Math.ceil(1440 / itemWidth) + 2 : 0;

  useEffect(() => {
    if (!items && measureRef.current)
      setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className, items]);

  useEffect(() => {
    if (items || !spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute("startOffset", initial + "px");
      setOffset(initial);
    }
  }, [spacing, items]);

  useEffect(() => {
    if (!ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;

        if (items) {
          setOffset((prev) => {
            let newOffset = prev + delta;
            if (newOffset <= -itemWidth) newOffset += itemWidth;
            if (newOffset > 0) newOffset -= itemWidth;
            return newOffset;
          });
        } else if (textPathRef.current) {
          const currentOffset = parseFloat(
            textPathRef.current.getAttribute("startOffset") || "0",
          );
          let newOffset = currentOffset + delta;

          const wrapPoint = spacing;
          if (newOffset <= -wrapPoint) newOffset += wrapPoint;
          if (newOffset > 0) newOffset -= wrapPoint;

          textPathRef.current.setAttribute("startOffset", newOffset + "px");
          setOffset(newOffset);
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready, items, itemWidth]);

  const onPointerDown = (e) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!interactive || !dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    if (items) {
      setOffset((prev) => {
        let newOffset = prev + dx;
        if (newOffset <= -itemWidth) newOffset += itemWidth;
        if (newOffset > 0) newOffset -= itemWidth;
        return newOffset;
      });
    } else if (textPathRef.current) {
      const currentOffset = parseFloat(
        textPathRef.current.getAttribute("startOffset") || "0",
      );
      let newOffset = currentOffset + dx;

      const wrapPoint = spacing;
      if (newOffset <= -wrapPoint) newOffset += wrapPoint;
      if (newOffset > 0) newOffset -= wrapPoint;

      textPathRef.current.setAttribute("startOffset", newOffset + "px");
      setOffset(newOffset);
    }
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive
    ? dragRef.current
      ? "grabbing"
      : "grab"
    : "auto";

  // Render items mode
  if (items) {
    return (
      <div
        ref={containerRef}
        className="curved-loop-jacket"
        style={{
          visibility: ready ? "visible" : "hidden",
          cursor: cursorStyle,
          position: "relative",
          height: "120px",
          overflow: "hidden",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {Array(itemCount)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${i * itemWidth + offset}px`,
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  whiteSpace: "nowrap",
                }}>
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className={className}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  }

  // Original text mode
  return (
    <div
      className="curved-loop-jacket"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}>
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}>
          {text}
        </text>
        <defs>
          <path
            ref={pathRef}
            id={pathId}
            d={pathD}
            fill="none"
            stroke="transparent"
          />
        </defs>
        {ready && (
          <text fontWeight="bold" xmlSpace="preserve" className={className}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={offset + "px"}
              xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
