import "./Page.scss";
import { Nav } from "../Nav";
import { Heading } from "../Heading";
import { Sidemenu } from "../Sidemenu";

type Props = {
  pageTitle: string;
};
export const Page: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <div className="Page">
      <Heading isHidden={true}>{pageTitle}</Heading>
      <Sidemenu />
      <Nav />
      <div className="Page__container">{children}</div>
    </div>
  );
};
