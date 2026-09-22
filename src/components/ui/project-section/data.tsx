import { RiListCheck3 } from "react-icons/ri";
import { LuChartColumn, LuUserRound } from "react-icons/lu";
import {
  AdvancedBadge,
  BegginerBadge,
  IntermediateBadge,
} from "../badge/BadgeLevels";
import { BadgeIcon } from "../badge/BadgeIcon";

export const projectCards = [
  {
    level: <BegginerBadge />,
    title: "API de tarefas",
    description:
      "Crie uma API simples para cadastrar, organizar e concluir tarefas.",
    icon: (
      <BadgeIcon style={{ color: "#56e2bd", background: "#56e2bd1a" }}>
        <RiListCheck3 />
      </BadgeIcon>
    ),
  },
  {
    level: <IntermediateBadge />,
    title: "Dashboard de métricas",
    description:
      "Transforme dados fictícios em gráficos e decisões visuais claras.",
    icon: (
      <BadgeIcon style={{ color: "#75a7ff", background: "#75a7ff1a" }}>
        <LuChartColumn />
      </BadgeIcon>
    ),
  },
  {
    level: <AdvancedBadge />,
    title: "Portfólio pessoal",
    description:
      "Mostre sua trajetória, seus projetos e os problemas que você gosta de resolver.",
    icon: (
      <BadgeIcon style={{ color: "#ff9b8c", background: "#ff9b8c1a" }}>
        <LuUserRound />
      </BadgeIcon>
    ),
  },
];
