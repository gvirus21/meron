import { create } from "zustand";

export type CursorState =
  | "regular"
  | "sm-hovered"
  | "md-hovered"
  | "lg-hovered"
  | "xl-hovered";

interface CursorStateType {
  cursorState: CursorState;
  setCursorState: (val: CursorState) => void;
}

export const useCursorState = create<CursorStateType>((set) => ({
  cursorState: "regular",
  setCursorState: (val) => set(() => ({ cursorState: val })),
}));

export default useCursorState;
