import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "sidemenu",
  initialState: false,
  reducers: {
    open: (state, action) => {
      return true;
    },
    close: (state, action) => {
      return false;
    }
  }
});
