import { LuCheck } from "react-icons/lu";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { ProgressCardItem } from "../progress-card-item/ProgressCardItem";
import { FaRegCircle } from "react-icons/fa";
import { VscPlay } from "react-icons/vsc";

export const ProgressCard = () => {
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
            <ProgressCardItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const cardItems = [
  {
    icon: <LuCheck size={22} color="#000000" />,
    title: "Variáveis e tipos",
    status: "Concluído",
    color: "#56e2bd",
    bgColor: "#1db58f12",
    bgIcon: "#1db58f",
    borderColor: "#1db58f",
  },
  {
    icon: <VscPlay size={22} color="#ffffff" />,
    title: "Funções e tipos",
    status: "Em andamento",
    color: "#4e8cff",
    bgColor: "#4e8cff12",
    bgIcon: "#4e8cff",
    borderColor: "#4e8cff",
  },
  {
    icon: <FaRegCircle size={22} color="#9CA3AF" />,
    title: "Manipulação do DOM",
    status: "Próximo",
    color: "#9CA3AF",
    bgColor: "#26345112",
    bgIcon: "#263451",
    borderColor: "#263451",
  },
];
