"use client";
import { useState } from "react";

const WA_NUMBER = "5511999999999";

const frases = [
  { id: "artista-claro",   src: "/prints/lembrete-2.png",                    nome: "Artista (claro)" },
  { id: "artista-escuro",  src: "/prints/lembrete-artista-nao-desistiu.jpg", nome: "Artista (escuro)" },
  { id: "alma",            src: "/prints/lembrete-alma.jpg",                 nome: "Alma" },
  { id: "sente",           src: "/prints/lembrete-sente.jpg",                nome: "Sentir" },
  { id: "paixao",          src: "/prints/lembrete-paixao.jpg",               nome: "Paixão" },
  { id: "deus",            src: "/prints/lembrete-deus.jpg",                 nome: "Deus" },
  { id: "cerrado",         src: "/prints/lembrete-cerrado.jpg",              nome: "Cerrado" },
  { id: "pequenas-acoes",  src: "/prints/lembrete-pequenas-acoes.jpg",       nome: "Pequenas Ações" },
  { id: "cura",            src: "/prints/lembrete-cura-artista.jpg",         nome: "Cura" },
  { id: "sombras",         src: "/prints/lembrete-sombras.jpg",              nome: "Sombras" },
];

export default function LembreteCard() {
  const [selected, setSelected] = useState<string | null>(null);
  const frase = frases.find(f => f.id === selected);

  const msg = frase
    ? `Olá Iara! Gostaria de encomendar o print Lembrete — "${frase.nome}" — no tamanho A4. 🌿`
    : `Olá Iara! Tenho interesse nos prints Lembrete! 🌿`;
  const link = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="flex flex-col">
      <p className="text-xs uppercase tracking-[0.2em] text-terra/50 mb-3">
        {frase ? frase.nome : "Toque para escolher a sua frase"}
      </p>

      <div className="grid grid-cols-2 gap-1.5">
        {frases.map(f => (
          <button
            key={f.id}
            onClick={() => setSelected(f.id === selected ? null : f.id)}
            className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: "3/4" }}
          >
            <img src={f.src} alt={f.nome} className="h-full w-full object-cover" loading="lazy" />
            <div
              className="absolute inset-0 rounded-xl ring-inset transition-all"
              style={{
                boxShadow: f.id === selected
                  ? "inset 0 0 0 2.5px var(--color-siena)"
                  : "inset 0 0 0 0px transparent",
              }}
            />
          </button>
        ))}
      </div>

      <div className="mt-4 px-0.5">
        <div className="flex gap-2 mt-2">
          <span className="text-xs uppercase tracking-[0.15em] text-terra/50 border border-terra/20 rounded-lg px-3 py-1.5">
            A4
          </span>
        </div>
        <div className="mt-2.5 flex flex-col gap-1">
          <span className="text-base font-semibold text-siena">R$ 111</span>
          <span className="text-[10px] text-terra/40 uppercase tracking-[0.1em]">frete incluso</span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 self-start text-xs uppercase tracking-[0.2em] text-siena border-b border-siena/40 pb-0.5 transition-opacity hover:opacity-70"
          >
            Encomendar
          </a>
        </div>
      </div>
    </div>
  );
}
