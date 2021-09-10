import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Text } from "../Text";
import "./Sidemenu.scss";
type Props = { name: string; type?: "button" | "text"; to: string };

export const MenuItem: React.FC<Props> = ({ name, type = "text", to }) => {
  return (
    <li className="MenuItem">
      {
        //<Link to={to}>
      }
      <Link to={to}>
        {type == "text" && (
          <div className="MenuItem__text">
            <Text size="normal">{name}</Text>
          </div>
        )}
        {type == "button" && (
          <div className="MenuItem__button">
            <Button>{name}</Button>
          </div>
        )}
        {
          //</Link>
        }
      </Link>
    </li>
  );
};
