"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/products";
import axios from "axios";
import ProductCard from "./products-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { AppHeader } from "../header/app-header";
import Sidebar from "../sidebar/sidebar";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const filteredProductsRef = useRef<Product[]>([]);
  // Product được chọn để hiển thị trong Dialog
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionLoading, setSuggestionLoading] = useState(false); // loading cho suggestedProducts
  const userId = "123";
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        console.log("🚀 ~ fetchProducts ~ res:", res);
        setProducts(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matcherSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      let matcherPrice = true;
      if (priceFilter === "under500K") {
        matcherPrice = Boolean(product.price < 500000);
      } else if (priceFilter === "500Kto1M") {
        matcherPrice = Boolean(
          product.price >= 500000 && product.price <= 1000000
        );
      } else if (priceFilter === "over1M") {
        matcherPrice = Boolean(product.price > 1000000);
      }
      return matcherSearch && matcherPrice;
    });
    filteredProductsRef.current = result;
    return result;
  }, [products, searchTerm, priceFilter]);
  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((prevProduct) =>
      prevProduct.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const handleSuggestionClick = async () => {
    const viewedIds = products.filter((p) => p.isViewed).map((p) => p.id);
    const favoriteIds = products.filter((p) => p.isFavorite).map((p) => p.id);
    setSuggestionLoading(true);
    setShowSuggestions(true);
    try {
      const res = await axios.get(
        `/api/suggestions?userId=${userId}&viewed=${viewedIds.join(
          ","
        )}&favorite=${favoriteIds.join(",")}`
      );
      setTimeout(() => {
        setSuggestedProducts(res.data);
        setSuggestionLoading(false);
      }, 800);
    } catch {
      setTimeout(() => {
        setSuggestedProducts([]);
        setSuggestionLoading(false);
        alert("Lỗi khi lấy gợi ý sản phẩm!");
      }, 800);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <svg
            width="60"
            height="60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-primary animate-spin-slow"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M8 12l2 2 4-4" strokeWidth="2" />
          </svg>
          <p className="text-lg text-primary font-semibold">
            Đang tải sản phẩm...
          </p>
        </motion.div>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen bg-gray-50"
    >
      <AppHeader />
      <div className="flex max-w-7xl mx-auto pt-8 px-4 gap-8">
        <Sidebar />
        <main className="flex-1">
          {/* Tìm kiếm sản phẩm */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="mb-4 flex items-center justify-center gap-2"
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="w-[250px]">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="all">Tất cả giá</option>
                <option value="under500K">Dưới 500K</option>
                <option value="500Kto1M">500K–1 triệu</option>
                <option value="over1M">Trên 1 triệu</option>
              </select>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <Button
              className="mb-4 w-fit"
              onClick={handleSuggestionClick}
              variant="default"
              asChild={false}
            >
              Gợi ý sản phẩm phù hợp
            </Button>
          </motion.div>

          {/* Hiển thị gợi ý */}
          <AnimatePresence mode="wait">
            {showSuggestions && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                key="suggestion-list"
              >
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                  Sản phẩm gợi ý cho bạn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suggestionLoading ? (
                    // Skeleton loading UI
                    Array.from({ length: 3 }).map((_, idx) => (
                      <div key={idx} className="flex flex-col items-center p-6">
                        <div className="w-[120px] h-[80px] rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse mb-3" />
                        <div className="h-6 w-32 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-2" />
                        <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-2" />
                        <div className="h-5 w-20 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-1" />
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-4 h-4 rounded bg-gray-200 dark:bg-gray-800 animate-pulse"
                            />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <AnimatePresence>
                      {suggestedProducts.length === 0 && (
                        <motion.div
                          className="text-gray-400 col-span-full text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          key="no-suggestion"
                        >
                          Không có gợi ý phù hợp.
                        </motion.div>
                      )}
                      {suggestedProducts.map((prod) => (
                        <motion.div
                          key={prod.id}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <Card className="rounded-2xl border border-primary/20 bg-background text-card-foreground shadow-lg flex flex-col items-center p-6 transition hover:scale-105 hover:shadow-2xl hover:border-primary/40 cursor-pointer group">
                            <CardContent className="flex flex-col items-center p-0 w-full">
                              <Image
                                src={prod.image}
                                alt={prod.name}
                                width={120}
                                height={80}
                                className="object-cover rounded-lg mb-3 shadow group-hover:brightness-95"
                              />
                              <div className="font-semibold text-lg mb-1 text-center line-clamp-2 min-h-[48px]">
                                {prod.name}
                              </div>
                              <div className="text-sm text-gray-500 mb-2 text-center line-clamp-2 min-h-[36px]">
                                {prod.shortDescription}
                              </div>
                              <div className="font-bold text-primary text-lg mb-1">
                                {prod.price.toLocaleString()} VND
                              </div>
                              <div className="flex gap-1 mt-1 text-yellow-400">
                                {Array.from({ length: prod.star }).map(
                                  (_, i) => (
                                    <span key={i}>★</span>
                                  )
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>
                <Button
                  className="my-4 block mx-auto bg-black text-white cursor-pointer"
                  onClick={() => setShowSuggestions(false)}
                  variant="default"
                  disabled={suggestionLoading}
                >
                  Đóng gợi ý
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="rounded-2xl border bg-background text-card-foreground shadow flex flex-col items-center p-4"
                >
                  <CardContent className="flex flex-col items-center p-0 w-full">
                    <ProductCard
                      product={product}
                      onUpdateProduct={handleUpdateProduct}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <Dialog
            open={!!selectedProduct}
            onOpenChange={(open) => !open && setSelectedProduct(null)}
          >
            <DialogTrigger asChild>
              {/* Không cần button này nữa vì đã sử dụng Trigger */}
            </DialogTrigger>
            {selectedProduct && (
              <DialogContent className="w-full max-w-lg">
                <DialogHeader>
                  <h2 className="text-xl font-semibold">
                    {selectedProduct.name}
                  </h2>
                </DialogHeader>
                <DialogDescription>
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={320}
                    height={320}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p>{selectedProduct.shortDescription}</p>
                  <p className="mt-2">
                    <strong>Giá: </strong>
                    {selectedProduct.price.toLocaleString()} VND
                  </p>
                  <p className="mt-2">
                    <strong>Đánh giá: </strong>
                    {"★".repeat(selectedProduct.star)}
                  </p>
                  <div className="mt-4">
                    <p>
                      <strong>Trạng thái:</strong>
                    </p>
                    <p>{selectedProduct.isViewed ? "Đã xem" : "Chưa xem"}</p>
                    <p>
                      {selectedProduct.isFavorite
                        ? "Đã yêu thích"
                        : "Chưa yêu thích"}
                    </p>
                  </div>
                </DialogDescription>
                <DialogFooter></DialogFooter>
              </DialogContent>
            )}
          </Dialog>
        </main>
      </div>
    </motion.div>
  );
};

export default ProductsPage;
