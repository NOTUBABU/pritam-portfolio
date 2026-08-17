import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        className="absolute rounded-full bg-primary/30 transition-[width,height] duration-200"
        style={{
          left: pos.x, top: pos.y,
          width: hover ? 46 : 18, height: hover ? 46 : 18,
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        className="absolute h-1.5 w-1.5 rounded-full bg-primary"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%,-50%)" }}
      />
    </div>
  );
}
