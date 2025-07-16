import Link from "next/link";
import { Button } from "../ui/button";

import React, { useState } from "react";

export function AppHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-primary text-white py-4 px-4 md:px-8 flex items-center justify-between shadow-md sticky top-0 z-30">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight hover:opacity-90 transition"
      >
        MyShop
      </Link>
      {/* Nav desktop */}
      <nav className="hidden md:flex gap-2">
        <Button asChild variant="secondary" className="font-medium">
          <Link href="/products">Sản phẩm</Link>
        </Button>
        <Button asChild variant="secondary" className="font-medium">
          <Link href="/product-favorite">Yêu thích</Link>
        </Button>
        <Button asChild variant="secondary" className="font-medium">
          <Link href="/product-history">Lịch sử xem</Link>
        </Button>
      </nav>
      {/* Nav mobile: hamburger */}
      <div className="md:hidden flex items-center">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setOpen(true)}
          aria-label="Mở menu"
          className="cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex">
          <nav className="w-64 bg-primary text-white h-full shadow-lg p-6 flex flex-col gap-4 animate-slideInLeft">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Đóng menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </Button>
            </div>
            <Button
              asChild
              variant="secondary"
              className="font-medium"
              onClick={() => setOpen(false)}
            >
              <Link href="/products">Sản phẩm</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="font-medium"
              onClick={() => setOpen(false)}
            >
              <Link href="/product-favorite">Yêu thích</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="font-medium"
              onClick={() => setOpen(false)}
            >
              <Link href="/product-history">Lịch sử xem</Link>
            </Button>
          </nav>
          {/* Click outside để đóng */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </header>
  );
}
