import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";
import Reveal from "../components/Reveal";
import FormularioEspera from "./FormularioEspera";

export const metadata: Metadata = {
  title: "Vivências Além das Cores | Iara Vida",
  description:
    "Um espaço de desbloqueio criativo na natureza. Meditação, pigmentos da terra e expressão livre com condução da Iara.",
};

const etapas = [
  {
    num: "01",
    titulo: "Abertura do Campo",
    desc: "Meditação guiada da criança interior. Um convite para pintar com leveza, saindo do perfeccionismo e entrando na presença.",
    foto: "/vivencias/img8345.jpg",
    bg: "bg-creme",
    align: "left" as const,
  },
  {
    num: "02",
    titulo: "Introdução à Terra",
    desc: "Você aprende sobre os pigmentos naturais — de onde vêm, como são coletados e o que cada cor carrega de informação da terra.",
    foto: "/vivencias/img8375.jpg",
    bg: "bg-dark",
    align: "right" as const,
  },
  {
    num: "03",
    titulo: "Expressão Livre",
    desc: "Com as mãos, pincéis e geotinta, você cria sem julgamento. Um lugar de permissão para SER e para o que quiser emergir.",
    foto: "/vivencias/img8379.jpg",
    bg: "bg-peach",
    align: "left" as const,
  },
  {
    num: "04",
    titulo: "Integração",
    desc: "Fechamento em roda. O que a arte revelou? O que fica? Uma escuta gentil do que nasceu durante a vivência.",
    foto: "/vivencias/img8369.jpg",
    bg: "bg-creme",
    align: "right" as const,
  },
];

const momentos = [
  "/vivencias/img8384.jpg",
  "/vivencias/img8373.jpg",
  "/vivencias/img8393.jpg",
  "/vivencias/img8390.jpg",
  "/vivencias/img8391.jpg",
  "/vivencias/img7753.jpg",
  "/vivencias/img8388.jpg",
  "/vivencias/img8372.jpg",
  "/vivencias/img8389.jpg",
  "/vivencias/img7754.jpg",
  "/vivencias/img8397.jpg",
  "/vivencias/img8368.jpg",
];

export default function VivenciasPage() {
  return (
    <div className="flex flex-1 flex-col bg-peach">
      <MobileNav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "88vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/vivencias/img8136v.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,28,18,0.25) 0%, rgba(40,28,18,0.15) 50%, rgba(40,28,18,0.65) 100%)",
          }}
        />
        {/* label + título no topo */}
        <div className="absolute top-28 inset-x-0 flex flex-col items-center px-6 text-center">
          <Reveal dir="fade">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Vivências presenciais
            </p>
            <h1 className="font-grandenhas text-6xl leading-tight text-white drop-shadow-md -mt-4">
              Além das Cores
            </h1>
          </Reveal>
        </div>
        {/* subtítulo na base */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-20 px-6 text-center">
          <Reveal dir="up">
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              Um espaço de desbloqueio criativo na natureza, com meditação, terra e expressão livre.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── O QUE É ─────────────────────────────────────────── */}
      <section className="bg-creme px-6 py-20">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <h2 className="font-grandenhas text-5xl text-siena mb-8">
              O que é este espaço
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-terra/75">
            <Reveal dir="up" delay={80}>
              <p>
                "Além das Cores" é um espaço que eu crio para o artista que existe em cada pessoa se expressar livremente — com minha condução, mas pela direção do seu coração.
              </p>
            </Reveal>
            <Reveal dir="up" delay={150}>
              <p>
                Sempre acontece na natureza. Em lugares que auxiliam a sua escuta interna, com ar puro, paisagens exuberantes e som dos pássaros.
              </p>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p>
                Não é aula de pintura. É um lugar de desbloqueio, de segurança e permissão para SER. Para criar sem julgamento, sem comparação, sem a pressão de fazer bonito.
              </p>
            </Reveal>
            <Reveal dir="up" delay={290}>
              <p className="font-grandenhas text-5xl text-siena">
                Um ambiente de acolhimento.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── JORNADA — header ────────────────────────────────── */}
      <section className="bg-peach px-6 pt-16 pb-0">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.35em] text-terra/50 mb-2">como acontece</p>
            <h2 className="font-grandenhas text-5xl text-terra">
              A jornada da vivência
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── JORNADA — etapas com foto ───────────────────────── */}
      {etapas.map((e, i) => (
        <section key={e.num} className={e.bg}>
          {/* foto full-bleed */}
          <Reveal dir="fade">
            <div className="overflow-hidden" style={{ height: "280px" }}>
              <img src={e.foto} alt={e.titulo} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          {/* texto */}
          <Reveal dir={e.align === "left" ? "left" : "right"}>
            <div className={`px-6 py-8 ${e.align === "right" ? "text-right" : ""}`}>
              <span className={`font-grandenhas text-6xl leading-none ${e.bg === "bg-dark" ? "text-creme/15" : "text-terra/10"}`}>
                {e.num}
              </span>
              <h3 className={`font-grandenhas text-3xl mt-1 ${e.bg === "bg-dark" ? "text-areia" : "text-terra"}`}>
                {e.titulo}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${e.bg === "bg-dark" ? "text-creme/65" : "text-terra/65"}`}>
                {e.desc}
              </p>
            </div>
          </Reveal>
        </section>
      ))}

      {/* ── MOMENTOS (galeria curada) ────────────────────────── */}
      <section className="py-0">
        <div className="grid grid-cols-3" style={{ gap: "2px" }}>
          {momentos.map((src, i) => (
            <div key={i} className="overflow-hidden" style={{ height: "130px" }}>
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── DENTRO DE RETIROS ────────────────────────────────── */}
      <section className="bg-dark px-6 py-16 text-creme">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.35em] text-creme/40 mb-4">também acontece</p>
            <h2 className="font-grandenhas text-4xl text-areia leading-snug mb-5">
              Vivências dentro de retiros
            </h2>
            <p className="text-sm leading-relaxed text-creme/70">
              Se você organiza retiros, imersões ou encontros espirituais e sente que uma vivência com pigmentos da terra pode completar a experiência das suas participantes — vamos conversar.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-creme/70">
              Ofereço a condução do "Além das Cores" dentro de programações já existentes, criando um momento de expressão criativa e reconexão com a natureza.
            </p>
            <a
              href="https://instagram.com/iaravidart"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-xs uppercase tracking-[0.3em] text-areia border-b border-areia/40 pb-0.5 transition-colors hover:text-creme"
            >
              Fale comigo no Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── LISTA DE ESPERA ─────────────────────────────────── */}
      <section id="lista-espera" className="bg-creme px-6 py-20">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.35em] text-terra/50 mb-2">vagas limitadas</p>
            <h2 className="font-grandenhas text-5xl text-siena mb-3">
              Entre para a lista
            </h2>
            <p className="text-sm leading-relaxed text-terra/65 mb-10">
              As datas são divulgadas primeiro para quem está na lista. Quando a próxima vivência for anunciada, você receberá o convite antes de todo mundo.
            </p>
          </Reveal>
          <FormularioEspera />
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
