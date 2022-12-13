import SettingSlice from "./setting-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

import AuthService from "../../services/auth-services";

export const SettingActions = SettingSlice.actions;

export const toggleDrawer = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    dispatch(SettingActions.toggleDrawer());
  };
};
