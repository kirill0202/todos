import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const initStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof initStore.dispatch;
export const useAppDispatch = (): ReturnType<typeof useDispatch> =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
