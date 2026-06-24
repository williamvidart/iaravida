import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Aquarela da Terra | Iara Vida",
  description:
    "Transforme o solo que você pisa na sua maior fonte de expressão. Curso online de aquarela natural com pigmentos da terra.",
};

const modulos = [
  {
    num: "01",
    titulo: "Boas-vindas — Materiais para o seu despertar",
    aulas: 3,
    descricao:
      "A trajetória de cura através das geotintas, os materiais e ferramentas necessários e uma visão do que você vai criar.",
  },
  {
    num: "02",
    titulo: "O Mapa das Cores — Onde e como coletar suas terras",
    aulas: 2,
    descricao:
      "Como identificar o solo, onde encontrar argila e o guia completo de coleta na natureza.",
  },
  {
    num: "03",
    titulo: "Filtragem e Refinamento",
    aulas: 2,
    descricao:
      "Do barro bruto ao pó pigmento: liberando a cor e o processo de decantação — o tempo e a separação.",
  },
  {
    num: "04",
    titulo: "Aglutinantes, Conservação e Montagem da Paleta",
    aulas: 3,
    descricao:
      "Preparo da goma arábica, o toque dos óleos essenciais para conservação e a montagem da sua paleta de aquarela natural.",
  },
  {
    num: "05",
    titulo: "O Primeiro Toque — Testes e Pintura",
    aulas: 4,
    descricao:
      "Ativando sua paleta, pintando seu mapa cromático, arte abstrata com a mão não dominante e as técnicas da aquarela da terra.",
  },
  {
    num: "06",
    titulo: "Os Princípios da Arte Orgânica",
    aulas: 2,
    descricao:
      "Arte monocromática e a brincadeira das manchas fluidas — deixando a tinta conduzir.",
  },
  {
    num: "07",
    titulo: "A Natureza Como Fonte de Inspiração",
    aulas: 3,
    descricao:
      "O olhar criativo para coletar inspirações, pintando folhas e a Árvore da Vida com princípios de composição.",
  },
  {
    num: "08",
    titulo: "Eternize Suas Obras",
    aulas: 1,
    descricao:
      "Conservadores naturais, fotografia das obras e edição com inteligência artificial.",
  },
  {
    num: "09",
    titulo: "Rotina Criativa",
    aulas: 5,
    descricao:
      "Arte como autoconhecimento, diário criativo, criança interior, como lidar com o bloqueio criativo e o Oráculo Alma Criativa.",
  },
];

const paraQuem = [
  {
    img: "/paraquem1.png",
    titulo: "Para você que facilita vivências e quer trazer a energia da Terra para os seus círculos",
    descricao:
      "Se você conduz retiros, workshops, círculos de mulheres ou dinâmicas de grupo, este curso oferece uma ferramenta sensorial e simbólica profunda. Você aprenderá a guiar seus participantes em uma experiência real de presença e ancoragem, onde a própria criação da tinta se torna um ritual de conexão com o sagrado.",
  },
  {
    img: "/paraquem2.png",
    titulo: "Para você que busca mais naturalidade, alma e autenticidade em suas obras",
    descricao:
      "Se você é artista, ilustrador ou criativo e sente que os materiais sintéticos convencionais limitam a profundidade da sua expressão. Aqui, você vai descobrir a beleza da organicidade, o aroma, a textura e a exclusividade que só os pigmentos naturais carregam, trazendo mais verdade, história viva e respeito ecológico para a sua arte.",
  },
  {
    img: "/paraquem3.png",
    titulo: "Para você que é terapeuta e enxerga na arte um portal de aterramento e cura",
    descricao:
      "Se você atua com arteterapia, psicologia integrativa ou práticas de cura sutil. O manejo da terra e a alquimia das cores naturais servem como um poderoso canal de expressão emocional. Você terá em mãos uma prática integrativa para ajudar seus interagentes a limparem o excesso da mente, silenciarem o barulho externo e resgatarem uma criatividade que talvez estivesse adormecida.",
  },
  {
    img: "/paraquem4.png",
    titulo: "Para mães, pais e responsáveis que desejam desacelerar o tempo e criar memórias vivas com as crianças",
    descricao:
      "Para você que busca uma pausa na rotina frenética para viver momentos de presença real e afeto puro com os pequenos. Ao substituir as tintas industriais pela alquimia das cores naturais da Terra, você transforma o ato de pintar em uma experiência mágica, lúdica e segura — um encontro profundo entre a infância, a criatividade e a própria Natureza.",
  },
];

export default function CursoPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col">
        <MobileNav />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,20,10,0.55) 0%, rgba(30,20,10,0.35) 40%, rgba(30,20,10,0.72) 100%)",
          }}
        />

        {/* texto centrado verticalmente no meio do hero */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-3">
              curso online
            </p>
          </Reveal>
          <Reveal dir="up" delay={80}>
            <h1 className="font-grandenhas text-6xl leading-none text-white drop-shadow-lg sm:text-8xl whitespace-nowrap">
              Aquarela da Terra
            </h1>
          </Reveal>
          <Reveal dir="up" delay={160}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/85">
              Transforme o solo que você pisa na sua maior fonte de expressão.
            </p>
          </Reveal>
        </div>

        {/* botão fixo na parte inferior */}
        <div className="absolute bottom-12 inset-x-0 z-10 flex justify-center px-6">
          <Reveal dir="up" delay={240}>
            <a
              href="#inscricao"
              className="inline-flex h-13 items-center justify-center rounded-full bg-rosa px-10 text-sm font-medium uppercase tracking-wide text-creme transition-colors hover:bg-siena"
            >
              Quero me inscrever
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─── JORNADA A → B ────────────────────────────────────────── */}
      <section className="bg-creme px-6 py-20">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-terra/50 mb-2">
                sua jornada
              </p>
              <h2 className="font-grandenhas text-5xl text-terra leading-tight">
                De onde você está<br />
                <span className="block text-right">para onde você vai</span>
              </h2>
              <img
                src="/icone-canva1.png"
                alt=""
                className="absolute -top-16 -right-8 w-48 pointer-events-none"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </Reveal>

          <div className="mt-12 space-y-10">
            {/* Ponto A */}
            <Reveal dir="left">
              <div className="border-l-2 border-terra/20 pl-5">
                <p className="text-xs uppercase tracking-[0.25em] text-terra/40 mb-3">antes</p>
                <ul className="space-y-3 text-[15px] leading-relaxed text-terra/65">
                  <li>Você sente vontade de criar, mas não sabe por onde começar</li>
                  <li>Usa tintas industriais e sente que está se intoxicando e intoxicando o planeta</li>
                  <li>Sente que se distanciou da natureza sem perceber</li>
                  <li>Tem criatividade mas se sente bloqueada por não se dar tempo na rotina corrida</li>
                </ul>
              </div>
            </Reveal>

            {/* Seta */}
            <div className="flex justify-center">
              <div className="h-12 w-px bg-terra/25" />
            </div>

            {/* Ponto B */}
            <Reveal dir="right">
              <div className="border-l-2 border-siena pl-5">
                <p className="text-xs uppercase tracking-[0.25em] text-siena/60 mb-3">depois</p>
                <ul className="space-y-3 text-[15px] leading-relaxed text-terra">
                  <li>Ganha autonomia artística, coleta sua própria terra e pinta com autenticidade</li>
                  <li>Cria sua própria paleta sustentável e vive em harmonia com o seu corpo e com a natureza</li>
                  <li>Se reconecta com a natureza e com a sua essência pintando com confiança usando técnicas fluidas</li>
                  <li>Tem uma rotina criativa que reconecta com a natureza diariamente</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── IMAGEM + FRASE ───────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "320px",
          backgroundColor: "var(--areia)",
          padding: "14px",
          boxSizing: "border-box",
        }}
      >
        {/* image fills the padded area — bg-image for consistent cross-platform cover */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            right: "14px",
            bottom: "14px",
            backgroundImage: "url('/canva7.png')",
            backgroundSize: "220%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* dark overlay inside the same inset */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            right: "14px",
            bottom: "14px",
            backgroundColor: "rgba(61,31,21,0.50)",
          }}
        />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-8">
          <Reveal dir="fade">
            <p className="font-grandenhas text-5xl leading-tight text-white drop-shadow-md">
              A terra que você pisa<br />já guarda a sua cor
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── PARA QUEM É ──────────────────────────────────────────── */}
      <section className="bg-dark px-6 py-20 text-creme">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.3em] text-creme/40 mb-2">para quem é</p>
            <h2 className="font-grandenhas text-5xl leading-tight text-white whitespace-nowrap">
              Este curso é para você
            </h2>
          </Reveal>

          <Reveal dir="up" delay={80}>
            <p className="mt-6 text-[15px] leading-relaxed text-creme/70 italic border-l-2 border-creme/20 pl-4">
              Se você sente o chamado de desacelerar o ritmo, tocar o solo e transformar a arte em um caminho de retorno à natureza, este espaço é seu.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-creme/60">
              O <em>Aquarela da Terra</em> não é apenas sobre aprender uma técnica de pintura; é sobre resgatar uma sabedoria ancestral e integrá-la à sua vida de forma sutil, profunda e presente.
            </p>
          </Reveal>

          <div className="mt-12 space-y-0">
            {paraQuem.map((item, i) => (
              <Reveal key={i} dir="up" delay={i * 80}>
                <details className="group border-b border-creme/10 py-5">
                  <summary className="flex cursor-pointer items-center gap-4 list-none">
                    <img src={item.img} alt="" className="h-14 w-14 rounded-full object-cover shrink-0" />
                    <p className="flex-1 font-medium text-creme leading-snug text-sm">{item.titulo}</p>
                    <span className="text-creme/40 transition-transform duration-300 group-open:rotate-45 shrink-0 text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 ml-[4.5rem] text-sm leading-relaxed text-creme/55">
                    {item.descricao}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal dir="up" delay={100}>
            <p className="mt-12 text-[15px] leading-relaxed text-creme/70 italic border-l-2 border-rosa/50 pl-4">
              Você se reconheceu em algum desses caminhos? Então dê o próximo passo. Permita-se tocar a terra, sintonizar-se com os ciclos naturais e colorir a sua jornada com as cores da nossa grande mãe.
            </p>
          </Reveal>

          <Reveal dir="up" delay={160}>
            <div className="mt-10 text-center">
              <a
                href="#inscricao"
                className="inline-flex h-13 items-center justify-center rounded-full bg-areia px-10 text-sm font-medium uppercase tracking-wide text-terra transition-colors hover:bg-rosa hover:text-creme"
              >
                Quero criar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── MÓDULOS ──────────────────────────────────────────────── */}
      <section className="bg-creme px-6 py-20">
        <div className="mx-auto max-w-md">
          <Reveal dir="up">
            <p className="text-xs uppercase tracking-[0.3em] text-terra/50 mb-2">conteúdo</p>
            <h2 className="font-grandenhas text-5xl text-terra leading-tight">
              9 módulos.<br />25 aulas.
            </h2>
            <p className="mt-4 text-sm text-terra/60">
              Uma trilha completa — da terra às obras.
            </p>
          </Reveal>

          <div className="mt-12 space-y-0">
            {modulos.map((m, i) => (
              <Reveal key={i} dir="up" delay={i * 40}>
                <details className="group border-b border-terra/15 py-5">
                  <summary className="flex cursor-pointer items-start gap-4 list-none">
                    <span className="font-grandenhas text-5xl text-terra/30 leading-none mt-0.5 shrink-0">
                      {m.num}
                    </span>
                    <div className="flex-1">
                      <p className="text-[15px] font-medium text-terra leading-snug">
                        {m.titulo}
                      </p>
                      <p className="text-xs text-terra/45 mt-1">
                        {m.aulas} {m.aulas === 1 ? "aula" : "aulas"}
                      </p>
                    </div>
                    <span className="text-terra/40 mt-1 transition-transform duration-300 group-open:rotate-45 shrink-0 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 ml-10 text-sm leading-relaxed text-terra/60">
                    {m.descricao}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section id="inscricao" className="bg-peach px-6 py-24 text-center">
        <div className="mx-auto max-w-sm">
          <Reveal dir="up">
            <p className="font-grandenhas text-6xl text-siena leading-none">
              pronta?
            </p>
          </Reveal>
          <Reveal dir="up" delay={100}>
            <h2 className="mt-3 text-3xl font-bold text-terra leading-tight">
              Comece a criar<br />com a terra
            </h2>
          </Reveal>
          <Reveal dir="up" delay={180}>
            <p className="mt-5 text-[15px] leading-relaxed text-terra/70">
              O solo que você pisa já guarda a sua paleta. Você só precisa aprender a ouvi-lo.
            </p>
          </Reveal>
          <Reveal dir="up" delay={260}>
            <a
              href="https://hotmart.com/product/aquarela-da-terra"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-13 items-center justify-center rounded-full bg-rosa px-10 text-sm font-medium uppercase tracking-wide text-creme transition-colors hover:bg-siena"
            >
              Quero me inscrever
            </a>
          </Reveal>
          <Reveal dir="fade" delay={340}>
            <p className="mt-6 text-xs text-terra/40">
              Acesso imediato pela Hotmart
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-dark px-6 py-16 text-creme text-center">
        <img
          src="/logo-iara.png"
          alt="Iara Vida"
          className="mx-auto mb-8 h-24 w-auto"
          style={{ filter: "brightness(10) sepia(1) saturate(0)" }}
        />
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
        </div>
      </footer>
    </div>
  );
}
