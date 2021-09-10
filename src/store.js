import { createStore, combineReducers } from "redux";
import { haiListSlice } from "./modules/HaiList";
import { navSlice } from "./modules/Nav";

const reducer = combineReducers({
  haiList: haiListSlice.reducer,
  sidemenu: navSlice.reducer
});

const store = createStore(reducer);

export default store;
