import MobileNav from "./components/MobileNav";
import Reveal from "./components/Reveal";
import Parallax from "./components/Parallax";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Hero />
      <Stats />
      <QuemSou />
      <Portfolio />
      <Imersoes />
      <Footer />
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section id="topo" className="relative">
      <MobileNav />

      <div className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden">
        {/* Ken Burns zoom background layer */}
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
        {/* Darkening overlay for text contrast (stays still) */}
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

/* ----------------------------- STATS ----------------------------- */
function Stats() {
  return (
    <section className="bg-dark px-6 py-16 text-cream">
      <div className="mx-auto flex max-w-md flex-col gap-12">
        <Reveal dir="up">
          <Stat
            numero="+43 mil"
            titulo="Pessoas na comunidade"
            sub="Somadas em todas as redes sociais"
          />
        </Reveal>
        <Reveal dir="up" delay={140}>
          <Stat
            numero="+480"
            titulo="Obras compartilhadas"
            sub="Aquarelas, telas e geotintas"
          />
        </Reveal>

        <Reveal dir="fade" delay={240}>
          <div className="flex justify-center gap-8 pt-2 text-xs uppercase tracking-[0.2em] text-cream/80">
            <a
              href="https://instagram.com/iaravidart"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="https://www.iaravida.com/oraculo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Oráculo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  numero,
  titulo,
  sub,
}: {
  numero: string;
  titulo: string;
  sub: string;
}) {
  return (
    <div className="text-center">
      <div className="font-script text-2xl text-gold">+de</div>
      <div className="text-5xl font-semibold leading-none text-cream">
        {numero.replace("+", "")}
      </div>
      <div className="mt-3 text-base font-medium text-cream">{titulo}</div>
      <div className="mt-1 text-sm text-cream/60">{sub}</div>
    </div>
  );
}

/* ----------------------------- QUEM SOU ----------------------------- */
function QuemSou() {
  return (
    <section id="quem-sou" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        {/* Circular portrait with subtle parallax + scale-in */}
        <Reveal dir="scale">
          <Parallax speed={0.08}>
            <div className="mx-auto mb-10 h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <div
                className="h-full w-full"
                style={{
                  backgroundColor: "#c79b58",
                  backgroundImage: "url('/mural.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </Parallax>
        </Reveal>

        <Reveal dir="left">
          <h2 className="text-5xl font-bold tracking-tight text-ink">Quem Sou</h2>
        </Reveal>
        <Reveal dir="left" delay={120}>
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

/* ----------------------------- PORTFÓLIO ----------------------------- */
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
    <section id="portfolio" className="bg-gold px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal dir="up">
          <h2 className="text-center text-5xl font-bold tracking-tight text-white">
            Portfólio
          </h2>
        </Reveal>
        <Reveal dir="up" delay={100}>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm text-white/85">
            Um recorte do que tenho criado. Cada peça é parte de um momento.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {categorias.map((c, i) => (
            <Reveal key={c.nome} dir="up" delay={i * 90}>
              <a
                href="#contato"
                className="group relative flex aspect-square h-full flex-col justify-end overflow-hidden rounded-sm p-4 shadow-md transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundColor: c.tom }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/55"
                />
                <span className="relative text-sm font-semibold uppercase tracking-wide text-white">
                  {c.nome}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- IMERSÕES / ORÁCULO ----------------------------- */
function Imersoes() {
  return (
    <section id="imersoes" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <Reveal dir="up">
          <p className="font-script text-2xl text-gold">um convite</p>
        </Reveal>
        <Reveal dir="up" delay={100}>
          <h2 className="mt-2 text-4xl font-bold leading-tight text-ink">
            Oráculo & Imersões
          </h2>
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
            <a
              href="mailto:contato@iaravida.com"
              className="block transition-colors hover:text-gold"
            >
              contato@iaravida.com
            </a>
            <a
              href="https://instagram.com/iaravidart"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-gold"
            >
              @iaravidart
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-cream/70">
            <a
              href="https://instagram.com/iaravidart"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="https://www.iaravida.com/oraculo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Oráculo
            </a>
          </div>

          <p className="font-script mt-10 text-2xl text-gold">Iara Vida</p>
          <p className="mt-2 text-xs text-cream/50">
            © {new Date().getFullYear()} Iara Vida. Todos os direitos
            reservados.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
