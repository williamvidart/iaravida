"use client";

import { useState, useRef } from "react";

type Tamanho = "A4" | "A3";

const precos: Record<Tamanho, number> = { A4: 222, A3: 333 };

const WA_NUMBER = "5511999999999";

function whatsappLink(titulo: string, tamanho: Tamanho) {
  const msg = encodeURIComponent(
    `Olá Iara! Gostaria de encomendar o print "${titulo}" no tamanho ${tamanho}. 🌿`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function PrintCard({
  titulo,
  srcs,
}: {
  titulo: string;
  srcs: (string | null)[];
}) {
  const [tam, setTam] = useState<Tamanho>("A4");
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const temImagem = srcs.some((s) => s !== null) && titulo !== "Em breve";
  const imagens = srcs.filter((s): s is string => s !== null);
  const multi = imagens.length > 1;

  function onScroll() {
    if (!trackRef.current) return;
    const idx = Math.round(
      trackRef.current.scrollLeft / trackRef.current.offsetWidth
    );
    setSlide(idx);
  }

  function goTo(i: number) {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: i * trackRef.current.offsetWidth, behavior: "smooth" });
    setSlide(i);
  }

  return (
    <div className="flex flex-col">
      {/* imagem / carrossel */}
      <div
        className="w-full rounded-xl overflow-hidden relative"
        style={{ aspectRatio: "3/4", backgroundColor: "#D9C4B2" }}
      >
        {temImagem ? (
          <>
            {/* track */}
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="flex h-full w-full overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              {imagens.map((src, i) => (
                <div key={i} className="h-full w-full shrink-0 snap-start">
                  <img src={src} alt={titulo} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            {/* dots */}
            {multi && (
              <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
                {imagens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all ${
                      i === slide
                        ? "w-4 h-1.5 bg-creme"
                        : "w-1.5 h-1.5 bg-creme/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="h-full w-full flex items-end p-3">
            <span className="font-grandenhas text-2xl text-creme/40">iara vida</span>
          </div>
        )}
      </div>

      {/* info */}
      <div className="mt-3 px-0.5">
        {temImagem ? (
          <>
            <p className="text-sm font-medium text-terra leading-snug">{titulo}</p>

            {/* seletor de tamanho */}
            <div className="flex gap-2 mt-2.5">
              {(["A4", "A3"] as Tamanho[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTam(t)}
                  className={`flex-1 rounded-lg py-1.5 text-xs uppercase tracking-[0.15em] border transition-colors ${
                    tam === t
                      ? "bg-siena text-creme border-siena"
                      : "bg-transparent text-terra/60 border-terra/20 hover:border-siena/50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-2.5 flex items-center justify-between">
              <div>
                <span className="text-base font-semibold text-siena">
                  R$ {precos[tam].toLocaleString("pt-BR")}
                </span>
                <span className="ml-1.5 text-[10px] text-terra/40 uppercase tracking-[0.1em]">
                  frete incluso
                </span>
              </div>
              <a
                href={whatsappLink(titulo, tam)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-siena border-b border-siena/40 pb-0.5 transition-opacity hover:opacity-70"
              >
                Encomendar
              </a>
            </div>
          </>
        ) : (
          <div className="mt-1 space-y-1">
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.75)" }}>Em breve</p>
            <div className="flex gap-1.5 text-[10px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
              <span>A4 · R$ 222</span>
              <span>·</span>
              <span>A3 · R$ 333</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
