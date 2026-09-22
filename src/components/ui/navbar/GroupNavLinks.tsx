import { Link } from "react-router";
import { Button } from "../button/Button";
import { links } from "./data";

export const GroupNavLinks = ({ onClick }: GroupNavLinksType) => {
  return links.map(({ text, style, to }, idx) => (
    <Button style={style} key={idx}>
      <Link to={to} className="text-sm font-semibold" onClick={onClick}>
        {text}
      </Link>
    </Button>
  ));
};

type GroupNavLinksType = {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};
