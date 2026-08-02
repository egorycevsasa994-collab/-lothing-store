"use client";

import Image from "next/image";
import Menu from "@/components/Menu";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">

      {/* Меню */}
      <Menu />

      {/* Логотип */}
      <section className="flex justify-center pt-12 pb-12">
        <Image
          src="/logo.png"
          alt="Logo"
          width={700}
          height={700}
          priority
          className="
            w-[260px]
            sm:w-[340px]
            md:w-[520px]
            h-auto
          "
        />
      </section>

      {/* Товары */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

      {/* Нижний логотип */}
      <footer className="relative h-28">

        {/* Если захочешь вернуть 3D логотип */}
        {/* <RotatingLogo /> */}

      </footer>

    </main>
  );
}