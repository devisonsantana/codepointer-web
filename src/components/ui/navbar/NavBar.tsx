export const NavBar = () => {
  return (
    <nav className="mb-4 flex items-center justify-between border-b border-b-[#1E293B] px-2 py-4">
      <div className="flex items-center gap-2 px-2">
        <div className="rounded-lg bg-[#6366F1] px-2 py-1">
          <span className="font-mono text-lg font-extrabold">&gt;_</span>
        </div>

        <div className="font-sans text-2xl font-bold">
          <h1>CodePointer</h1>
        </div>
      </div>

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
  );
};
