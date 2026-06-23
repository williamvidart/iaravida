"use client";

import { useState } from "react";

const links = [
  { href: "#topo", label: "Início" },
  { href: "#quem-sou", label: "Quem Sou" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/curso", label: "Curso" },
  { href: "/telas-e-aquarelas", label: "Telas e Aquarelas" },
  { href: "/oraculo", label: "Oráculo" },
  { href: "#imersoes", label: "Imersões" },
  { href: "#contato", label: "Contato" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-5 py-5">
        <a
          href="#topo"
          onClick={() => setOpen(false)}
          className="leading-none"
        >
          <img src="/logo-iara.png" alt="Iara Vida" className="h-14 w-auto" style={{ mixBlendMode: "screen", filter: "brightness(10)" }} />
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-white shadow-md transition-colors hover:bg-gold-dark"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Slide-down menu */}
      <nav
        className={`overflow-hidden bg-dark/95 backdrop-blur-sm transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[460px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm uppercase tracking-[0.18em] text-cream transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
