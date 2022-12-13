import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authModel } from "../../models/redux-models";

let initialState: authModel = {
  username: "",
  api_key: "",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<authModel>) {
      state.username = action.payload.username;
      state.api_key = action.payload.api_key;
    },
    logout(state) {
      state.username = "";
      state.api_key = "";
    },
  },
});

export default AuthSlice;
