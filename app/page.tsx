import MobileNav from "./components/MobileNav";
import Reveal from "./components/Reveal";
import MotionFx from "./components/MotionFx";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-peach">
      <Hero />
      <Stats />
      <QuemSou />


      <Galeria />
      <Imersoes />
      <Footer />
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* Placeholder de foto — bloco de cor fixo onde a foto da Iara entra  */
/* ----------------------------------------------------------------- */
function Foto({
  className = "",
  tom = "#c79b58",
  src,
  label = "foto",
  position = "center",
}: {
  className?: string;
  tom?: string;
  src?: string;
  label?: string;
  position?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: tom,
        backgroundImage: src ? `url('${src}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: position,
      }}
    >
      {!src && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/45 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section id="topo" className="relative">
      <MobileNav />

      <div className="relative flex min-h-[88vh] flex-col items-center justify-end overflow-hidden">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div
            className="kenburns absolute inset-[-6%]"
            style={{
              backgroundColor: "#b9966a",
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "25% center",
            }}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,28,18,0.30) 0%, rgba(40,28,18,0.12) 40%, rgba(40,28,18,0.42) 100%)",
          }}
        />

        <p className="reveal reveal-2 font-grandenhas relative mb-28 mt-auto px-6 text-center text-5xl leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-7xl">
          <span className="block">A artista que habita em mim</span>
          <span className="block">honra @ artista que</span>
          <span className="block">habita em você</span>
        </p>

        <a
          href="#quem-sou"
          className="reveal reveal-3 absolute bottom-8 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/90"
        >
          Conheça
          <span className="cue-line block h-8 w-px bg-white/70" />
        </a>
      </div>
    </section>
  );
}

/* --------------------------- STATS (colônia com motion) ------------ */
function Stats() {
  return (
    <section className="overflow-hidden px-6 py-20" style={{ backgroundColor: "#C0806E" }}>
      <div className="mx-auto max-w-md">
        {/* Colagem de fotos com motion: central escala, laterais deslizam opostas */}
        <div className="relative mx-auto h-[420px]">
          {/* lateral esquerda — desliza para a direita ao rolar */}
          <div className="absolute left-0 top-20 z-10">
            <MotionFx speedX={4}>
              <Foto className="h-44 w-32 rounded-sm" src="/img8384.jpg" position="center" />
            </MotionFx>
          </div>
          {/* lateral direita — desliza para a esquerda ao rolar */}
          <div className="absolute right-0 top-32 z-10">
            <MotionFx speedX={-4}>
              <Foto className="h-44 w-32 rounded-sm" src="/img7267.jpg" position="center" />
            </MotionFx>
          </div>
          {/* central — escala (out-in) ao passar pelo centro */}
          <div className="absolute inset-x-0 top-2 z-20 flex justify-center">
            <MotionFx scaleAmt={0.18}>
              <Foto className="h-72 w-56 rounded-sm shadow-xl" src="/img8719.jpg" position="center" />
            </MotionFx>
          </div>
        </div>

        {/* Números — entram pela esquerda e deslizam */}
        <div className="-mt-8 flex flex-col gap-10">
          <Reveal dir="left">
            <MotionFx speedX={2}>
              <Stat
                numero="43 mil"
                titulo="Pessoas na comunidade"
                sub="na comunidade do Instagram"
              />
            </MotionFx>
          </Reveal>
          <Reveal dir="left" delay={140}>
            <MotionFx speedX={2}>
              <Stat
                numero="480"
                titulo="Obras compartilhadas"
                sub="Aquarelas, telas e geotintas"
              />
            </MotionFx>
          </Reveal>

          <Reveal dir="fade" delay={240}>
            <div className="flex justify-center gap-8 pt-2 text-xs uppercase tracking-[0.2em] text-creme/60">
              <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-creme">Instagram</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ numero, titulo, sub }: { numero: string; titulo: string; sub: string }) {
  return (
    <div className="text-center">
      <div className="font-grandenhas text-6xl text-creme/60">+de</div>
      <div className="text-5xl font-semibold leading-none text-creme">{numero}</div>
      <div className="mt-3 text-base font-medium text-creme">{titulo}</div>
      <div className="mt-1 text-sm text-creme/65">{sub}</div>
    </div>
  );
}

/* --------------------------- QUEM SOU (parallax em camadas) -------- */
function QuemSou() {
  return (
    <section id="quem-sou" className="overflow-hidden bg-creme px-6 py-20">
      <div className="mx-auto max-w-md">
        {/* Duas imagens com velocidades de parallax diferentes (4 e 5.5) */}
        <div className="relative mx-auto mb-12 h-[380px]">
          {/* imagem principal — mural real, parallax mais lento */}
          <div className="absolute left-0 top-0 z-10">
            <MotionFx speedY={4}>
              <Foto className="h-80 w-56 rounded-sm shadow-lg" src="/mural.jpg" position="center" />
            </MotionFx>
          </div>
          {/* imagem secundária — placeholder, parallax mais rápido, sobreposta */}
          <div className="absolute right-0 bottom-0 z-20">
            <MotionFx speedY={5.5}>
              <Foto className="h-48 w-40 rounded-sm border-4 border-peach shadow-xl" src="/arara.png" position="center" />
            </MotionFx>
          </div>
        </div>

        <Reveal dir="right">
          <div className="flex items-end justify-between">
            <h2 className="font-grandenhas text-6xl text-siena">Quem Sou</h2>
            <img src="/logo-iara.png" alt="Iara Vida" className="h-20 w-auto" />
          </div>
        </Reveal>

        <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-terra/75">
          <Reveal dir="up" delay={100}>
            <p>
              Sou Iara Vida — artista visual. Pinto com aquarelas, telas e
              geotintas, pigmentos que nascem da própria terra. Minha arte é um
              gesto de escuta: do corpo, da natureza e do que pede para vir ao
              mundo.
            </p>
          </Reveal>
          <Reveal dir="up" delay={180}>
            <p>
              Acredito que criar é um caminho de cura. Cada obra carrega uma
              intenção — abrir espaço para o sentir, honrar a história de quem
              vê e de quem faz.
            </p>
          </Reveal>
          <Reveal dir="up" delay={260}>
            <p>
              Entre telas, viagens e imersões, sigo aprendendo que a artista que
              habita em mim só existe plenamente quando honra a artista que
              habita em você.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PORTFÓLIO (moodboard) ------------------ */
const fotos = [
  "/portfolio/IMG_0762.jpg",
  "/portfolio/IMG_1727.JPG",
  "/portfolio/IMG_4895.jpg",
  "/portfolio/aba86080-9f89-11f0-92fe-51c137129a48.jpg",
  "/portfolio/IMG_9200.jpg",
  "/portfolio/IMG_0766.jpg",
  "/portfolio/IMG_8811.jpg",
  "/portfolio/IMG_0207.jpg",
  "/portfolio/IMG_1337.jpg",
  "/portfolio/IMG_8650.jpg",
  "/portfolio/IMG_5021.jpg",
  "/portfolio/IMG_8934.jpg",
  "/portfolio/IMG_4869.jpg",
  "/portfolio/IMG_6924.jpg",
  "/portfolio/IMG_5017.jpg",
  "/portfolio/IMG_8773.jpg",
  "/portfolio/IMG_8718.jpg",
  "/portfolio/IMG_0509.PNG",
  "/portfolio/IMG_5023.jpg",
  "/portfolio/IMG_0796.PNG",
  "/portfolio/IMG_1349.jpg",
  "/portfolio/IMG_2841.jpg",
  "/portfolio/IMG_8786.jpg",
  "/portfolio/IMG_8790.jpg",
  "/portfolio/IMG_8940.jpg",
  "/portfolio/IMG_8939.jpg",
  "/portfolio/IMG_1557.jpg",
  "/portfolio/IMG_2748.jpg",
  "/portfolio/IMG_2752.jpg",
  "/portfolio/IMG_5010.jpg",
];

function Portfolio() {
  return (
    <section id="portfolio" className="px-0 py-0">
      <div
        className="grid gap-0"
        style={{ gridTemplateColumns: "1fr 1fr 1fr", gridAutoRows: "280px" }}
      >
        {fotos.map((src, i) => (
          <div key={i} className="overflow-hidden">
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
  );
}

/* --------------------------- GALERIA (faixa parallax) ------------- */
function Galeria() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagem completa, sem corte */}
      <img src="/img3326.jpg" alt="" className="block w-full" />
      <div aria-hidden className="absolute inset-0 z-10 bg-terra/55" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center">
        <Reveal dir="fade">
          <p className="font-grandenhas text-6xl text-white drop-shadow-md sm:text-7xl">
            cada parede, uma história
          </p>
        </Reveal>
        <Reveal dir="up" delay={150}>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">
            Murais que transformam ambientes em espaços vivos — onde a arte
            respira junto com quem habita o lugar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- IMERSÕES / ORÁCULO (destaque) -------- */
const mundos = [
  { href: "/curso",               label: "Curso Online",          foto: "/curso/img9401.jpg" },
  { href: "/oraculo",             label: "Oráculo",               foto: "/oraculo/produto.avif" },
  { href: "/artes-personalizadas",label: "Artes Personalizadas",  foto: "/portfolio/img9420.png" },
  { href: "/vivencias",           label: "Vivências",             foto: "/vivencias/img8386.jpg" },
  { href: "/prints",              label: "Prints",                foto: "/portfolio/IMG_8940.jpg" },
  { href: "/portfolio",           label: "Portfólio",             foto: "/portfolio/IMG_0762.jpg" },
];

function Imersoes() {
  return (
    <section id="imersoes" className="bg-peach px-6 py-16">
      <div className="mx-auto max-w-md">
        <Reveal dir="up">
          <h2 className={`${cinzel.className} text-sm uppercase tracking-[0.35em] text-terra/70 mb-8 text-center`}>Conheça mais</h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3">
          {mundos.map((m, i) => (
            <Reveal key={m.href} dir="up" delay={i * 60}>
              <a href={m.href} className="group block overflow-hidden rounded-2xl relative h-44 shadow-sm">
                <img
                  src={m.foto}
                  alt={m.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terra/75 via-terra/10 to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-3 font-grandenhas text-3xl leading-tight text-white">
                  {m.label}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer id="contato" className="px-6 py-16 text-creme" style={{ backgroundColor: "#C0806E" }}>
      <Reveal dir="up">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-medium leading-snug">
            Ficou com alguma dúvida?
            <br />
            Vamos conversar.
          </h2>

          <div className="mt-8 space-y-2 text-lg">
            <a href="mailto:contato@iaravida.com" className="block transition-colors hover:text-areia">contato@iaravida.com</a>
            <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-areia">@iaravidart</a>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-creme/60">
            <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-creme">Instagram</a>
            <a href="https://www.iaravida.com/oraculo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-creme">Oráculo</a>
          </div>

          <img src="/logo-iara.png" alt="Iara Vida" className="mx-auto mt-10 h-24 w-auto" style={{ filter: "brightness(10) sepia(1) saturate(0)" }} />
          <p className="mt-2 text-xs text-creme/50">© {new Date().getFullYear()} Iara Vida. Todos os direitos reservados.</p>
        </div>
      </Reveal>
    </footer>
  );
}
