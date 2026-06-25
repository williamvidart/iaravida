import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";
import Reveal from "../components/Reveal";
import FormularioEspera from "./FormularioEspera";

export const metadata: Metadata = {
  title: "Vivências Além das Cores | Iara Vida",
  description:
    "Um espaço de desbloqueio criativo na natureza. Meditação, pigmentos da terra e expressão livre com condução da Iara.",
};

const galeria = [
  "/vivencias/img8368.jpg",
  "/vivencias/img8382.jpg",
  "/vivencias/img8384.jpg",
  "/vivencias/img8387.jpg",
  "/vivencias/img8386.jpg",
  "/vivencias/img8136.jpg",
  "/vivencias/img8373.jpg",
  "/vivencias/img8376.jpg",
  "/vivencias/img8379.jpg",
  "/vivencias/img8388.jpg",
  "/vivencias/img8375.jpg",
  "/vivencias/img8345.jpg",
  "/vivencias/img8389.jpg",
  "/vivencias/img8390.jpg",
  "/vivencias/img8391.jpg",
  "/vivencias/img8372.jpg",
  "/vivencias/img8393.jpg",
  "/vivencias/img7753.jpg",
  "/vivencias/img8369.jpg",
  "/vivencias/img8397.jpg",
  "/vivencias/img7754.jpg",
];

const etapas = [
  {
    num: "01",
    titulo: "Abertura do Campo",
    desc: "Meditação guiada da criança interior. Um convite para pintar com leveza, saindo do perfeccionismo e entrando na presença.",
  },
  {
    num: "02",
    titulo: "Introdução à Terra",
    desc: "Você aprende sobre os pigmentos naturais — de onde vêm, como são coletados e o que cada cor carrega de informação da terra.",
  },
  {
    num: "03",
    titulo: "Expressão Livre",
    desc: "Com as mãos, pincéis e geotinta, você cria sem julgamento. Um lugar de permissão para SER e para o que quiser emergir.",
  },
  {
    num: "04",
    titulo: "Integração",
    desc: "Fechamento em roda. O que a arte revelou? O que fica? Uma escuta gentil do que nasceu durante a vivência.",
  },
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
        {/* label no topo */}
        <div className="absolute top-20 inset-x-0 flex justify-center px-6">
          <Reveal dir="fade">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Vivências presenciais
            </p>
          </Reveal>
        </div>
        {/* título e subtítulo na base */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-20 px-6 text-center">
          <Reveal dir="up">
            <h1 className="font-grandenhas text-6xl leading-tight text-white drop-shadow-md">
              Além das Cores
            </h1>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Um espaço de desbloqueio criativo na natureza — com meditação, terra e expressão livre.
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
                "Além das Cores" é um espaço que eu crio para o artista que existe em cada pessoa se expressar livremente — com minha condução, mas sem a minha direção.
              </p>
            </Reveal>
            <Reveal dir="up" delay={150}>
              <p>
                Sempre acontece na natureza. Em lugares que carregam chão real, ar limpo e silêncio suficiente para ouvir o que está dentro de você.
              </p>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p>
                Não é aula de pintura. É um lugar de desbloqueio — de segurança e permissão para SER. Para criar sem julgamento, sem comparação, sem a pressão de fazer bonito.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── JORNADA ─────────────────────────────────────────── */}
      <section className="bg-peach px-6 py-16">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.35em] text-terra/50 mb-2">como acontece</p>
            <h2 className="font-grandenhas text-5xl text-terra mb-10">
              A jornada da vivência
            </h2>
          </Reveal>
          <div className="space-y-6">
            {etapas.map((e, i) => (
              <Reveal key={e.num} dir="left" delay={i * 80}>
                <div className="flex gap-5">
                  <span className="font-grandenhas text-4xl text-siena/40 leading-none mt-1 shrink-0">
                    {e.num}
                  </span>
                  <div>
                    <p className="font-medium text-terra text-base">{e.titulo}</p>
                    <p className="mt-1 text-sm leading-relaxed text-terra/65">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA ─────────────────────────────────────────── */}
      <section className="py-0">
        <div className="grid grid-cols-2" style={{ gap: "3px" }}>
          {galeria.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{ height: i % 5 === 0 ? "280px" : "180px", gridColumn: i % 5 === 0 ? "span 2" : undefined }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
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
