import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: "Oráculo Alma Criativa | Iara Vida",
  description:
    "Oráculo Alma Criativa — um baralho para reconectar com seu artista interior e criar a partir do que é verdadeiro. Por Iara Vida.",
};

const BUY_URL = "https://criadoresmagneticos.lojavirtualnuvem.com.br/produtos/oraculo-uqziz/";

export default function Oraculo() {
  return (
    <div className="min-h-screen bg-creme text-terra">
      <div className="relative h-20">
        <MobileNav />
      </div>
      <Hero />
      <Conteudo />
      <Footer />
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  return (
    <section className="px-6 pb-12 pt-8 text-center">
      <div className="mx-auto w-[70%] max-w-[250px] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/oraculo/produto.avif" alt="Oráculo Alma Criativa — baralho" className="block w-full" />
      </div>

      <h1 className="font-grandenhas mt-6 text-6xl leading-tight tracking-wide text-siena">
        Oráculo Alma Criativa
      </h1>

      <p className="mt-3 text-lg uppercase tracking-[0.3em] text-terra/70">R$ 133</p>

      <a
        href={BUY_URL}
        className="mt-5 inline-flex items-center rounded-full bg-rosa px-7 py-3 text-sm tracking-wide text-creme transition-opacity hover:opacity-90"
      >
        Adicionar ao carrinho
      </a>
    </section>
  );
}

/* ----------------------------- CONTEÚDO ----------------------------- */
/* Blocos-imagem desenhados (texto e ilustrações embutidos), empilhados
   sem emendas, com os dois CTAs sobrepostos nos pontos da referência.  */
function Conteudo() {
  const blocos = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="relative leading-[0]">
      {blocos.map((n) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={n}
          src={`/oraculo/bloco${n}.avif`}
          alt=""
          className="block w-full select-none"
          draggable={false}
        />
      ))}

      {/* CTA sobreposto — "Garanta o seu" */}
      <div className="absolute left-1/2 top-[30.6%] -translate-x-1/2 flex flex-col items-center">
        <a
          href={BUY_URL}
          className="whitespace-nowrap rounded-full bg-[#e6d2c3] px-9 py-3 text-sm tracking-[0.25em] text-[#c3995b] shadow-sm transition-opacity hover:opacity-90"
        >
          Garanta o seu
        </a>
        <div className="h-14 w-72 bg-gradient-to-b from-[#e6d2c3] to-transparent" />
      </div>

      {/* CTA sobreposto — "Eu quero" */}
      <div className="absolute left-1/2 top-[73%] -translate-x-1/2 flex flex-col items-center">
        <a
          href={BUY_URL}
          className="whitespace-nowrap rounded-full bg-[#e6d2c3] px-10 py-3 text-sm tracking-[0.25em] text-[#c3995b] shadow-sm transition-opacity hover:opacity-90"
        >
          Eu quero
        </a>
        <div className="h-14 w-72 bg-gradient-to-b from-[#e6d2c3] to-transparent" />
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="bg-rosa px-6 pb-12 pt-10 text-center">
      <img src="/logo-iara.png" alt="Iara Vida" className="mx-auto mb-6 h-16 w-auto icon-shimmer" style={{ filter: "brightness(10) sepia(1) saturate(0)" }} />

      <p className="text-xs tracking-[0.08em] text-creme/70">
        Me encontre nas mídias digitais
      </p>

      <div className="mt-5 flex items-center justify-center gap-6 text-creme">
        <a href="https://www.instagram.com/iaravidart/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .46 1.4.86.4.4.66.8.86 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.46 1-.86 1.4-.4.4-.8.66-1.4.86-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.46-1.4-.86-.4-.4-.66-.8-.86-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.46-1 .86-1.4.4-.4.8-.66 1.4-.86.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.06-1.1.05-1.7.24-2.1.4-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.06 3.3c.05 1.1.24 1.7.4 2.1.2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.06 1.6.06 4.7.06s3.5 0 4.7-.06c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.06-1.2.06-1.6.06-3.3s0-2.1-.06-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.43-.9-.83-1.3-.4-.4-.8-.63-1.3-.83-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.2-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
          </svg>
        </a>
      </div>

      <p className="mt-8 text-[11px] text-creme/40">
        © 2026 Iara Vida · Oráculo Alma Criativa
      </p>
    </footer>
  );
}
