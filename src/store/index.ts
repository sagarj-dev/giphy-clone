import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice/auth-slice";
import todoSlice from "./todo-slice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    Auth: AuthSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
