import { createSlice } from "@reduxjs/toolkit";

export const haiListSlice = createSlice({
  name: "haiList",
  initialState: {},
  reducers: {
    select: (state, action) => {
      const newState = { ...state };
      newState["_" + action.payload.id] = action.payload.select;
      return newState;
    },
    deselect: (state, action) => {
      const newState = { ...state };
      delete newState["_" + action.payload.id];
      return newState;
    }
  }
});
