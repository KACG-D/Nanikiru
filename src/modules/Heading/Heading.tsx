import "./Heading.scss";
import { Text } from "../Text";
import * as React from "react";
type Props = {
  isHidden?: boolean;
  type?: string;
};
export const Heading: React.FC<Props> = ({ children, isHidden, type }) => {
  if (type == "h2") {
    return (
      <h1 className={"Heading__h2" + ((isHidden && " Heading--hidden") || "")}>
        <Text {...{ size: "normal", isBold: true }}>{children}</Text>
      </h1>
    );
  }
  return (
    <div className={"Heading__h1" + ((isHidden && " Heading--hidden") || "")}>
      <h1 className="Heading__children">
        <Text {...{ size: "large", isBold: true }}>{children}</Text>
      </h1>
    </div>
  );
};
