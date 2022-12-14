import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataModel } from "../../models/redux-models";

let initialState: DataModel = {
  data: [],
  filters: {
    category: "trending",
    offset: 0,
    rating: "",
    q: "",
  },
};
const DataSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadData(state, action: PayloadAction<DataModel>) {
      state.data = action.payload.data;
      state.filters = action.payload.filters;
    },
  },
});

export default DataSlice;
