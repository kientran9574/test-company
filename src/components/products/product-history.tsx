"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useProductHistoryStore from "@/stores/product-history-store";

const ProductHistory = () => {
  const viewedProducts = useProductHistoryStore(
    (state) => state.viewedProducts
  );
  console.log("🚀 ~ ProductHistory ~ viewedProducts:", viewedProducts);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Lịch sử xem sản phẩm
      </h2>
      {viewedProducts.length === 0 ? (
        <div className="text-gray-400 text-center py-12">
          Bạn chưa xem sản phẩm nào.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {viewedProducts.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Card className="rounded-xl border bg-background shadow-md flex flex-col items-center p-4 h-full">
                  <CardContent className="flex flex-col items-center p-0 w-full">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      width={300}
                      height={300}
                      className="object-cover  rounded mb-3 shadow flex-shrink-0 relative -top-4"
                    />
                    <div className="font-semibold text-base mb-1 text-center line-clamp-2 min-h-[40px]">
                      {prod.name}
                    </div>
                    <div className="text-sm text-gray-500 mb-2 text-center line-clamp-2 min-h-[32px]">
                      {prod.shortDescription}
                    </div>
                    <div className="font-bold text-primary text-base mb-1">
                      {prod.price.toLocaleString()} VND
                    </div>
                    <div className="flex gap-1 mt-1 text-yellow-400">
                      {Array.from({ length: prod.star }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ProductHistory;
