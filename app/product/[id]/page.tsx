"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((item) => item.id === id);

const [size, setSize] = useState("");
const [activeImage, setActiveImage] = useState(0);
const [fullscreen, setFullscreen] = useState(false);

if (!product) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
      Товар не найден
    </main>
  );
}

const currentProduct = product;

  function nextImage() {
  setActiveImage((prev) =>
    prev === currentProduct.images.length - 1 ? 0 : prev + 1
  );
}

function prevImage() {
  setActiveImage((prev) =>
    prev === 0 ? currentProduct.images.length - 1 : prev - 1
  );
}

  function buyProduct() {
  if (!size) {
    alert("Выберите размер");
    return;
  }

  const message = `Привет! Хочу купить ${currentProduct.name}, размер ${size}.`;

  const telegram = `https://t.me/nnsan00?text=${encodeURIComponent(message)}`;

  window.location.href = telegram;
}
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white p-6">

      {/* Полноэкранный просмотр */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">

          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-4xl z-50"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-6 text-6xl z-50"
          >
            ‹
          </button>

          <div className="relative w-full h-full">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-6 text-6xl z-50"
          >
            ›
          </button>

        </div>
      )}

      {/* Кнопка назад */}
      <Link
        href="/"
        className="
          fixed
          top-6
          left-6
          z-40
          w-12
          h-12
          rounded-full
          bg-[#1b1b1b]
          border
          border-[#333]
          flex
          items-center
          justify-center
          text-2xl
          hover:bg-[#2a2a2a]
          transition
        "
      >
        ←
      </Link>

      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-12">

        {/* Фотографии */}
        <div>

          <div
            onClick={() => setFullscreen(true)}
            className="
              aspect-square
              rounded-3xl
              overflow-hidden
              relative
              bg-[#1b1b1b]
              cursor-pointer
            "
          >

            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
            />

            {/* Предыдущая фотография */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/50
                text-3xl
                z-10
              "
            >
              ‹
            </button>

            {/* Следующая фотография */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="
absolute
                right-5
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/50
                text-3xl
                z-10
              "
            >
              ›
            </button>

          </div>

          {/* Миниатюры */}
          <div className="flex gap-4 mt-5">

            {product.images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                className={`
                  w-20
                  h-20
                  rounded-xl
                  overflow-hidden
                  border
                  ${
                    activeImage === index
                      ? "border-white"
                      : "border-transparent"
                  }
                `}
              >
                <Image
                  src={image}
                  alt=""
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </button>
            ))}

          </div>

        </div>

        {/* Информация о товаре */}
        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl mt-5">
            {product.price}
          </p>

          <p className="text-gray-400 mt-8 leading-relaxed whitespace-pre-line">
            {product.description}
          </p>

          {/* Размер */}
          <div className="mt-10">

            <h2 className="mb-4">
              Размер:
            </h2>

            <div className="flex gap-4">

              {["S", "M", "L"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSize(item)}
                  className={`
                    w-14
                    h-14
                    rounded-xl
                    border
                    ${
                      size === item
                        ? "bg-white text-black"
                        : "border-gray-600"
                    }
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Купить */}
          <button
            type="button"
            onClick={buyProduct}
            className="
              mt-10
              w-full
              bg-white
              text-black
              rounded-2xl
              py-4
              text-lg
              font-semibold
              hover:bg-gray-200
              transition
            "
          >
            Купить
          </button>

        </div>

      </section>

    </main>
  );
}