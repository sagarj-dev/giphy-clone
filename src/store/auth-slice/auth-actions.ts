import AuthSlice from "./auth-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

import AuthService from "../../services/auth-services";

export const AuthActions = AuthSlice.actions;

export const login = (
  username: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const res = await AuthService.login(username);
    dispatch(AuthActions.login({ username, api_key: res }));
  };
};

export const logout = (
  username: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const res = await AuthService.logout();
    dispatch(AuthActions.login({ username: "", api_key: res }));
  };
};
