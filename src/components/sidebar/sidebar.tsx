import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-[400px] bg-background border-r border-border shadow-sm p-6 flex flex-col gap-4 sticky top-20">
      <div className="text-lg font-semibold mb-2">Danh mục</div>
      <Button asChild variant="ghost" className="justify-start w-full mb-1">
        <Link href="/products">Tất cả sản phẩm</Link>
      </Button>
      <Button asChild variant="ghost" className="justify-start w-full">
        <Link href="/product-favorite">Sản phẩm yêu thích</Link>
      </Button>
    </aside>
  );
}
