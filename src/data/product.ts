import { Product } from "@/types/products";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Khoá học React cơ bản",
    price: 499000,
    image: "/images/reactjs.jpg",
    shortDescription:
      "Học cách xây dựng ứng dụng React từ cơ bản đến nâng cao.",
    star: 5,
    isViewed: false, // Trường "Đã xem"
    isFavorite: false, // Trường "Đã yêu thích"
  },
  {
    id: "2",
    name: "Lập trình Node.js",
    price: 990000,
    image: "/images/nodejs.jpg",
    shortDescription: "Thành thạo xây dựng backend bằng Node.js.",
    star: 4,
    isViewed: false, // Trường "Đã xem"
    isFavorite: false, // Trường "Đã yêu thích"
  },
  {
    id: "3",
    name: "UI/UX Design cơ bản",
    price: 1200000,
    image: "/images/ui-ux.jpg",
    shortDescription: "Học tư duy thiết kế trải nghiệm người dùng.",
    star: 3,
    isViewed: false, // Trường "Đã xem"
    isFavorite: false, // Trường "Đã yêu thích"
  },
];
