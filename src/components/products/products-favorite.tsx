/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useProductsFavoriteStore from "@/stores/product-favorite-store";
import React from "react";
import ProductCard from "./products-card";
import { Product } from "@/types/products";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { AppHeader } from "../header/app-header";

const ProductFavorite = () => {
  const favoriteProducts = useProductsFavoriteStore(
    (state: any) => state.favoriteProducts
  );
  return (
    <>
      <AppHeader></AppHeader>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 flex flex-col items-center py-10 px-2">
        <motion.div
          className="w-full max-w-5xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <svg
              width="38"
              height="38"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-pink-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
            <h2 className="text-3xl font-extrabold text-primary text-center tracking-tight">
              Sản phẩm yêu thích của bạn
            </h2>
          </div>
          <p className="text-gray-500 mb-8 text-center max-w-xl">
            Tất cả sản phẩm bạn đã đánh dấu yêu thích sẽ được lưu tại đây. Bạn
            có thể xem lại, quản lý hoặc mua bất cứ lúc nào!
          </p>
        </motion.div>
        <AnimatePresence>
          {favoriteProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {favoriteProducts.map((product: Product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Card className="px-4 rounded-2xl shadow-xl border-2 border-pink-100 bg-white/80 backdrop-blur h-full flex flex-col justify-between hover:shadow-2xl transition max-w-lg mx-auto">
                    <ProductCard product={product} />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <svg
                width="90"
                height="90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-pink-200 mb-4 drop-shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
              <div className="text-xl text-gray-400 mb-2 font-semibold">
                Chưa có sản phẩm yêu thích.
              </div>
              <Button
                asChild
                variant="outline"
                className="text-primary text-base mt-2 border-primary"
              >
                <a href="/products">Khám phá sản phẩm</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProductFavorite;
