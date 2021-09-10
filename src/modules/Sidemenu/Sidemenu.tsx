import { MenuItem } from "./MenuItem";
import "./Sidemenu.scss";
import { useSelector, useDispatch } from "react-redux";
import { navSlice } from "../Nav";
import { bindActionCreators } from "redux";
import store from "../../store";
type Props = {};

export const Sidemenu: React.FC<Props> = ({}) => {
  const isopend = useSelector((state) => state.sidemenu);
  const dispatch = useDispatch();
  const actions = bindActionCreators(navSlice.actions, dispatch);
  const clickHandler = (e) => {
    store.dispatch(actions.close({}));
  };
  return (
    <>
      <div className="Sidemenu">
        <div
          className={
            "Sidemenu__menu" + ((!isopend && " Sidemenu__menu--close") || "")
          }
        >
          <ul>
            <MenuItem name="TOP" to="/" />
            <MenuItem name="なにきるとは" to="/about" />
            <MenuItem name="タグ検索" to="category" />
            <MenuItem name="投稿する" to="post" />
            <MenuItem name="応援する" to="post" />
            <MenuItem name="ログイン" type="button" to="login" />
          </ul>
        </div>
      </div>
      <div
        className={"ContentHider" + (isopend && " ContentHider--close") || ""}
        onClick={clickHandler}
      />
    </>
  );
};
