import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar cho desktop */}
      <aside className="hidden md:flex w-56 min-h-[400px] bg-background border-r border-border shadow-sm p-6 flex-col gap-4 sticky top-20 rounded-2xl">
        <div className="text-lg font-semibold mb-2">Danh mục</div>
        <Button asChild variant="ghost" className="justify-start w-full mb-1">
          <Link href="/products">Tất cả sản phẩm</Link>
        </Button>
        <Button asChild variant="ghost" className="justify-start w-full">
          <Link href="/product-favorite">Sản phẩm yêu thích</Link>
        </Button>
        <Button asChild variant="ghost" className="justify-start w-full">
          <Link href="/products-history">Lịch sử xem</Link>
        </Button>
      </aside>
      {/* Sidebar cho mobile: sticky bottom, bo góc, shadow, UX đẹp */}
      <div className="sm:hidden md:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-3 pointer-events-none">
        <div className="bg-background border border-border shadow-lg rounded-2xl flex gap-1 px-2 py-2 w-[100vw] max-w-md mx-auto pointer-events-auto min-h-[58px] items-center">
          <Button
            asChild
            variant="ghost"
            className="flex-1 flex flex-col items-center py-1 min-w-0"
            size="icon"
          >
            <Link href="/products">
              <svg
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mx-auto size-7"
              >
                <circle cx="13" cy="13" r="11" />
                <path d="M8 13l2.5 2.5L17 9" />
              </svg>
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="flex-1 flex flex-col items-center py-1 min-w-0"
            size="icon"
          >
            <Link href="/product-favorite ">
              <svg
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className=" size-7 px-auto flex-shrink-0"
              >
                <path d="M19 6.5a5.5 5.5 0 0 0-7.8 0l-1.2 1.2-1.2-1.2a5.5 5.5 0 0 0-7.8 7.8l9 9 9-9a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="flex-1 flex flex-col items-center py-1 min-w-0"
            size="icon"
          >
            <Link href="/products-history">
              <svg
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className=" size-"
              >
                <circle cx="13" cy="13" r="11" />
                <path d="M13 7v6l4 4" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
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
    </>
  );
}
