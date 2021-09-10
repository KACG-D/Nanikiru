import "./Button.scss";

type Props = {
  text?: string;
  isdisabled?: boolean;
};
export const Button: React.FC<Props> = ({
  children,
  text = "",
  isdisabled = false
}) => {
  return (
    <button className="Button" disabled={isdisabled}>
      {" "}
      {children || text}{" "}
    </button>
  );
};
