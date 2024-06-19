import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  size: number;
}

interface ServiceCartStore {
    items: CartItem[];
    addToCart: (
      item: { id: number; name: string; size: number },
      quantity: number
    ) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
  }

  export const useServiceStore = create<ServiceCartStore>((set) => ({
    items: [],
  addToCart: (item, quantity = 1) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...item, quantity });
      }

      return { ...state };
    }),
  removeFromCart: (id) =>
    set((state) => {
      state.items = state.items.filter((item) => item.id !== id);

      return { ...state };
    }),
  clearCart: () =>
    set(() => ({
      items: [],
    })),
  incrementQuantity: (id) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        return { ...state };
      }

      return state;
    }),
  decrementQuantity: (id) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        return { ...state };
      }

      return state;
    }),
  }))