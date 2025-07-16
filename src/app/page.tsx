"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between font-sans overflow-x-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e0e7ef]">
      {/* Animated gradient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-pink-100/40 to-purple-100/60 animate-bgMove" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 via-pink-300/20 to-purple-400/30 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
      </div>

      {/* Smooth sticky scroll indicator */}
      <div className="sticky top-0 left-0 w-full h-2 z-50 backdrop-blur-md">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 opacity-30 rounded-full blur-md" />
          <div
            id="scroll-bar"
            className="h-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      {/* Hero section */}
      <section className="w-full flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-0 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4 bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fadeInUp">
          Khám phá & Mua sắm sản phẩm công nghệ hiện đại
        </h1>
        <p className="max-w-xl mx-auto text-lg sm:text-xl text-gray-700 mb-8 animate-fadeInUp delay-100">
          Nền tảng mua sắm sản phẩm công nghệ, UI/UX mượt mà, trải nghiệm hiện
          đại, tối ưu cho mọi thiết bị.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-200">
          <a
            href="/products"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition text-lg ring-2 ring-blue-200/40 focus:ring-4 focus:ring-blue-400/40"
          >
            Khám phá ngay
          </a>
          <a
            href="/product-favorite"
            className="px-8 py-3 rounded-full bg-white text-primary border border-primary font-semibold shadow hover:bg-primary/10 transition text-lg"
          >
            Sản phẩm yêu thích
          </a>
        </div>
        <div className="mt-12 animate-fadeInUp delay-300">
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src="/images/ui-ux.jpg"
              alt="UI UX"
              width={480}
              height={320}
              className="rounded-2xl shadow-2xl mx-auto w-full object-cover border-4 border-white/60 backdrop-blur-lg"
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg flex items-center gap-2 animate-fadeInUp delay-400">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-500"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
              </svg>
              <span className="font-semibold text-gray-700">
                UI/UX chuẩn landing page
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="w-full max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fadeInUp delay-400">
        <div className="glass-card p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <span className="mb-3 text-4xl">⚡</span>
          <h3 className="font-bold text-lg mb-2 text-primary">
            Hiện đại & Mượt mà
          </h3>
          <p className="text-gray-600">
            Giao diện sử dụng React, Next.js, shadcn/ui, motion animation, tối
            ưu trải nghiệm người dùng.
          </p>
        </div>
        <div className="glass-card p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <span className="mb-3 text-4xl">🔒</span>
          <h3 className="font-bold text-lg mb-2 text-primary">
            API nhanh & Bảo mật
          </h3>
          <p className="text-gray-600">
            Kết nối API mock, tốc độ phản hồi nhanh, bảo mật dữ liệu người dùng.
          </p>
        </div>
        <div className="glass-card p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <span className="mb-3 text-4xl">📱</span>
          <h3 className="font-bold text-lg mb-2 text-primary">
            Responsive & Đa nền tảng
          </h3>
          <p className="text-gray-600">
            Tương thích mọi thiết bị, tối ưu mobile, tablet, desktop, hiệu ứng
            đẹp mắt.
          </p>
        </div>
      </section>

      {/* Review section */}
      {/* Modern Review section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-10 text-center tracking-tight">
          Khách hàng nói gì?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-8 -left-8 opacity-10 text-[7rem] select-none pointer-events-none">
              “
            </div>
            <Image
              src="/images/reactjs.jpg"
              width={64}
              height={64}
              alt="avatar"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-3 object-cover"
            />
            <span className="text-2xl mb-2 text-yellow-400">🌟🌟🌟🌟🌟</span>
            <p className="text-gray-700 italic text-lg font-medium mb-2">
              Giao diện cực kỳ đẹp, trải nghiệm mượt mà, rất thích hiệu ứng
              động!
            </p>
            <span className="font-semibold text-primary">Trần Văn Kiên</span>
          </div>
          <div className="glass-card p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -top-8 -left-8 opacity-10 text-[7rem] select-none pointer-events-none">
              “
            </div>
            <Image
              src="/images/ui-ux.jpg"
              width={64}
              height={64}
              alt="avatar"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-3 object-cover"
            />
            <span className="text-2xl mb-2 text-yellow-400">🌟🌟🌟🌟🌟</span>
            <p className="text-gray-700 italic text-lg font-medium mb-2">
              Landing page chuyên nghiệp, mobile friendly, rất dễ sử dụng.
            </p>
            <span className="font-semibold text-primary">Trần Văn Tuệ </span>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-14 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 mt-8 glass-card shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
          Sẵn sàng trải nghiệm?
        </h2>
        <a
          href="/products"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold shadow-xl hover:scale-110 hover:shadow-2xl transition text-xl ring-2 ring-blue-200/40 focus:ring-4 focus:ring-blue-400/40"
        >
          Bắt đầu mua sắm
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm bg-transparent z-10">
        <span>© {new Date().getFullYear()} MyShop. All rights reserved.</span>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Github
        </a>
        <a href="/products" className="hover:underline">
          Sản phẩm
        </a>
      </footer>

      {/* Glassmorphism style only */}
      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </div>
  );
}
