import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice/auth-slice";
import todoSlice from "./todo-slice";
import SettingSlice from "./setting-slice/setting-slice";
import DataSlice from "./data-slice/data-slice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    Auth: AuthSlice.reducer,
    settings: SettingSlice.reducer,
    data: DataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
