import { HaiType } from "../../data/HaiType";
import { Hai } from "../Hai";
import "./HaiList.scss";
import store from "../../store";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { haiListSlice } from "./HaiListSlice";
type Item = {
  hai: HaiType;
  isYoko?: boolean;
};

type Props = {
  id: number;
  items: Item[];
  size?: "large" | "small" | "normal";
};

export const HaiList: React.FC<Props> = ({ items, size = "normal", id }) => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(haiListSlice.actions, dispatch);
  const select = useSelector((state) => state.haiList["_" + id]);

  const clickHandler = (index, e) => {
    if (select == index) store.dispatch(actions.deselect({ id }));
    else store.dispatch(actions.select({ id, select: index }));
  };

  return (
    <ul className="HaiList">
      {items.map((props, index) => {
        return (
          <li
            className={
              "HaiList__item" + ((index == 13 && " HaiList__item--tsumo") || "")
            }
            onClick={(e) => clickHandler(index, e)}
            key={index}
          >
            <Hai {...props} size={size} isSelected={index === select} />
          </li>
        );
      })}
    </ul>
  );
};
