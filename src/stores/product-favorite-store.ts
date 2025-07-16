/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "@/types/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Cấu hình Zustand Persist
const useProductsFavoriteStore = create(
  persist(
    (set) => ({
      favoriteProducts: [], // Danh sách sản phẩm yêu thích
      addFavorite: (product: Product) =>
        set((state: any) => ({
          favoriteProducts: [...state.favoriteProducts, product],
        })),
      removeFavorite: (productId: string) =>
        set((state: any) => ({
          favoriteProducts: state.favoriteProducts.filter(
            (product: Product) => product.id !== productId
          ),
        })),
    }),
    {
      name: "favorite-products", // Tên để lưu trữ trong localStorage
    }
  )
);

export default useProductsFavoriteStore;
