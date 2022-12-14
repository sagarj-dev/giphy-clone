import SettingSlice from "./setting-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

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
export const toggleTheme = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    dispatch(SettingActions.toggleTheme());
  };
};
