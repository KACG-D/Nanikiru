import { Image } from "../Image";
import { imageEnum } from "../../data/ImageEnum";
import { HaiType } from "../../data/HaiType";
import "./Hai.scss";

type Props = {
  hai: HaiType;
  size?: "large" | "small" | "normal";
  isYoko?: boolean;
  isSelected?: boolean;
};

const bottom = {
  normal: "-26px",
  large: "-32px",
  small: "-16px"
};

export const Hai: React.FC<Props> = ({
  hai,
  size = "normal",
  isYoko = false,
  isSelected = false
}) => {
  return (
    <div
      className={
        "Hai__image" +
        ((size === "large" && "--large") ||
          (size === "small" && "--small") ||
          "") +
        ((isYoko && " Hai__image--yoko") || "") +
        ((isSelected && " Hai__image--selected") || "")
      }
    >
      <Image
        {...{
          imageUrl: imageEnum["_" + hai].imageUrl,
          width: "100%",
          height: "100%",
          transform: (isYoko && "rotate(-90deg)") || "",
          alt: imageEnum["_" + hai].name,
          position: "relative",
          bottom: bottom[isYoko && size]
        }}
      />
    </div>
  );
};
