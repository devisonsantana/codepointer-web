import { ProgressBar } from "./ProgressBar";
import { CardItem } from "./CardItem";
import { cardItems } from "./data";

export const TrackingPanel = () => {
  return (
    <div className="max-w-xl space-y-4 rounded-2xl border border-[#1E293B] bg-[#0d1220] p-4 shadow-xl">
      <div className="flex flex-row items-center justify-between gap-4 border-b border-b-[#1E293B] pb-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[#9CA3AF]">
            Painel demonstrativo
          </p>
          <p className="text-lg font-bold">Trilha: JavaScript essencial</p>
        </div>
        <div className="rounded-2xl bg-[#56e2bd1a] px-4 py-1">
          <p className="text-xs font-semibold text-[#56e2bd] md:text-sm">
            48% concluído
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <ProgressBar progress={48} />

        <div className="flex flex-col gap-4">
          {cardItems.map((item, idx) => (
            <CardItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
