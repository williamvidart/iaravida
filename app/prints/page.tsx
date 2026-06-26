import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";
import Reveal from "../components/Reveal";
import PrintCard from "./PrintCard";
import LembreteCard from "./LembreteCard";

export const metadata: Metadata = {
  title: "Prints | Iara Vida",
  description:
    "Artes impressas em papel aquarela de algodão 300g. Leve uma obra da Iara para sua casa.",
};

const colecoes = [
  {
    slug: "cerrado",
    nome: "Cerrado",
    desc: "A vegetação torcida, a terra vermelha e o céu imenso do Cerrado em papel aquarela.",
    prints: [
      { id: "c1", titulo: "Tucano",   srcs: ["/prints/tucano-arte.jpg", "/prints/tucano.png"], filters: [undefined, "brightness(0.82) saturate(0.95) contrast(1.05)"] },
      { id: "c2", titulo: "Carcará",  srcs: ["/prints/ilustracao-a.png", "/prints/carcara-mockup.jpg"] },
      { id: "c3", titulo: "Arara",    srcs: ["/prints/img3328.png", "/prints/arara-mockup.jpg", "/prints/arara-mao.png"], positions: ["center center", "57% center", "center center"] },
      { id: "c4", titulo: "Cerrado",  srcs: ["/prints/lembrete-cerrado.jpg"] },
    ],
  },
  {
    slug: "cristo",
    nome: "Cristo",
    desc: "Obras inspiradas na espiritualidade, na entrega e no sagrado que existe em cada gesto.",
    prints: [
      { id: "cr1", titulo: "Flores",   srcs: ["/prints/cristo-flores.jpg"] },
      { id: "cr2", titulo: "Fé",       srcs: ["/prints/cristo-fe.jpg"] },
      { id: "cr3", titulo: "Em breve", srcs: [null] },
      { id: "cr4", titulo: "Em breve", srcs: [null] },
    ],
  },
  {
    slug: "marrocco",
    nome: "Marrocco",
    desc: "Cores, padrões e a luz dourada de Marrocos impressos com pigmentos e aquarela.",
    prints: [
      { id: "m1", titulo: "Fonte",    srcs: ["/prints/img9067.png", "/prints/palmeiras-arte.jpg"] },
      { id: "m2", titulo: "Deserto", srcs: ["/prints/deserto-mockup.jpg", "/prints/deserto-arte.jpg"] },
    ],
  },
  {
    slug: "lembrete",
    nome: "Lembrete",
    desc: "Palavras e imagens que lembram do que importa. Para ter sempre à vista.",
    prints: [],
  },
];

const bgColecao = ["bg-creme", "bg-peach", "bg-creme", "bg-peach"];

export default function PrintsPage() {
  return (
    <div className="flex flex-1 flex-col bg-creme">
      <MobileNav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="px-6 pt-28 pb-12 text-center">
        <Reveal dir="up">
          <p className="text-xs uppercase tracking-[0.35em] text-terra/45 mb-1">Loja</p>
          <h1 className="font-grandenhas text-7xl text-terra leading-none">Prints</h1>
          <p className="mt-5 text-sm leading-relaxed text-terra/65 max-w-xs mx-auto">
            Arte acessível para habitar o seu espaço. Impressa em papel aquarela de algodão 300g — pronta para ser emoldurada como você desejar e decorar o seu lar.
          </p>
        </Reveal>
      </section>

      {/* ── COLEÇÕES ────────────────────────────────────────── */}
      {colecoes.map((col, ci) => (
        <section
          key={col.slug}
          id={col.slug}
          className={`${col.slug === "cerrado" || col.slug === "marrocco" ? "relative" : bgColecao[ci]} px-4 pt-14 pb-16`}
          style={col.slug === "cerrado" ? {
            backgroundImage: "url('/prints/cerrado-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : col.slug === "marrocco" ? {
            backgroundImage: "url('/prints/marrocco-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : undefined}
        >
          {(col.slug === "cerrado" || col.slug === "marrocco") && (
            <div className={`absolute inset-0 ${col.slug === "cerrado" ? "bg-terra/68" : "bg-terra/50"}`} />
          )}
          <div className="relative max-w-md mx-auto">
            {/* header da coleção */}
            <Reveal dir="up">
              <div className="mb-8 px-2">
                <p className={`text-xs uppercase tracking-[0.35em] mb-1 ${col.slug === "cerrado" || col.slug === "marrocco" ? "text-creme/50" : "text-terra/40"}`}>Coleção</p>
                <h2 className={`font-grandenhas text-5xl leading-none ${col.slug === "cerrado" || col.slug === "marrocco" ? "text-areia" : "text-terra"}`}>{col.nome}</h2>
                <p className={`mt-2 text-sm leading-relaxed ${col.slug === "cerrado" || col.slug === "marrocco" ? "text-creme/70" : "text-terra/60"}`}>{col.desc}</p>
              </div>
            </Reveal>

            {/* grade de prints */}
            {col.slug === "lembrete" ? (
              <Reveal dir="up">
                <LembreteCard />
              </Reveal>
            ) : (
              <div className={`grid gap-4 ${col.slug === "marrocco" ? "grid-cols-1 w-1/2 mx-auto" : "grid-cols-2"}`}>
                {col.prints.map((p, i) => (
                  <Reveal key={p.id} dir="up" delay={i * 60}>
                    <PrintCard titulo={p.titulo} srcs={p.srcs} positions={(p as any).positions} filters={(p as any).filters} dark={col.slug === "cerrado" || col.slug === "marrocco"} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ── SOBRE OS PRINTS ─────────────────────────────────── */}
      <section className="bg-dark px-6 py-16 text-creme">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <h2 className="font-grandenhas text-4xl text-areia mb-6">O que você recebe</h2>
          </Reveal>
          <div className="space-y-5 text-sm leading-relaxed text-creme/70">
            <Reveal dir="up" delay={60}>
              <div className="flex gap-4 items-start">
                <span className="font-grandenhas text-3xl text-creme/20 leading-none shrink-0">01</span>
                <p>
                  <strong className="text-creme font-medium">Papel aquarela de algodão 300g</strong><br />
                  A mesma textura que uso nas obras originais. Absorve a tinta de forma que a cor vive na fibra, não na superfície.
                </p>
              </div>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <div className="flex gap-4 items-start">
                <span className="font-grandenhas text-3xl text-creme/20 leading-none shrink-0">02</span>
                <p>
                  <strong className="text-creme font-medium">Arte impressa por mim</strong><br />
                  Cada print é impresso, revisado e embalado com cuidado. Não é produção em massa — é uma peça que sai das minhas mãos para a sua casa.
                </p>
              </div>
            </Reveal>
            <Reveal dir="up" delay={180}>
              <div className="flex gap-4 items-start">
                <span className="font-grandenhas text-3xl text-creme/20 leading-none shrink-0">03</span>
                <p>
                  <strong className="text-creme font-medium">Entrega para todo o Brasil — frete incluso</strong><br />
                  O valor já inclui o frete. Enviado com proteção para chegar intacto. O prazo varia conforme a região.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className="bg-creme px-6 py-16 text-center">
        <div className="mx-auto max-w-xs">
          <Reveal dir="up">
            <p className="font-grandenhas text-4xl text-siena mb-3">Dúvidas?</p>
            <p className="text-sm leading-relaxed text-terra/65 mb-8">
              Me chame no Instagram — respondo com carinho.
            </p>
            <a
              href="https://instagram.com/iaravidart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-siena px-8 py-4 text-xs uppercase tracking-[0.3em] text-creme transition-opacity hover:opacity-80"
            >
              Falar com a Iara
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-dark px-6 py-12 text-creme text-center">
        <Reveal dir="up">
          <img src="/logo-iara.png" alt="Iara Vida" className="mx-auto mb-6 h-20 w-auto" style={{ filter: "brightness(10) sepia(1) saturate(0)" }} />
          <div className="flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-creme/60">
            <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="hover:text-areia transition-colors">Instagram</a>
            <a href="/" className="hover:text-areia transition-colors">Início</a>
          </div>
        </Reveal>
      </footer>
    </div>
  );
}
