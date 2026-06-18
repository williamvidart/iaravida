"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/**
 * Scroll-linked motion effects mirroring Elementor's Motion FX (scrolling).
 * The transform updates continuously as the element travels through the
 * viewport — translateX / translateY / scale, each driven by a "speed"
 * value taken from the reference site. A negative speed flips the direction.
 *
 * progress p ∈ [-1, 1]  →  -1 just entered (bottom), 0 centered, 1 leaving (top)
 *   translateY = -p * speedY * K
 *   translateX =  p * speedX * K
 *   scale      = 1 + scaleAmt * (1 - |p|)   (largest when centered)
 */

const K = 11; // px of travel per unit of Elementor "speed"

export default function MotionFx({
  children,
  speedX = 0,
  speedY = 0,
  scaleAmt = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  speedX?: number;
  speedY?: number;
  scaleAmt?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0, s: 1 });

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const center = rect.top + rect.height / 2;
        // normalized position of the element's center in the viewport
        let p = (center - vh / 2) / (vh / 2 + rect.height / 2);
        p = Math.max(-1.2, Math.min(1.2, p));

        setT({
          x: speedX ? p * speedX * K : 0,
          y: speedY ? -p * speedY * K : 0,
          s: scaleAmt ? 1 + scaleAmt * (1 - Math.min(1, Math.abs(p))) : 1,
        });
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [speedX, speedY, scaleAmt]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${t.x.toFixed(2)}px, ${t.y.toFixed(2)}px, 0) scale(${t.s.toFixed(4)})`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
