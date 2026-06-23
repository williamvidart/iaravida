import React from "react";
import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: "Portfólio | Iara Vida",
  description: "Obras de Iara Vida — aquarelas, telas, geotintas e murais.",
};

const fotos = [
  "/portfolio/IMG_0762.jpg",
  "/portfolio/our-story-medicine.jpg",
  "/portfolio/IMG_8939.jpg",
  "/portfolio/aba86080-9f89-11f0-92fe-51c137129a48.jpg",
  "/portfolio/IMG_9200.jpg",
  "/portfolio/IMG_5023.jpg",
  "/portfolio/IMG_0509.PNG",
  "/portfolio/IMG_0207.jpg",
  "/portfolio/IMG_1337.jpg",
  "/portfolio/IMG_8786.jpg",
  "/portfolio/IMG_5021.jpg",
  "/portfolio/IMG_8934.jpg",
  "/portfolio/IMG_4869.jpg",
  "/portfolio/IMG_6924.jpg",
  "/portfolio/IMG_5017.jpg",
  "/portfolio/IMG_8718.jpg",
  "/portfolio/IMG_8773.jpg",
  "/portfolio/IMG_8811.jpg",
  "/portfolio/IMG_5010.jpg",
  "/portfolio/IMG_0796.PNG",
  "/portfolio/IMG_2032_jpg.jpg",
  "/portfolio/IMG_2841.jpg",
  "/portfolio/IMG_8650.jpg",
  "/portfolio/IMG_8790.jpg",
  "/portfolio/IMG_8940.jpg",
  "/portfolio/IMG_4895.jpg",
  "/portfolio/IMG_0766.jpg",
  "/portfolio/IMG_2748.jpg",
  "/portfolio/IMG_2752.jpg",
  "/portfolio/IMG_1557.jpg",
  "/portfolio/IMG_1349.jpg",
  "/portfolio/IMG_1481.jpg",
  "/portfolio/IMG_1547.jpg",
  "/portfolio/IMG_2754.jpg",
  "/portfolio/IMG_2805.jpg",
  "/portfolio/IMG_1560.jpg",
  "/portfolio/IMG_1726.JPG",
  "/portfolio/IMG_3938.jpg",
  "/portfolio/Terra.jpg",
  "/portfolio/IMG_6629.jpg",
];

export default function Portfolio() {
  return (
    <div className="flex flex-1 flex-col bg-creme">
      <div className="relative">
        <MobileNav />
        <div className="h-16" />
      </div>

      {/* Title */}
      <div className="px-6 pt-8 pb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-terra/50">obras</p>
        <h1 className="font-grandenhas mt-1 text-5xl text-terra">Portfólio</h1>
      </div>

      {/* Grid — padrão: 1 grande / 2 pequenas */}
      <div
        className="grid px-4 pb-16"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
        }}
      >
        {fotos.map((src, i) => {
          const isLarge = i % 3 === 0;

          // Frase antes de IMG_4869 (índice 12)
          const quote = i === 12 ? (
            <div
              key="quote"
              style={{ gridColumn: "span 2", padding: "32px 24px 16px" }}
            >
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Arte é quando você coloca a sua alma no mundo e alguém se reconhece nela
              </p>
            </div>
          ) : i === 33 ? (
            <div key="quote4" style={{ gridColumn: "span 2", padding: "32px 24px 16px" }}>
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Criar é lembrar quem você é
              </p>
            </div>
          ) : i === 36 ? (
            <div key="quote3" style={{ gridColumn: "span 2", padding: "32px 24px 16px" }}>
              <p className="font-grandenhas text-4xl leading-tight text-terra">
                Arte é o milagre em si
              </p>
            </div>
          ) : i === 18 ? (
            <React.Fragment key="quote2">
              <div style={{ padding: "32px 8px 16px 24px" }} className="flex items-center">
                <p className="font-grandenhas text-4xl leading-tight text-terra">
                  Arte é um<br />respiro divino
                </p>
              </div>
              <div style={{ padding: "8px 8px 8px 0" }} className="flex items-center justify-end">
                <img
                  src="/canva1.png"
                  alt=""
                  style={{ mixBlendMode: "multiply", width: "100%" }}
                />
              </div>
            </React.Fragment>
          ) : null;

          // Divisor depois da foto 4 (índice 3): geotinta esquerda + frase direita
          const divider = i === 4 ? (
            <React.Fragment key="divider">
              <div style={{ padding: "4px 0 4px 8px" }} className="flex items-center">
                <img
                  src="/geotinta.png"
                  alt=""
                  style={{ mixBlendMode: "multiply", width: "100%" }}
                />
              </div>
              <div style={{ padding: "8px 12px 8px 4px" }} className="flex items-center justify-end">
                <p className="font-grandenhas text-4xl leading-tight text-terra text-right">
                  Minha maior fonte<br />é a natureza
                </p>
              </div>
            </React.Fragment>
          ) : null;

          return (
            <React.Fragment key={i}>
              {quote}
              {divider}
              <div
                className="overflow-hidden"
                style={{
                  gridColumn: isLarge ? "span 2" : undefined,
                  height: isLarge ? "340px" : "180px",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Contato */}
      <footer className="bg-dark px-6 py-16 text-creme text-center">
        <img src="/logo-iara.png" alt="Iara Vida" className="mx-auto mb-8 h-24 w-auto" style={{ filter: "brightness(10) sepia(1) saturate(0)" }} />
        <div className="space-y-3 text-base">
          <a
            href="https://instagram.com/iaravidart"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-areia"
          >
            @iaravidart
          </a>
          <a
            href="mailto:contato@iaravida.com"
            className="block transition-colors hover:text-areia"
          >
            contato@iaravida.com
          </a>
          <a
            href="https://wa.me/5548988017788"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-areia"
          >
            (48) 98801-7788
          </a>
        </div>
      </footer>
    </div>
  );
}
