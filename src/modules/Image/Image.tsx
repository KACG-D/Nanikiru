import "./Image.scss";

type Props = {
  imageUrl: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  transform?: string;
  margin?: string;
  bottom?: string;
  top?: string;
  position?: string;
};
export const Image: React.FC<Props> = ({
  imageUrl,
  alt,
  width,
  height,
  transform,
  margin,
  bottom,
  top,
  position
}) => {
  const style = {
    width,
    height,
    position,
    transform,
    margin,
    bottom,
    top
  };
  return <img src={imageUrl} alt={alt} style={style} />;
};
