import DataSlice from "./data-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

import DataService from "../../services/data-services";
import { FilterModel } from "../../models/redux-models";

export const DataActions = DataSlice.actions;

export const loadData = (
  filters: FilterModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const res = await DataService.loadData(filters);
    dispatch(DataActions.loadData({ data: res, filters }));
  };
};
export const SearchLoadData = (
  filters: FilterModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const res = await DataService.SearchLoadData(filters);
    dispatch(DataActions.loadData({ data: res, filters }));
  };
};
