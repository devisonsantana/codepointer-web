export const HomePage = () => {
  return (
    <div>
      <nav className="mb-4 flex items-center justify-between border-b border-b-[#1E293B] px-2 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2">
          <div className="rounded-lg bg-[#6366F1] p-2">
            <span className="font-mono font-extrabold">&gt;_</span>
          </div>
          <div className="font-sans text-xl font-bold">
            <h1>CodePointer</h1>
          </div>
        </div>
        {/* Links */}
        <div className="block sm:hidden">
          <button>[#]</button>
        </div>
        <div className="hidden space-x-4 sm:block">
          <button className="cursor-pointer rounded-lg border border-[#1E293B] px-4 py-2">
            <a className="text-sm font-semibold">Entrar</a>
          </button>
          <button className="cursor-pointer rounded-lg bg-[#6366F1] px-4 py-2">
            <a className="text-sm font-semibold">Criar conta</a>
          </button>
        </div>
      </nav>

      <header className="flex flex-col items-center justify-center px-4 py-8">
        <div className="self-start rounded-lg border border-[#6366F1] bg-[#6365f11a] px-2 py-1 text-xs text-[#6366F1] sm:self-center sm:text-sm">
          <code>const learning = 'roadmap_unlimited';</code>
        </div>

        <div className="space-y-4 py-8 font-sans sm:w-2xl">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold sm:text-center sm:text-5xl">
              Domine tecnologia com direção
            </h2>
            <p className="text-sm text-[#9CA3AF] sm:text-center">
              Trilhas de aprendizado estruturadas para você evoluir no seu
              ritmo, sem se perder no caminho do aprendizado autodidata.
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

      <section className="px-4 sm:px-8 md:px-14 lg:px-20">
        <div className="flex items-center justify-between gap-4">
          <div className="w-40 sm:w-auto">
            <h2 className="text-3xl font-bold">Trilhas em Destaque</h2>
          </div>
          <div className="rounded-lg border border-[#1E293B] p-2">
            <a className="text-sm font-semibold text-[#6366F1]">
              Ver todas as trilhas -&gt;
            </a>
          </div>
        </div>
        {/* Cards das Trilhas */}
        <div className="flex flex-col gap-4 py-10 sm:flex-row">
          <div className="space-y-4 rounded-2xl border border-[#6366F1] bg-[#0F1524] p-4 shadow-lg">
            <div className="space-y-2 py-4">
              <h3 className="text-xl font-bold">Trilha React</h3>
              <p className="text-sm text-[#9CA3AF]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                excepturi.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <p>12 módulos</p>
              <span>-</span>
              <p>9 projetos</p>
            </div>
            <div>
              <button className="cursor-pointer rounded-lg border border-[#1E293B] px-4 py-2">
                <a className="text-sm font-semibold">Ver trilha -&gt;</a>
              </button>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-[#6366F1] bg-[#0F1524] p-4 shadow-lg">
            <div className="space-y-2 py-4">
              <h3 className="text-xl font-bold">Trilha C#</h3>
              <p className="text-sm text-[#9CA3AF]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                excepturi.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <p>12 módulos</p>
              <span>-</span>
              <p>9 projetos</p>
            </div>
            <div>
              <button className="cursor-pointer rounded-lg border border-[#1E293B] px-4 py-2">
                <a className="text-sm font-semibold">Ver trilha -&gt;</a>
              </button>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-[#6366F1] bg-[#0F1524] p-4 shadow-lg">
            <div className="space-y-2 py-4">
              <h3 className="text-xl font-bold">Trilha Go</h3>
              <p className="text-sm text-[#9CA3AF]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                excepturi.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <p>12 módulos</p>
              <span>-</span>
              <p>9 projetos</p>
            </div>
            <div>
              <button className="cursor-pointer rounded-lg border border-[#1E293B] px-4 py-2">
                <a className="text-sm font-semibold">Ver trilha -&gt;</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="border-t border-t-[#1E293B] px-4 py-6 text-center text-xs text-[#9CA3AF]">
          <p>&copy; 2026 CodePointer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
