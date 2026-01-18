export function Section({ id, children, className, fullHeight = true }) {
  return (
    <section
      id={id}
      className={`relative w-full ${
        fullHeight ? "min-h-screen" : ""
      } grid grid-cols-1 md:grid-cols-12 auto-rows-min bg-black from-slate-900 to-slate-800  ${className}`}>
      {children}
    </section>
  );
}
