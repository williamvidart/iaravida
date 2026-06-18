import MobileNav from "./components/MobileNav";
import Reveal from "./components/Reveal";
import MotionFx from "./components/MotionFx";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Hero />
      <Stats />
      <QuemSou />
      <Portfolio />
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

      <div className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div
            className="kenburns absolute inset-[-6%]"
            style={{
              backgroundColor: "#b9966a",
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
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

        <p className="reveal reveal-2 font-script relative px-8 text-center text-3xl leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-4xl">
          A artista que habita em mim
          <br />
          honra a artista que habita em você
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
    <section className="overflow-hidden bg-dark px-6 py-20 text-cream">
      <div className="mx-auto max-w-md">
        {/* Colagem de fotos com motion: central escala, laterais deslizam opostas */}
        <div className="relative mx-auto h-[420px]">
          {/* lateral esquerda — desliza para a direita ao rolar */}
          <div className="absolute left-0 top-20 z-10">
            <MotionFx speedX={4}>
              <Foto className="h-44 w-32 rounded-sm" tom="#7a5a32" label="foto" />
            </MotionFx>
          </div>
          {/* lateral direita — desliza para a esquerda ao rolar */}
          <div className="absolute right-0 top-32 z-10">
            <MotionFx speedX={-4}>
              <Foto className="h-44 w-32 rounded-sm" tom="#9c6b3a" label="foto" />
            </MotionFx>
          </div>
          {/* central — escala (out-in) ao passar pelo centro */}
          <div className="absolute inset-x-0 top-2 z-20 flex justify-center">
            <MotionFx scaleAmt={0.18}>
              <Foto className="h-72 w-56 rounded-sm shadow-xl" tom="#c79b58" label="foto principal" />
            </MotionFx>
          </div>
        </div>

        {/* Números — entram pela esquerda e deslizam */}
        <div className="mt-4 flex flex-col gap-10">
          <Reveal dir="left">
            <MotionFx speedX={2}>
              <Stat
                numero="43 mil"
                titulo="Pessoas na comunidade"
                sub="Somadas em todas as redes sociais"
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
            <div className="flex justify-center gap-8 pt-2 text-xs uppercase tracking-[0.2em] text-cream/80">
              <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">Instagram</a>
              <a href="https://www.iaravida.com/oraculo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">Oráculo</a>
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
      <div className="font-script text-2xl text-gold">+de</div>
      <div className="text-5xl font-semibold leading-none text-cream">{numero}</div>
      <div className="mt-3 text-base font-medium text-cream">{titulo}</div>
      <div className="mt-1 text-sm text-cream/60">{sub}</div>
    </div>
  );
}

/* --------------------------- QUEM SOU (parallax em camadas) -------- */
function QuemSou() {
  return (
    <section id="quem-sou" className="overflow-hidden bg-cream px-6 py-20">
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
              <Foto className="h-48 w-40 rounded-sm border-4 border-cream shadow-xl" tom="#b07d3f" label="foto" />
            </MotionFx>
          </div>
        </div>

        <Reveal dir="right">
          <h2 className="text-5xl font-bold tracking-tight text-ink">Quem Sou</h2>
        </Reveal>
        <Reveal dir="right" delay={120}>
          <p className="font-script mt-2 text-2xl text-gold">Iara Vida</p>
        </Reveal>

        <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft">
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

/* --------------------------- PORTFÓLIO (galeria) ------------------ */
const categorias = [
  { nome: "Aquarelas", tom: "#c79b58" },
  { nome: "Telas", tom: "#b07d3f" },
  { nome: "Geotintas", tom: "#9c6b3a" },
  { nome: "Oráculo", tom: "#bf8a4d" },
  { nome: "África & Marrocos", tom: "#a86f35" },
  { nome: "Imersões", tom: "#ca9a5b" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="overflow-hidden bg-gold px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal dir="up">
          <h2 className="text-center text-5xl font-bold tracking-tight text-white">Portfólio</h2>
        </Reveal>
        <Reveal dir="up" delay={100}>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm text-white/85">
            Um recorte do que tenho criado. Cada peça é parte de um momento.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {categorias.map((c, i) => (
            <Reveal key={c.nome} dir="up" delay={i * 90}>
              <MotionFx speedY={i % 2 === 0 ? 1.5 : 2.6}>
                <a
                  href="#contato"
                  className="group relative flex aspect-square h-full flex-col justify-end overflow-hidden rounded-sm p-4 shadow-md transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: c.tom }}
                >
                  <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full border border-white/40 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-white/70">foto</span>
                  </div>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/60" />
                  <span className="relative text-sm font-semibold uppercase tracking-wide text-white">{c.nome}</span>
                </a>
              </MotionFx>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- GALERIA (faixa parallax) ------------- */
function Galeria() {
  return (
    <section className="relative h-[360px] overflow-hidden">
      {/* Fundo com parallax translateY (background_motion_fx) */}
      <MotionFx speedY={4} className="absolute inset-x-0 -top-16 z-0">
        <Foto className="h-[460px] w-full" tom="#8a5a2c" label="foto de fundo" />
      </MotionFx>
      <div aria-hidden className="absolute inset-0 z-10 bg-black/45" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-8 text-center">
        <Reveal dir="fade">
          <p className="font-script text-3xl text-white drop-shadow-md sm:text-4xl">
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
function Imersoes() {
  return (
    <section id="imersoes" className="overflow-hidden bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        {/* Imagem destaque com translateY suave (speed 2) */}
        <Reveal dir="fade">
          <MotionFx speedY={2} className="mb-10">
            <Foto className="h-56 w-full rounded-sm shadow-lg" tom="#bf8a4d" label="foto destaque" />
          </MotionFx>
        </Reveal>

        <div className="text-center">
          <Reveal dir="up">
            <p className="font-script text-2xl text-gold">um convite</p>
          </Reveal>
          <Reveal dir="up" delay={100}>
            <h2 className="mt-2 text-4xl font-bold leading-tight text-ink">Oráculo & Imersões</h2>
          </Reveal>
          <Reveal dir="up" delay={180}>
            <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Encontros e experiências para reconectar com a arte que vive em
              você. Acompanhe os próximos retiros, imersões e o Oráculo.
            </p>
          </Reveal>
          <Reveal dir="up" delay={260}>
            <a
              href="https://www.iaravida.com/oraculo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gold px-9 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold-dark"
            >
              Quero saber mais
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer id="contato" className="bg-dark px-6 py-16 text-cream">
      <Reveal dir="up">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-medium leading-snug">
            Ficou com alguma dúvida?
            <br />
            Vamos conversar.
          </h2>

          <div className="mt-8 space-y-2 text-lg">
            <a href="mailto:contato@iaravida.com" className="block transition-colors hover:text-gold">contato@iaravida.com</a>
            <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-gold">@iaravidart</a>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-cream/70">
            <a href="https://instagram.com/iaravidart" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">Instagram</a>
            <a href="https://www.iaravida.com/oraculo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">Oráculo</a>
          </div>

          <p className="font-script mt-10 text-2xl text-gold">Iara Vida</p>
          <p className="mt-2 text-xs text-cream/50">© {new Date().getFullYear()} Iara Vida. Todos os direitos reservados.</p>
        </div>
      </Reveal>
    </footer>
  );
}
