import { FaRegMap } from "react-icons/fa";
import { PiPath } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BadgeIcon } from "../badge/BadgeIcon";

export const featureHighlights = [
  {
    title: "Direção clara",
    description: "Saiba por onde começar.",
    icon: (
      <BadgeIcon style={{ color: "#6365f1", background: "#6365f11a" }}>
        <FaRegMap />
      </BadgeIcon>
    ),
  },
  {
    title: "Aprendizado flexível",
    description: "Adapte a trilha ao seu objetivo.",
    icon: (
      <BadgeIcon style={{ color: "#63f195", background: "#63f1951a" }}>
        <PiPath />
      </BadgeIcon>
    ),
  },
  {
    title: "Progresso visível",
    description: "Veja sua evolução acontecer.",
    icon: (
      <BadgeIcon style={{ color: "#ff9b8c", background: "#ff9b8c1a" }}>
        <LuChartNoAxesCombined />
      </BadgeIcon>
    ),
  },
];
