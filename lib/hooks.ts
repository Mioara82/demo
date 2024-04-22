import { useDispatch as _useDispatch, useSelector as _useSelector, useStore as _useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";

export const useDispatch = () => _useDispatch<AppDispatch>();
export const useSelector = <TSelected = unknown>(selector: (state: RootState) => TSelected) => _useSelector<RootState, TSelected>(selector);
export const useStore = () => _useStore<AppStore>();
