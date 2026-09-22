import { LearningLevelCard } from "./LearningLevelCard";
import { LuGitBranch, LuLayers, LuSprout } from "react-icons/lu";
import { LearningPathInfo } from "./LearningPathInfo";

export const LearningPath = () => {
  return (
    <section className="space-y-12 px-4 py-8 md:px-12">
      <LearningPathInfo />

      <div className="grid place-content-center gap-6 sm:grid-cols-3">
        {learningLevels.map((learningLevel, idx) => (
          <LearningLevelCard key={idx} {...learningLevel} />
        ))}
      </div>
    </section>
  );
};

const learningLevels = [
  {
    level: "Iniciante",
    color: "#56e2bd",
    bgColor: "#56e2bd1a",
    icon: <LuSprout size={22} />,
    title: "Construa a base",
    description: "Entenda os conceitos que dão segurança para começar.",
    topics: ["Lógica de programação", "HTML e CSS"],
  },
  {
    level: "Intermediário",
    color: "#75a7ff",
    bgColor: "#75a7ff1a",
    icon: <LuGitBranch size={22} />,
    title: "Conecte as peças",
    description: "Transforme fundamentos em aplicações úteis.",
    topics: ["JavaScript moderno", "Consumo de APIs"],
  },
  {
    level: "Avançado",
    color: "#ff9b8c",
    bgColor: "#ff9b8c1a",
    icon: <LuLayers size={22} />,
    title: "Amplie seu repertório",
    description: "Aprofunde decisões técnicas e visão de produto.",
    topics: ["Arquitetura de software", "Deploy e observabilidade"],
  },
];
