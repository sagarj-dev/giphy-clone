import { createSlice } from "@reduxjs/toolkit";
import { settingModel } from "../../models/redux-models";

let initialState: settingModel = {
  drawer: false,
  theme: "light",
};
const SettingSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    toggleTheme(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

export default SettingSlice;
