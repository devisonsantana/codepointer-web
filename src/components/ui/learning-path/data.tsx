import { LuGitBranch, LuLayers, LuSprout } from "react-icons/lu";
import { BadgeIcon } from "../badge/BadgeIcon";
import {
  AdvancedBadge,
  BegginerBadge,
  IntermediateBadge,
} from "../badge/BadgeLevels";

export const learningLevels = [
  {
    level: <BegginerBadge />,
    icon: (
      <BadgeIcon style={{ color: "#56e2bd" }}>
        <LuSprout />
      </BadgeIcon>
    ),
    title: "Construa a base",
    description: "Entenda os conceitos que dão segurança para começar.",
    topics: ["Lógica de programação", "HTML e CSS"],
  },
  {
    level: <IntermediateBadge />,
    icon: (
      <BadgeIcon style={{ color: "#75a7ff" }}>
        <LuGitBranch />
      </BadgeIcon>
    ),
    title: "Conecte as peças",
    description: "Transforme fundamentos em aplicações úteis.",
    topics: ["JavaScript moderno", "Consumo de APIs"],
  },
  {
    level: <AdvancedBadge />,

    icon: (
      <BadgeIcon style={{ color: "#ff9b8c" }}>
        <LuLayers />
      </BadgeIcon>
    ),
    title: "Amplie seu repertório",
    description: "Aprofunde decisões técnicas e visão de produto.",
    topics: ["Arquitetura de software", "Deploy e observabilidade"],
  },
];
