/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/types/products";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import useProductsFavoriteStore from "@/stores/product-favorite-store";
const ProductCard = ({
  product,
  onUpdateProduct,
}: {
  product: Product;
  onUpdateProduct?: (updatedProduct: Product) => void;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewed, setViewed] = useState(product.isViewed);
  const favoriteProducts = useProductsFavoriteStore(
    (state: any) => state.favoriteProducts
  );
  const addFavorite = useProductsFavoriteStore(
    (state: any) => state.addFavorite
  );
  const removeFavorite = useProductsFavoriteStore(
    (state: any) => state.removeFavorite
  );
  const isFavorite = favoriteProducts.some(
    (favoriteProduct: Product) => favoriteProduct.id === product.id
  );

  const handleViewDetail = () => {
    const updateProduct = { ...product, isViewed: !viewed };
    if (onUpdateProduct) {
      onUpdateProduct(updateProduct);
    }
    setViewed(true);
    setSelectedProduct(product); // Lưu sản phẩm đã chọn
  };

  const handleFavorite = () => {
    const updateProduct = { ...product, isFavorite: !isFavorite };
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
    if (onUpdateProduct) {
      onUpdateProduct(updateProduct);
    }
  };
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring" }}
      className="cursor-pointer h-full flex flex-col"
    >
      <Card className="w-full h-full flex flex-col justify-between rounded-2xl shadow-md">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl -mt-7">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={240}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <CardContent className="flex flex-col flex-1 gap-2 p-4">
          <CardTitle className="text-lg font-semibold min-h-[48px] line-clamp-2">
            {product.name}
          </CardTitle>
          <p className="text-muted-foreground text-sm min-h-[36px] line-clamp-2">
            {product.shortDescription}
          </p>
          <p className="font-semibold text-primary">
            {product.price.toLocaleString()} VND
          </p>
          <div className="flex items-center justify-between mt-auto pt-2">
            <Button onClick={handleViewDetail} className="cursor-pointer">
              Xem chi tiết
            </Button>
            <motion.button
              onClick={handleFavorite}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                isFavorite ? "bg-pink-500 text-white" : "bg-gray-200"
              }`}
            >
              <span className="text-lg">❤️</span>
            </motion.button>
          </div>
        </CardContent>
      </Card>
      {/* Dialog - Modal chi tiết sản phẩm */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogTrigger asChild>
          {/* Modal Trigger - Được liên kết với nút "Xem chi tiết" */}
        </DialogTrigger>
        {selectedProduct && (
          <DialogContent className="w-full max-w-lg">
            <DialogTitle>Chi tiết sản phẩm</DialogTitle>
            <DialogHeader>
              <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
            </DialogHeader>
            <div>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={320}
                height={200}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div>{selectedProduct.shortDescription}</div>
              <div className="mt-2">
                <strong>Giá: </strong>
                {selectedProduct.price.toLocaleString()} VND
              </div>
              <div className="mt-2">
                <strong>Đánh giá: </strong>
                <strong className="text-yellow-300">
                  {"★".repeat(selectedProduct.star)}
                </strong>
              </div>
              <div className="mt-4">
                <div>
                  <strong>Trạng thái:</strong>
                </div>
                <div>{selectedProduct.isViewed ? "Đã xem" : "Chưa xem"}</div>
                <div>
                  {selectedProduct.isFavorite
                    ? "Đã yêu thích"
                    : "Chưa yêu thích"}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Đóng
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </motion.div>
  );
};

export default ProductCard;
