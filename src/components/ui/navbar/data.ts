export const links: LinkType[] = [
  {
    text: "Entrar",
    style: "secondary",
    to: "/login",
  },
  {
    text: "Criar conta",
    style: "primary",
    to: "/register",
  },
];

type LinkType = {
  text: string;
  style: "primary" | "secondary";
  to: string;
};
