import { toast } from "react-hot-toast";
import { create } from "zustand";

interface CurrentOrderProps {
  total: number;
  items: ItemProduct[];
  name: string;
  phone: string;
  address: {
    street: string;
    number: string;
    isEditAddress: boolean;
    complement: string;
    neighborhood: string;
    zipCode: string;
  };
  methodPayment: string;
}

export interface ItemProduct {
  id: string;
  description: string;
  isActive: boolean;
  price: number;
  title: string;
  quantity: number;
  category: {
    id: string;
    label: string;
  };
  image: {
    id: string;
    url: string;
  };
}

interface CartProps {
  currentOrder: CurrentOrderProps | null;
  setCurrentOrder: (newState: CurrentOrderProps | null) => void;

  cart: ItemProduct[];
  isCartVisible: boolean;
  setIsCartVisible: (newState: boolean) => void;
  setCart(cart: ItemProduct[]): void;
  handleAddItemToCart(product: ItemProduct): void;
  handleRemoveItemToCart(idProduct: string): void;
  handleIncrementQuantity(idProduct: string): void;
  handleDecrementQuantity(idProduct: string, currentQuantity: number): void;
}

export const useCart = create<CartProps>((set) => ({
  currentOrder: null,
  setCurrentOrder: (newState: CurrentOrderProps | null) =>
    set({ currentOrder: newState }),
  isCartVisible: false,
  setIsCartVisible: (newState: boolean) => set({ isCartVisible: newState }),
  cart: [],
  setCart: (value: ItemProduct[]) => set({ cart: value }),

  handleAddItemToCart: (product: ItemProduct) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
        return { cart: updatedCart };
      } else {
        toast.success("Produto adicionado ao carrinho");

        return { cart: [...state.cart, { ...product }] };
      }
    });
  },

  handleRemoveItemToCart: (idProduct: string | number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== idProduct),
    }));
  },

  handleIncrementQuantity: (idProduct: string) => {
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === idProduct) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    }));
  },

  handleDecrementQuantity: (idProduct: string, currentQuantity: number) => {
    if (currentQuantity === 1) {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== idProduct),
      }));
      return;
    }

    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === idProduct) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));
