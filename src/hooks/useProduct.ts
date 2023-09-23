import { create } from "zustand";
import { ItemProduct } from "./useCart";

type CheckoutProps = {
  products: ItemProduct[];
  setProducts: (products: ItemProduct[]) => void;
};

export const useProduct = create<CheckoutProps>()((set) => ({
  products: [],
  setProducts: (products: ItemProduct[]) => set({ products }),
}));
