import { FeatureHighlight } from "./FeatureHighlight";
import { FaRegMap } from "react-icons/fa";
import { PiPath } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";

export const HighlightSection = () => {
  return (
    <section className="flex flex-col items-start justify-between gap-8 border-y border-y-[#1E293B] bg-[#0F152481] px-4 py-6 sm:flex-row sm:items-center md:px-20">
      {featureHighlights.map((feature, idx) => (
        <FeatureHighlight key={idx} {...feature} />
      ))}
    </section>
  );
};

const featureHighlights = [
  {
    title: "Direção clara",
    description: "Saiba por onde começar.",
    icon: <FaRegMap size={22} />,
    iconColor: "#6365f1",
    bgColor: "#6365f11a",
  },
  {
    title: "Aprendizado flexível",
    description: "Adapte a trilha ao seu objetivo.",
    icon: <PiPath size={22} />,
    iconColor: "#63f195",
    bgColor: "#63f1951a",
  },
  {
    title: "Progresso visível",
    description: "Veja sua evolução acontecer.",
    icon: <LuChartNoAxesCombined size={22} />,
    iconColor: "#ff9b8c",
    bgColor: "#ff9b8c1a",
  },
];
