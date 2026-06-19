import type { Metadata } from "next";
import MobileNav from "../components/MobileNav";
import Reveal from "../components/Reveal";
import MotionFx from "../components/MotionFx";
import ObraCarousel from "../components/ObraCarousel";

export const metadata: Metadata = {
  title: "Telas e Aquarelas | Iara Vida",
  description:
    "Encomende uma arte personalizada e única — telas e aquarelas feitas com terras coletadas em viagens. Designer de interiores e psicologia das cores por Iara Vida.",
};

// Contato — CTAs (ajuste para o WhatsApp da Iara quando tiver o número)
const CONTATO = "https://www.instagram.com/iaravidart/";

export default function TelasEAquarelas() {
  return (
    // Override --gold só nesta página: rosa terroso no lugar do ocre
    <div
      className="flex flex-1 flex-col bg-white"
      style={
        {
          "--gold": "#c4897a",
          "--gold-dark": "#b07262",
          "--ink": "#8c3010",
          "--ink-soft": "#7a4030",
        } as React.CSSProperties
      }
    >
      <Hero />
      <NaoSaoComuns />
      <TerraFaixa />
      <Credibilidade />
      <VideoMari />
      <Processo />
      <Galeria />
      <Precos />
      <Footer />
    </div>
  );
}

/* ------------------------------- CTA -------------------------------- */
function Cta({
  children,
  variant = "solid",
  href = CONTATO,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  href?: string;
}) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium uppercase tracking-[0.15em] transition-colors";
  const styles = {
    solid: "bg-gold text-white hover:bg-gold-dark",
    outline:
      "border border-ink/25 text-ink hover:border-gold hover:text-gold",
    light:
      "border border-cream/40 text-cream hover:border-gold hover:text-gold",
  }[variant];
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

/* ------------------------------ HERO -------------------------------- */
function Hero() {
  return (
    <section id="topo" className="relative">
      <MobileNav />
      <div className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-dark px-6 text-center">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/telas-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-dark/55"
        />
        <div className="relative">
          <Reveal dir="fade">
            <p className="font-script text-3xl text-gold">arte personalizada</p>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl">
              Telas &amp;
              <br />
              Aquarelas
            </h1>
          </Reveal>
          <Reveal dir="up" delay={220}>
            <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-cream/80">
              Pintadas à mão, personalizadas e únicas. Para habitar a sua casa
              e a sua história.
            </p>
          </Reveal>
          <Reveal dir="up" delay={320}>
            <div className="mt-9">
              <Cta variant="solid">Marque uma chamada</Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- NÃO SÃO COMUNS --------------------------- */
function NaoSaoComuns() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <Reveal dir="up">
          <h2 className="font-script text-4xl text-gold">
            não são pinturas comuns
          </h2>
        </Reveal>
        <Reveal dir="up" delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            São artes feitas com <strong>terras que coletei nas minhas
            viagens</strong>. Uma oportunidade de ter a energia da natureza
            dentro da sua casa.
          </p>
        </Reveal>
        <Reveal dir="up" delay={220}>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            Cada tela e cada aquarela nasce personalizada, pensada para você.
            Nenhuma é igual à outra. Cada uma é única, como a sua história.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- TERRA FAIXA ---------------------------- */
function TerraFaixa() {
  return (
    <section className="relative h-[380px] overflow-hidden">
      <MotionFx speedY={5} className="absolute inset-x-0 -top-20 z-0">
        <div
          className="h-[500px] w-full"
          style={{
            backgroundImage: "url('/terra-camadas.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </MotionFx>
      <div aria-hidden className="absolute inset-0 z-10 bg-dark-deep/50" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-8 text-center">
        <Reveal dir="fade">
          <p className="font-script text-4xl leading-snug text-white drop-shadow-md">
            a terra que habita cada obra
          </p>
        </Reveal>
        <Reveal dir="up" delay={160}>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/90">
            Eu mesma coletei cada pigmento nas minhas viagens. São terras com
            energia única e pura, de solos do Brasil como{" "}
            <span className="font-medium text-white">
              MG, SP, GO, RJ, BA e SC
            </span>
            , e de lugares pelo mundo como{" "}
            <span className="font-medium text-white">
              Inglaterra, Portugal, África, Marrocos e Israel
            </span>
            . Cada cor carrega a alma do lugar onde nasceu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- CREDIBILIDADE -------------------------- */
function Credibilidade() {
  return (
    <section className="bg-dark px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <Reveal dir="fade">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            harmonia &amp; profundidade
          </span>
        </Reveal>
        <Reveal dir="up" delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-cream">
            Como <strong className="text-gold">designer de interiores</strong> e
            especialista em <strong className="text-gold">psicologia das
            cores</strong>, uno harmonia estética à profundidade emocional,
            observando com atenção o propósito que essa arte tem para você.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- VÍDEO MARY ---------------------------- */
function VideoMari() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <Reveal dir="up">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            uma encomenda real
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            A arte que criei para a Mari
          </h2>
        </Reveal>

        <Reveal dir="up" delay={120}>
          <p className="mx-auto mt-5 max-w-xs text-[15px] leading-relaxed text-ink-soft">
            A obra <span className="font-medium text-ink">Renovação</span> foi
            criada para abençoar o lar da Mariana após o luto que ela viveu,
            trazendo a energia linda e eterna dos seus entes queridos através
            da paisagem de Ubatuba — um lugar cheio de memórias e elementos
            que pintei com todo o cuidado.
          </p>
          <p className="mt-4 text-sm font-medium text-gold">
            Assiste o vídeo e entenda mais
          </p>
        </Reveal>

        <Reveal dir="up" delay={220}>
          <div className="mx-auto mt-8 w-full max-w-[300px]">
            <video
              src="/mari-video.mp4"
              poster="/capa-mari.jpg"
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-2xl shadow-lg"
              style={{ aspectRatio: "9/16", objectFit: "cover" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- PROCESSO ----------------------------- */
const etapas = [
  {
    n: "01",
    titulo: "Uma chamada por vídeo",
    texto:
      "Primeiro marcamos uma chamada. Um momento em que me coloco à disposição para ouvir a sua história e entender o propósito da arte.",
  },
  {
    n: "02",
    titulo: "Capturo a sua essência",
    texto:
      "Transformo o que você busca em uma arte única, que conversa e compõe com o seu ambiente.",
  },
  {
    n: "03",
    titulo: "Realizamos juntos",
    texto:
      "Se você se sentir conectad@, me manda uma mensagem e damos vida a esse projeto lindo junt@s.",
  },
];

function Processo() {
  return (
    <section id="processo" className="relative overflow-hidden px-6 pt-10 pb-20">
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/processo-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-10 bg-white/20" />
      <div className="relative z-20 mx-auto max-w-md">
        <Reveal dir="up">
          <h2 className="text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm">
            Como a arte chega
            <br />
            até a sua casa
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {etapas.map((e, i) => (
            <Reveal key={e.n} dir="up" delay={i * 130}>
              <div className="relative rounded-2xl bg-white/95 p-6 shadow-md">
                <span className="font-script text-5xl leading-none text-gold">
                  {e.n}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {e.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {e.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" delay={200}>
          <div className="mt-10 text-center">
            <Cta variant="solid">Encomende sua arte</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- GALERIA ------------------------------ */
const cerradoImages = [
  { src: "/cerrado-1.jpg", alt: "Cerrado Vivo — detalhe 1" },
  { src: "/cerrado-2.jpg", alt: "Cerrado Vivo — detalhe 2" },
  { src: "/cerrado-3.jpg", alt: "Cerrado Vivo — detalhe 3" },
  { src: "/cerrado-4.jpg", alt: "Cerrado Vivo — detalhe 4" },
];

const almaImages = [
  { src: "/alma-1.jpg", alt: "Alma Baiana — detalhe 1" },
  { src: "/alma-2.jpg", alt: "Alma Baiana — detalhe 2" },
  { src: "/alma-3.jpg", alt: "Alma Baiana — detalhe 3" },
  { src: "/alma-4.jpg", alt: "Alma Baiana — detalhe 4" },
  { src: "/alma-5.jpg", alt: "Alma Baiana — detalhe 5" },
];

const inocenciaImages = [
  { src: "/inocencia-1.jpg", alt: "Inocência — detalhe 1" },
  { src: "/inocencia-2.jpg", alt: "Inocência — detalhe 2" },
  { src: "/inocencia-3.jpg", alt: "Inocência — detalhe 3" },
  { src: "/inocencia-4.jpg", alt: "Inocência — detalhe 4" },
  { src: "/inocencia-5.jpg", alt: "Inocência — detalhe 5" },
];

const cristoImages = [
  { src: "/cristo-1.jpg", alt: "Cristo — detalhe 1" },
  { src: "/cristo-2.jpg", alt: "Cristo — detalhe 2" },
  { src: "/cristo-3.jpg", alt: "Cristo — detalhe 3" },
  { src: "/cristo-4.jpg", alt: "Cristo — detalhe 4" },
];

const obras = [
  {
    nome: "Cerrado Vivo",
    desc: "Uma intenção de proteger e cultivar o cerrado através do cuidado com a natureza.",
    images: cerradoImages,
  },
  {
    nome: "Alma Baiana",
    desc: "Aves em voo, cheirinho do mar e a fé que pulsa na Bahia — tudo numa só tela.",
    images: almaImages,
  },
  {
    nome: "Inocência",
    desc: "Uma criança Tupi Guarani indo tomar banho de rio, com o olhar simples e conectado com a natureza.",
    images: inocenciaImages,
  },
  {
    nome: "Cristo",
    desc: "Amor puro e doce que nos inspira através do seu olhar sereno e da energia que transforma.",
    images: cristoImages,
  },
];

function Galeria() {
  return (
    <section id="galeria" className="bg-[#faf7f4] px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal dir="up">
          <h2 className="text-center text-4xl font-bold tracking-tight text-ink">
            Cada arte, uma história
          </h2>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm text-ink-soft">
            Um recorte de obras já criadas. Cada peça carrega um propósito.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {obras.map((o, i) => (
            <Reveal key={o.nome} dir="up" delay={i * 90}>
              <figure>
                {o.images ? (
                  <ObraCarousel images={o.images} />
                ) : (
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm bg-[#c79b58]">
                    <span className="rounded-full border border-white/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/85">
                      foto
                    </span>
                  </div>
                )}
                <figcaption className="mt-2">
                  <span className="block text-sm font-semibold text-ink">
                    {o.nome}
                  </span>
                  <span className="block text-xs text-ink-soft">{o.desc}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" delay={200}>
          <div className="mt-10 text-center">
            <Cta variant="solid">Quero uma arte em casa</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ PREÇOS ------------------------------ */
const aquarelas = {
  tipo: "Aquarelas",
  nota: "Papel de algodão, pigmentos naturais",
  grupos: [
    {
      label: "Sem moldura",
      itens: [
        { tam: "A4", medida: "21 × 29,7 cm", preco: "R$ 1.444" },
        { tam: "A3", medida: "29,7 × 42 cm",  preco: "R$ 1.703" },
        { tam: "A2", medida: "42 × 59,4 cm",  preco: "R$ 2.110" },
      ],
    },
    {
      label: "Com moldura",
      itens: [
        { tam: "A4", medida: "21 × 29,7 cm", preco: "R$ 1.555" },
        { tam: "A3", medida: "29,7 × 42 cm",  preco: "R$ 1.888" },
        { tam: "A2", medida: "42 × 59,4 cm",  preco: "R$ 2.313" },
      ],
    },
  ],
};

const telas = {
  tipo: "Telas",
  nota: "Tela em bastidor, terras e tintas",
  itens: [
    { tam: "Pequena",      medida: "até 75 cm",      preco: "R$ 1.555" },
    { tam: "Média",        medida: "75 – 90 cm",     preco: "R$ 1.933" },
    { tam: "Grande",       medida: "90 – 100 cm",    preco: "R$ 2.677" },
    { tam: "Extra Grande", medida: "100 – 120 cm",   preco: "R$ 3.555" },
  ],
};

function Precos() {
  return (
    <section id="orcamento" className="bg-dark px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal dir="up">
          <h2 className="text-center text-4xl font-bold tracking-tight text-cream">
            Orçamento
          </h2>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm text-cream/70">
            Valores de referência. Cada encomenda é personalizada e o
            valor final é definido na conversa.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">

          {/* Aquarelas — com dois grupos: sem e com moldura */}
          <Reveal dir="up">
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-script text-3xl text-gold">{aquarelas.tipo}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cream/50">
                {aquarelas.nota}
              </p>
              {aquarelas.grupos.map((grupo) => (
                <div key={grupo.label} className="mt-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold/70">
                    {grupo.label}
                  </p>
                  <ul className="mt-2 divide-y divide-cream/10">
                    {grupo.itens.map((it) => (
                      <li key={it.tam + grupo.label} className="flex items-baseline justify-between py-2.5">
                        <span>
                          <span className="text-sm font-medium text-cream">{it.tam}</span>
                          <span className="ml-2 text-xs text-cream/50">{it.medida}</span>
                        </span>
                        <span className="text-sm font-semibold text-gold">{it.preco}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Telas */}
          <Reveal dir="up" delay={130}>
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-script text-3xl text-gold">{telas.tipo}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cream/50">
                {telas.nota}
              </p>
              <ul className="mt-4 divide-y divide-cream/10">
                {telas.itens.map((it) => (
                  <li
                    key={it.tam}
                    className="flex items-baseline justify-between py-3"
                    >
                      <span>
                        <span className="text-sm font-medium text-cream">
                          {it.tam}
                        </span>
                        <span className="ml-2 text-xs text-cream/50">
                          {it.medida}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-gold">
                        {it.preco}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

        </div>

        <Reveal dir="up" delay={200}>
          <div className="mt-10 text-center">
            <p className="font-script text-2xl text-gold">
              vamos criar junt@s?
            </p>
            <div className="mt-5">
              <Cta variant="solid">Me manda uma mensagem</Cta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="bg-dark px-6 pb-12 pt-4 text-center text-cream">
      <div className="mx-auto max-w-md border-t border-cream/10 pt-10">
        <a href="/" className="font-script text-2xl text-gold">
          Iara Vida
        </a>
        <div className="mt-5 flex justify-center gap-6 text-xs uppercase tracking-[0.2em] text-cream/70">
          <a
            href="https://www.instagram.com/iaravidart/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a href="/oraculo" className="transition-colors hover:text-gold">
            Oráculo
          </a>
          <a
            href="mailto:contato@iaravida.com"
            className="transition-colors hover:text-gold"
          >
            Email
          </a>
        </div>
        <p className="mt-8 text-xs text-cream/45">
          © {new Date().getFullYear()} Iara Vida · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
