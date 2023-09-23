import { create } from "zustand";

type CheckoutProps = {
  step: number;
  setStep: (newState: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export const useCheckout = create<CheckoutProps>()((set, get) => ({
  step: 0,
  setStep: (newState: number) => set({ step: newState }),
  onNext: () => set({ step: get().step + 1 }),
  onPrevious: () => set({ step: get().step - 1 }),
}));
