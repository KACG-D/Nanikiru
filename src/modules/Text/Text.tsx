import "./Text.scss";

type Props = {
  isBold?: boolean;
  size?: "normal" | "large" | "small";
};
export const Text: React.FC<Props> = ({ children, isBold, size }) => {
  return (
    <span
      className={
        "Text__children" +
        ((size === "large" && "--large") ||
          (size === "small" && "--small") ||
          "") +
        ((isBold && " Text__children--bold") || "")
      }
    >
      {children}
    </span>
  );
};
