// Floating ember sparks overlay
export function Sparks({ count = 24 }: { count?: number }) {
  const sparks = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((i) => {
        const left = (i * 41) % 100;
        const size = 1 + ((i * 7) % 4);
        const dur = 6 + ((i * 13) % 10);
        const delay = (i * 0.7) % 8;
        return (
          <span
            key={i}
            className="spark absolute bottom-0 rounded-full bg-ember"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
