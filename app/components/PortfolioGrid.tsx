"use client";

import React, { useEffect, useRef, useState } from "react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(28px)",
    transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return { ref, style };
}

function AnimatedImage({ src, isLarge, delay }: { src: string; isLarge: boolean; delay: number }) {
  const { ref, style } = useReveal(delay);
  return (
    <div
      ref={ref}
      style={{
        ...style,
        gridColumn: isLarge ? "span 2" : undefined,
        height: isLarge ? "340px" : "180px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 select-none pointer-events-none"
        loading="lazy"
        draggable={false}
        style={{ WebkitTouchCallout: "none" } as React.CSSProperties}
      />
    </div>
  );
}

function AnimatedQuote({
  children,
  span2 = false,
  dir = "up",
  delay = 0,
  padding,
}: {
  children: React.ReactNode;
  span2?: boolean;
  dir?: "up" | "left" | "right";
  delay?: number;
  padding?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const offsets = { up: "translateY(36px)", left: "translateX(-36px)", right: "translateX(36px)" };

  const style: React.CSSProperties = {
    gridColumn: span2 ? "span 2" : undefined,
    padding,
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : offsets[dir],
    transition: `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}

export default function PortfolioGrid({ fotos }: { fotos: string[] }) {
  return (
    <div
      className="grid px-4 pb-16"
      style={{ gridTemplateColumns: "1fr 1fr", gap: "8px" }}
    >
      {fotos.map((src, i) => {
        const isLarge = i % 3 === 0;
        const delay = (i % 2) * 40;

        const quote =
          i === 12 ? (
            <AnimatedQuote key="q12" span2 dir="up" padding="32px 24px 16px">
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Arte é quando você coloca a sua alma no mundo e alguém se reconhece nela
              </p>
            </AnimatedQuote>
          ) : i === 27 ? (
            <AnimatedQuote key="q27" span2 dir="up" padding="32px 24px 16px">
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                A arte tem o poder de nos trazer para o momento presente
              </p>
            </AnimatedQuote>
          ) : i === 24 ? (
            <AnimatedQuote key="q24" span2 dir="up" padding="32px 24px 16px">
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Criar exige sentir
              </p>
            </AnimatedQuote>
          ) : i === 21 ? (
            <AnimatedQuote key="q21" span2 dir="up" padding="32px 24px 16px">
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Faça arte, não para mostrar para o mundo, mas para se ver nele
              </p>
            </AnimatedQuote>
          ) : i === 33 ? (
            <AnimatedQuote key="q33" span2 dir="up" padding="32px 24px 16px">
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Criar é lembrar quem você é
              </p>
            </AnimatedQuote>
          ) : i === 36 ? (
            <AnimatedQuote key="q36" span2 dir="up" padding="32px 24px 16px">
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Arte é o milagre em si
              </p>
            </AnimatedQuote>
          ) : i === 18 ? (
            <React.Fragment key="q18">
              <AnimatedQuote dir="left" padding="32px 8px 16px 24px">
                <div className="flex items-center h-full">
                  <p className="font-grandenhas text-4xl leading-tight text-terra">
                    Arte é um<br />respiro divino
                  </p>
                </div>
              </AnimatedQuote>
              <AnimatedQuote dir="right" padding="8px 8px 8px 0">
                <div className="flex items-center justify-end h-full">
                  <img
                    src="/canva1.png"
                    alt=""
                    style={{ mixBlendMode: "multiply", width: "100%" }}
                  />
                </div>
              </AnimatedQuote>
            </React.Fragment>
          ) : null;

        const divider =
          i === 4 ? (
            <React.Fragment key="div4">
              <AnimatedQuote dir="left" padding="4px 0 4px 8px">
                <div className="flex items-center">
                  <img
                    src="/geotinta.png"
                    alt=""
                    style={{ mixBlendMode: "multiply", width: "100%" }}
                  />
                </div>
              </AnimatedQuote>
              <AnimatedQuote dir="right" padding="8px 12px 8px 4px">
                <div className="flex items-center justify-end h-full">
                  <p className="font-grandenhas text-4xl leading-tight text-terra text-right">
                    Minha maior fonte<br />é a natureza
                  </p>
                </div>
              </AnimatedQuote>
            </React.Fragment>
          ) : null;

        return (
          <React.Fragment key={i}>
            {quote}
            {divider}
            <AnimatedImage src={src} isLarge={isLarge} delay={delay} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
