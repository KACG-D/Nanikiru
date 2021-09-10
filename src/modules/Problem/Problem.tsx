import { Text } from "../Text";
import { HaiList } from "../HaiList";
import { Button } from "../Button";
import { Image } from "../Image";
import { ComponentProps } from "react";
import { useSelector } from "react-redux";
import { useWindowDimensions } from "../../utils/useWindowDimensions";
import "./Problem.scss";
import { Link } from "react-router-dom";
import { Heading } from "../Heading";

type Props = {
  poster: string;
  haiList: ComponentProps<typeof HaiList>;
  id: number;
  discription?: string;
  imageUrl?: string;
};

export const Problem: React.FC<Props> = ({
  poster,
  haiList,
  id,
  imageUrl,
  discription
}) => {
  const select = useSelector((state) => state.haiList["_" + id]);
  const { width } = useWindowDimensions();
  const haiListProps = {
    ...haiList,
    id,
    size: (width < 700 && "normal") || "large"
  };
  return (
    <section className="Problem">
      <Heading type="h2">{poster}さんからの出題</Heading>
      <form>
        <div className="Problem__container">
          {imageUrl && (
            <div className="Problem__image">
              <Image
                {...{
                  imageUrl: imageUrl,
                  width: "100%"
                }}
              />
            </div>
          )}
          <div>
            {discription && (
              <div className="Problem__discription">
                <Text>{discription}</Text>
              </div>
            )}
            <HaiList {...{ ...haiListProps }} />
            <div className="Problem__submit">
              <div className="Problem__button">
                <Link to="/problem">
                  <Button>回答を見る(10)</Button>
                </Link>
              </div>
              <div className="Problem__button">
                <Button isdisabled={select == undefined}>これきる</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
