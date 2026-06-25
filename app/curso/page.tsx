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
    titulo: "Materiais & Inicio",
    aulas: 3,
    foto: "/curso/img9401.jpg",
    resultado: "Você entende tudo que precisa e se sente pronta para começar",
    tags: ["kit de materiais", "visão geral do curso"],
  },
  {
    num: "02",
    titulo: "Coletando Suas Terras",
    aulas: 2,
    foto: "/curso/img9400.jpg",
    resultado: "Você sai de casa e volta com a sua própria tinta",
    tags: ["identificar solo", "coletar argila", "mapa de cores"],
  },
  {
    num: "03",
    titulo: "Do Barro ao Pigmento",
    aulas: 2,
    escuro: true,
    foto: "/curso/img9412.jpg",
    resultado: "Você transforma terra bruta em pó em pigmento puro",
    tags: ["filtragem", "decantação", "refinamento"],
  },
  {
    num: "04",
    titulo: "Montando Sua Paleta",
    aulas: 3,
    escuro: true,
    foto: "/curso/img9414.jpg",
    resultado: "Você cria uma paleta de aquarela 100% natural e sua",
    tags: ["goma arábica", "óleos essenciais", "conservação"],
  },
  {
    num: "05",
    titulo: "O Primeiro Toque",
    aulas: 4,
    foto: "/curso/img9406.jpg",
    resultado: "Você pinta sua primeira obra com tinta da terra",
    tags: ["mapa cromático", "arte abstrata", "técnicas base"],
  },
  {
    num: "06",
    titulo: "Arte Orgânica",
    aulas: 2,
    foto: "/curso/img6655.jpg",
    resultado: "Você aprende as técnicas da pintura orgânica com geotinta",
    tags: ["monocromia", "manchas fluidas", "soltar o controle"],
  },
  {
    num: "07",
    titulo: "Natureza como Inspiração",
    aulas: 3,
    escuro: true,
    foto: "/curso/img9404.jpg",
    resultado: "Você aprende a fluir com a sua natureza interna pintando paisagens naturais",
    tags: ["olhar criativo", "composição", "inspiração viva"],
  },
  {
    num: "08",
    titulo: "Eternize Suas Obras",
    aulas: 1,
    escuro: true,
    foto: "/curso/img9415.jpg",
    resultado: "Sua arte dura décadas e chega linda nas redes sociais",
    tags: ["conservação natural", "fotografia", "edição com IA"],
  },
  {
    num: "09",
    titulo: "Rotina Criativa",
    aulas: 5,
    foto: "/curso/img9405.jpg",
    resultado: "Criar vira hábito — você não depende mais de inspiração",
    tags: ["diário criativo", "bloqueio criativo", "Oráculo Alma Criativa"],
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
            <div className="relative text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-terra/50 mb-2">
                sua jornada
              </p>
              <div className="flex justify-between font-grandenhas text-4xl text-terra leading-tight">
                <span>De alguém que</span>
                <span>para alguém que</span>
              </div>
              <img
                src="/icone-canva1.png"
                alt=""
                className="absolute -top-12 -right-4 w-36 pointer-events-none icon-float"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </Reveal>

          <div className="mt-12 space-y-4">
            {[
              {
                antes: "Quer criar mas não sabe por onde começar",
                depois: "Cria com segurança, do pigmento à tela",
              },
              {
                antes: "Usa tintas industriais que intoxicam você e o planeta",
                depois: "Faz sua própria paleta sustentável da terra",
              },
              {
                antes: "Sente que se distanciou da natureza sem perceber",
                depois: "Reconecta com a natureza a cada pincelada",
              },
              {
                antes: "Criatividade bloqueada pela rotina corrida",
                depois: "Rotina criativa que nutre corpo e alma",
              },
            ].map((item, i) => (
              <Reveal key={i} dir="up" delay={i * 80}>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-white/60 px-4 py-4 shadow-sm">
                  <p className="text-[13px] leading-snug text-terra/55">{item.antes}</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-px w-6 bg-terra/20" />
                    <span className="text-lg text-siena">→</span>
                    <div className="h-px w-6 bg-siena/30" />
                  </div>
                  <p className="text-[13px] leading-snug text-terra font-medium">{item.depois}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VÍDEO + FRASE ───────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "320px" }}>
        <video
          src="/curso/vid6434.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(61,31,21,0.50)" }} />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-8">
          <Reveal dir="fade">
            <p className="font-grandenhas text-5xl leading-tight text-white drop-shadow-md">
              Viva em harmonia<br />com a mãe terra
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
                    <img src={item.img} alt="" className="h-14 w-14 rounded-full object-cover shrink-0 icon-breathe" />
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

        <Reveal dir="up" delay={200}>
          <div className="mt-10 overflow-hidden -mx-6">
            <img
              src="/terrinhas.png"
              alt=""
              className="w-full object-cover"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </Reveal>
      </section>

      {/* ─── MÓDULOS ──────────────────────────────────────────────── */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-md px-6">
          <Reveal dir="up">
            <div className="relative">
              <img
                src="/icone-canva2.png"
                alt=""
                className="absolute -top-16 -right-8 w-36 pointer-events-none icon-float"
                style={{ mixBlendMode: "multiply" }}
              />
              <h2 className="font-grandenhas text-5xl text-terra leading-tight">
                Conteudo do Curso
              </h2>
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-terra/60 font-light">
              9 módulos &nbsp;·&nbsp; 25 aulas
            </p>
          </Reveal>
        </div>

        <div className="mt-10 space-y-4 px-6">
          {modulos.map((m, i) => (
            <Reveal key={i} dir="up" delay={i * 50}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                {/* Foto */}
                <div className="relative h-48">
                  <img
                    src={m.foto}
                    alt={m.titulo}
                    className="h-full w-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.escuro ? "from-terra/95 via-terra/40 to-terra/10" : "from-terra/80 via-terra/10 to-transparent"}`} />
                  {/* Número + título sobre a foto */}
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                      módulo {m.num} &nbsp;·&nbsp; {m.aulas} {m.aulas === 1 ? "aula" : "aulas"}
                    </span>
                    <p className="font-grandenhas text-4xl leading-tight text-white">
                      {m.titulo}
                    </p>
                  </div>
                </div>
                {/* Conteúdo */}
                <div className="p-4">
                  <p className="text-base font-medium leading-snug text-terra">
                    ✓ {m.resultado}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.tags.map((t, j) => (
                      <span key={j} className="rounded-full bg-areia/60 px-3 py-1 text-[11px] text-terra/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── IMG6628 FULL-BLEED + FRASE ───────────────────────────── */}
      <section className="relative" style={{ height: "420px" }}>
        <img
          src="/img6628.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(30,15,8,0.52)" }}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-8 text-center">
          <Reveal dir="fade">
            <p className="font-grandenhas text-4xl leading-snug text-white drop-shadow-md mx-auto max-w-xs">
              Uma dica de que você está seguindo seu propósito: sua criança interior tem orgulho de você
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section id="inscricao" className="bg-peach px-6 pt-12 pb-24 text-center">
        <div className="mx-auto max-w-sm">
          <Reveal dir="up">
            <p className="font-grandenhas text-6xl text-siena leading-none">
              pront@?
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
          <Reveal dir="up" delay={220}>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-terra/45 mb-1">investimento</p>
              <p className="font-grandenhas text-5xl text-terra leading-none">R$ 333</p>
              <p className="mt-1 text-sm text-terra/55">ou 12x de R$ 34</p>
              <p className="mt-3 text-xs text-rosa italic">Valor disponível apenas neste mês de lançamento</p>
            </div>
          </Reveal>

          <Reveal dir="up" delay={300}>
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
          className="mx-auto mb-8 h-24 w-auto icon-shimmer"
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
