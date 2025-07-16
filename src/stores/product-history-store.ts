import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/products";

interface ProductHistoryState {
  viewedProducts: Product[];
  addViewedProduct: (product: Product) => void;
  clearHistory: () => void;
}

const useProductHistoryStore = create<ProductHistoryState>()(
  persist(
    (set) => ({
      viewedProducts: [],
      addViewedProduct: (product) => {
        set((state) => {
          if (state.viewedProducts.some((p) => p.id === product.id))
            return state;
          return {
            viewedProducts: [
              ...state.viewedProducts,
              { ...product, isViewed: true },
            ],
          };
        });
      },
      clearHistory: () => set({ viewedProducts: [] }),
    }),
    {
      name: "product-history-store",
      partialize: (state) => ({ viewedProducts: state.viewedProducts }),
    }
  )
);

export default useProductHistoryStore;
