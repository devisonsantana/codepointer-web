import { LuCheck } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { VscPlay } from "react-icons/vsc";

export const cardItems = [
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
