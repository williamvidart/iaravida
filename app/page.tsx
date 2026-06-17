export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
          Em breve
        </span>

        <h1 className="text-balance text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
          iaravida
        </h1>

        <p className="max-w-md text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Um novo projeto está sendo preparado com cuidado. Volte em breve para
          conhecer.
        </p>

        <a
          href="mailto:contato@iaravida.com"
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Entrar em contato
        </a>
      </div>
    </main>
  );
}
