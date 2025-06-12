import { create } from "zustand";
import { persist } from "zustand/middleware";

type MbtiStore = {
  name: string;
  answers: string[];
  current: number;
  setName: (name: string) => void;
  addAnswer: (answer: string) => void;
  setCurrent: (index: number) => void;
  reset: () => void;
};

export const useMbtiStore = create<MbtiStore>()(
  persist(
    (set) => ({
      name: "",
      answers: [],
      current: 0,
      setName: (name) => set({ name }),
      addAnswer: (value) =>
        set((state) => ({
          answers: [...state.answers, value],
          current: state.current + 1,
        })),
      setCurrent: (index) => set({ current: index }),
      reset: () => set({ name: "", answers: [], current: 0 }),
    }),
    {
      name: "mbti-storage",
    }
  )
);
