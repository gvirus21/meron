import { create } from "zustand";

export type CursorState =
  | "regular"
  | "sm-hovered"
  | "md-hovered"
  | "lg-hovered";

interface Tyype {
  cursorState: CursorState;
  setCursorState: (val: CursorState) => void;
}

export const useCursorState = create<Tyype>((set) => ({
  cursorState: "regular",
  setCursorState: (val) => set(() => ({ cursorState: val })),
}));

export default useCursorState;
