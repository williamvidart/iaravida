import type { Metadata } from "next";
import Link from "next/link";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oráculo Alma Criativa | Iara Vida",
  description:
    "Oráculo Alma Criativa — um baralho para reconectar com seu artista interior e criar a partir do que é verdadeiro. Por Iara Vida.",
};

const BUY_URL = "#"; // TODO: link do checkout/carrinho da Iara

export default function Oraculo() {
  return (
    <div className={`${questrial.className} min-h-screen bg-[#f3ebdd] text-[#3a3a32]`}>
      <Header />
      <Hero />
      <Conteudo />
      <Footer />
    </div>
  );
}

/* ------------------------------ HEADER ------------------------------ */
function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/5 bg-[#f3ebdd]/90 px-5 backdrop-blur-sm">
      <Link href="/" aria-label="Iara Vida — início">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/oraculo/logo.avif" alt="Iara Vida" className="h-10 w-auto" />
      </Link>

      <div className="flex items-center gap-5">
        <a href={BUY_URL} aria-label="Carrinho" className="relative text-[#3a3a32]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 7h12l-1 12H7L6 7Z" strokeLinejoin="round" />
            <path d="M9 7a3 3 0 0 1 6 0" strokeLinecap="round" />
          </svg>
          <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#2e3d3c] px-1 text-[9px] text-[#d6d4ad]">
            0
          </span>
        </a>
        <button aria-label="Menu" className="flex flex-col gap-[5px]">
          <span className="block h-0.5 w-6 bg-[#3a3a32]" />
          <span className="block h-0.5 w-6 bg-[#3a3a32]" />
          <span className="block h-0.5 w-6 bg-[#3a3a32]" />
        </button>
      </div>
    </header>
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

      <h1 className="mt-6 text-lg tracking-[0.04em] text-[#d2b384]">
        Oráculo Alma Criativa
      </h1>

      <a
        href={BUY_URL}
        className="mt-5 inline-flex items-center gap-2 rounded-[9px] bg-[#2e3d3c] px-7 py-3 text-sm tracking-wide text-[#d6d4ad] transition-opacity hover:opacity-90"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 7h12l-1 12H7L6 7Z" strokeLinejoin="round" />
          <path d="M9 7a3 3 0 0 1 6 0" strokeLinecap="round" />
        </svg>
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
      <a
        href={BUY_URL}
        className="absolute left-1/2 top-[30.6%] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e6d2c3] px-9 py-3 text-sm tracking-[0.25em] text-[#c3995b] shadow-sm transition-opacity hover:opacity-90"
      >
        Garanta o seu
      </a>

      {/* CTA sobreposto — "Eu quero" */}
      <a
        href={BUY_URL}
        className="absolute left-1/2 top-[73%] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e6d2c3] px-10 py-3 text-sm tracking-[0.25em] text-[#c3995b] shadow-sm transition-opacity hover:opacity-90"
      >
        Eu quero
      </a>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="bg-[#f3ebdd] px-6 pb-12 pt-10 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/oraculo/logo.avif" alt="Iara Vida" className="mx-auto h-14 w-auto opacity-90" />

      <p className="mt-4 text-xs tracking-[0.08em] text-[#3a3a32]/80">
        Me encontre nas mídias digitais
      </p>

      <div className="mt-5 flex items-center justify-center gap-6 text-[#2e3d3c]">
        <a href="https://www.instagram.com/iaravidart/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .46 1.4.86.4.4.66.8.86 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.46 1-.86 1.4-.4.4-.8.66-1.4.86-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.46-1.4-.86-.4-.4-.66-.8-.86-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.46-1 .86-1.4.4-.4.8-.66 1.4-.86.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.06-1.1.05-1.7.24-2.1.4-.5.2-.9.43-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.06 3.3c.05 1.1.24 1.7.4 2.1.2.5.43.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.06 1.6.06 4.7.06s3.5 0 4.7-.06c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.43 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.06-1.2.06-1.6.06-3.3s0-2.1-.06-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.43-.9-.83-1.3-.4-.4-.8-.63-1.3-.83-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.2-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
          </svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.8-.1-1.6-.15-2.4-.14-2.4 0-4 1.45-4 4.1v2.3H7.8V13h2.5v8h3.2Z" />
          </svg>
        </a>
        <a href="#" aria-label="Pinterest">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2a9.8 9.8 0 0 0-3.6 18.9c-.08-.8-.15-2 .03-2.9.17-.8 1.07-4.55 1.07-4.55s-.27-.55-.27-1.36c0-1.27.74-2.22 1.66-2.22.78 0 1.16.59 1.16 1.3 0 .79-.5 1.97-.76 3.07-.22.92.46 1.67 1.37 1.67 1.64 0 2.9-1.73 2.9-4.23 0-2.21-1.59-3.76-3.86-3.76-2.63 0-4.17 1.97-4.17 4 0 .79.3 1.64.69 2.1.07.09.08.17.06.26-.07.3-.23.92-.26 1.05-.04.17-.14.2-.32.12-1.2-.56-1.95-2.3-1.95-3.7 0-3.02 2.2-5.8 6.32-5.8 3.32 0 5.9 2.36 5.9 5.52 0 3.3-2.08 5.95-4.96 5.95-.97 0-1.88-.5-2.19-1.1l-.6 2.27c-.21.83-.79 1.87-1.18 2.5A9.8 9.8 0 1 0 12 2.2Z" />
          </svg>
        </a>
      </div>

      <p className="mt-8 text-[11px] text-[#3a3a32]/45">
        © {new Date().getFullYear()} Iara Vida · Oráculo Alma Criativa
      </p>
    </footer>
  );
}
