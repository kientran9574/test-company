import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/data/product";

export async function GET(req: NextRequest) {
  // Lấy params từ query string
  const { searchParams } = new URL(req.url);
  // Dữ liệu userId là để mô phỏng, chưa cần xác thực
  // Lấy chuỗi id các sản phẩm đã xem/đã thích từ FE gửi lên (nếu có)
  const viewedParam = searchParams.get("viewed");
  const favoriteParam = searchParams.get("favorite");

  // Chuyển string -> array id
  const viewedIds = viewedParam ? viewedParam.split(",") : [];
  const favoriteIds = favoriteParam ? favoriteParam.split(",") : [];

  // Lọc ra các sản phẩm chưa xem và chưa thích (đúng như bạn muốn)
  const suggestions = mockProducts.filter(
    (p) => !viewedIds.includes(p.id) && !favoriteIds.includes(p.id)
  );

  // Nếu hết sản phẩm để gợi ý thì random bất kỳ (cho demo đẹp hơn)
  const result =
    suggestions.length > 0
      ? suggestions.slice(0, 3)
      : mockProducts.sort(() => Math.random() - 0.5).slice(0, 3);

  return NextResponse.json(result);
}
