import { create } from "zustand";

type CartContextProps = {
  isCartVisible: boolean;
  setIsCartVisible: (newState: boolean) => void;
};

export const useCart = create<CartContextProps>()((set) => ({
    
    isCartVisible: false,
    setIsCartVisible: (newState: boolean) =>
    set(() => ({ isCartVisible: newState })),
}));
