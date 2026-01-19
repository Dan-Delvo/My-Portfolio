export default function FlutterLogo({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 317"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid">
      <defs>
        <linearGradient
          id="flutter-gradient"
          x1="3.952%"
          y1="26.993%"
          x2="75.897%"
          y2="52.919%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <g>
        <polygon
          fill="url(#flutter-gradient)"
          points="157.666 0 0 157.666 48.8 206.466 255.267 0"
        />
        <polygon
          fill="currentColor"
          points="156.567 145.396 72.148 229.815 120.948 278.615 254.36 145.396"
        />
        <polygon
          fill="currentColor"
          fillOpacity="0.85"
          points="121.906 279.573 169.063 232.416 230.561 232.416 156.567 306.41 104.265 254.108"
        />
      </g>
    </svg>
  );
}
