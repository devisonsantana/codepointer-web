import { RiListCheck3 } from "react-icons/ri";
import { ProjectSectionCard } from "./ProjectSectionCard";
import { LuChartColumn } from "react-icons/lu";
import { ProjectSectionInfo } from "./ProjectSectionInfo";

export const ProjectSection = () => {
  return (
    <section className="space-y-6 px-4 py-20 md:px-12">
      <ProjectSectionInfo />
      <div className="grid place-content-center gap-8 sm:grid-cols-3">
        {projectCards.map((project, idx) => (
          <ProjectSectionCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

const projectCards = [
  {
    level: "Iniciante",
    title: "API de tarefas",
    description:
      "Crie uma API simples para cadastrar, organizar e concluir tarefas.",
    icon: <RiListCheck3 size={22} />,
    color: "#56e2bd",
    bgColor: "#56e2bd1a",
  },
  {
    level: "Intermediário",
    title: "Dashboard de métricas",
    description:
      "Transforme dados fictícios em gráficos e decisões visuais claras.",
    icon: <LuChartColumn size={22} />,
    color: "#75a7ff",
    bgColor: "#75a7ff1a",
  },
  {
    level: "Avançado",
    title: "Portfólio pessoal",
    description:
      "Mostre sua trajetória, seus projetos e os problemas que você gosta de resolver.",
    icon: <RiListCheck3 size={22} />,
    color: "#ff9b8c",
    bgColor: "#ff9b8c1a",
  },
];
