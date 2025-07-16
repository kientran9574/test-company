import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export function AppHeader() {
  return (
    <header className="w-full bg-primary text-white py-4 px-8 flex items-center justify-between shadow-md sticky top-0 z-30">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight hover:opacity-90 transition"
      >
        MyShop
      </Link>
      <nav className="flex gap-2">
        <Button asChild variant="secondary" className="font-medium">
          <Link href="/products">Sản phẩm</Link>
        </Button>
        <Button asChild variant="secondary" className="font-medium">
          <Link href="/product-favorite">Yêu thích</Link>
        </Button>
      </nav>
    </header>
  );
}
