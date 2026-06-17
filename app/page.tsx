const obras = [
  { id: 1, titulo: "Obra I", ano: "2024" },
  { id: 2, titulo: "Obra II", ano: "2024" },
  { id: 3, titulo: "Obra III", ano: "2023" },
  { id: 4, titulo: "Obra IV", ano: "2023" },
  { id: 5, titulo: "Obra V", ano: "2023" },
  { id: 6, titulo: "Obra VI", ano: "2022" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <Hero />
      <Sobre />
      <Obras />
      <Contato />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-(--color-border-soft) bg-(--color-background)/85 px-5 backdrop-blur-md sm:h-16 sm:px-8">
      <a
        href="#topo"
        className="font-display text-lg tracking-wide text-(--color-foreground) sm:text-xl"
      >
        Iara Vida
      </a>
      <div className="hidden gap-7 text-sm text-(--color-muted) sm:flex">
        <a href="#sobre" className="hover:text-(--color-foreground) transition-colors">Sobre</a>
        <a href="#obras" className="hover:text-(--color-foreground) transition-colors">Obras</a>
        <a href="#contato" className="hover:text-(--color-foreground) transition-colors">Contato</a>
      </div>
      <a
        href="#contato"
        className="rounded-full border border-(--color-border-soft) px-3.5 py-1.5 text-xs text-(--color-foreground) transition-colors hover:border-(--color-accent) hover:text-(--color-accent) sm:hidden"
      >
        Contato
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[92vh] flex-col items-start justify-center overflow-hidden px-5 pt-10 sm:px-12 sm:pt-16"
    >
      <span className="reveal text-xs uppercase tracking-[0.3em] text-(--color-accent)">
        Artista
      </span>
      <h1 className="reveal reveal-delay-1 font-display mt-6 text-[clamp(3.5rem,16vw,9rem)] leading-[0.95] tracking-tight text-(--color-foreground)">
        Iara
        <br />
        <em className="not-italic font-light text-(--color-accent)">Vida</em>
      </h1>
      <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-(--color-muted) sm:text-lg">
        Arte que respira, sente e transforma o espaço onde nasce.
      </p>
      <div className="reveal reveal-delay-3 mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <a
          href="#obras"
          className="inline-flex h-12 items-center justify-center rounded-full bg-(--color-foreground) px-7 text-sm font-medium text-(--color-background) transition-colors hover:bg-(--color-accent)"
        >
          Ver obras
        </a>
        <a
          href="#contato"
          className="inline-flex h-12 items-center justify-center rounded-full border border-(--color-border-soft) px-7 text-sm text-(--color-foreground) transition-colors hover:border-(--color-accent)"
        >
          Entrar em contato
        </a>
      </div>

      <div className="absolute bottom-8 left-5 hidden text-[10px] uppercase tracking-[0.4em] text-(--color-muted) sm:block sm:left-12">
        ↓ Role para descobrir
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section
      id="sobre"
      className="border-t border-(--color-border-soft) px-5 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[1fr_2fr] sm:gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-(--color-accent)">
            01 — Sobre
          </span>
          <h2 className="font-display mt-4 text-4xl leading-tight text-(--color-foreground) sm:text-5xl">
            Quem sou
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-(--color-muted) sm:text-lg">
          <p>
            Sou Iara Vida — artista. Crio através de cores, formas e
            silêncios, buscando a verdade que vive dentro de cada gesto.
          </p>
          <p>
            Acredito que a arte é um caminho de cura — tanto de quem cria
            quanto de quem encontra. Cada obra carrega uma intenção: abrir
            espaço para o sentir.
          </p>
          <p>
            Meu trabalho transita entre o íntimo e o coletivo, entre o que se
            mostra e o que se guarda.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 border-t border-(--color-border-soft) pt-10 sm:grid-cols-3">
            <Stat numero="—" rotulo="Obras criadas" />
            <Stat numero="—" rotulo="Anos de prática" />
            <Stat numero="—" rotulo="Exposições" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ numero, rotulo }: { numero: string; rotulo: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-(--color-foreground) sm:text-5xl">
        {numero}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-(--color-muted)">
        {rotulo}
      </div>
    </div>
  );
}

function Obras() {
  return (
    <section
      id="obras"
      className="border-t border-(--color-border-soft) px-5 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-(--color-accent)">
            02 — Obras
          </span>
          <h2 className="font-display text-4xl leading-tight text-(--color-foreground) sm:text-5xl">
            Trabalhos selecionados
          </h2>
          <p className="mt-2 max-w-xl text-base text-(--color-muted) sm:text-lg">
            Um recorte do que tenho produzido. Cada peça é parte de um
            momento.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {obras.map((o) => (
            <li
              key={o.id}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm bg-(--color-card) p-5 transition-transform hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-(--color-accent)/15 via-transparent to-(--color-foreground)/5"
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(201, 168, 114, 0.12), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="font-display text-2xl text-(--color-foreground)">
                  {o.titulo}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-(--color-muted)">
                  {o.ano}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section
      id="contato"
      className="border-t border-(--color-border-soft) px-5 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-(--color-accent)">
          03 — Contato
        </span>
        <h2 className="font-display mt-6 text-balance text-4xl leading-tight text-(--color-foreground) sm:text-6xl">
          Vamos criar algo juntos?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-(--color-muted) sm:text-lg">
          Para projetos, exposições, encomendas ou apenas para trocar uma
          ideia.
        </p>

        <a
          href="mailto:contato@iaravida.com"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-(--color-foreground) px-9 text-base font-medium text-(--color-background) transition-colors hover:bg-(--color-accent)"
        >
          contato@iaravida.com
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-(--color-muted)">
          <SocialLink href="https://instagram.com/iaravida" rotulo="Instagram" />
          <SocialLink href="https://wa.me/" rotulo="WhatsApp" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, rotulo }: { href: string; rotulo: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-(--color-accent)"
    >
      {rotulo}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-(--color-border-soft) px-5 py-10 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-xs text-(--color-muted) sm:flex-row sm:items-center">
        <span className="font-display text-base text-(--color-foreground)">
          Iara Vida
        </span>
        <span>© {new Date().getFullYear()} Iara Vida. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
