import { Link } from "react-router";
import { Button } from "../button/Button";

export const GroupNavLinks = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  return links.map(({ text, style, to }, idx) => (
    <Button style={style} key={idx}>
      <Link to={to} className="text-sm font-semibold" onClick={onClick}>
        {text}
      </Link>
    </Button>
  ));
};

const links: LinkType[] = [
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
