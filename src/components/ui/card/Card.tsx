export const Card = () => {
  return (
    <div className="space-y-4 rounded-2xl border border-[#6366F1] bg-[#0F1524] p-4">
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
  );
};
