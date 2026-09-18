export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center px-4 py-8">
      <div className="self-start rounded-lg border border-[#6366F1] bg-[#6365f11a] px-2 py-1 text-xs text-[#6366F1] sm:self-center sm:text-sm">
        <code>const learning = 'roadmap_unlimited';</code>
      </div>

      <div className="space-y-4 py-8 font-sans sm:w-2xl">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold sm:text-center sm:text-5xl">
            Domine tecnologia com direção
          </h2>
          <p className="text-sm text-[#9CA3AF] sm:text-center">
            Trilhas de aprendizado estruturadas para você evoluir no seu ritmo,
            sem se perder no caminho do aprendizado autodidata.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 py-4 text-sm font-bold sm:flex-row">
          <button className="cursor-pointer rounded-lg bg-[#6366F1] px-6 py-3">
            <a>Começar agora</a>
          </button>

          <button className="cursor-pointer rounded-lg border border-[#1E293B] px-6 py-3">
            <a>Explorar trilhas</a>
          </button>
        </div>
      </div>
    </header>
  );
};
