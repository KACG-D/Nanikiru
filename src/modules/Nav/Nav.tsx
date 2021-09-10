import "./Nav.scss";
import { Text } from "../Text";
import { useDispatch, useSelector } from "react-redux";
import { navSlice } from "./NavSlice";
import { bindActionCreators } from "redux";
import store from "../../store";
import { Heading } from "../Heading";
import { Link } from "react-router-dom";

type Props = {};
export const Nav: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(navSlice.actions, dispatch);
  const isopend = useSelector((state) => state.sidemenu);
  const clickHandler = (e) => {
    if (isopend) store.dispatch(actions.close({}));
    else store.dispatch(actions.open({}));
  };
  return (
    <nav className="Nav">
      <Heading isHidden={true}>ヘッダー</Heading>
      <div className="Nav__button" onClick={clickHandler}>
        {(!isopend && "≡") || "<"}
      </div>
      <div className="Nav__title">
        <Link
          to="/"
          onClick={() => {
            store.dispatch(actions.close({}));
          }}
        >
          <Text isBold={true} size="large">
            なにきる
          </Text>
        </Link>
      </div>
    </nav>
  );
};
