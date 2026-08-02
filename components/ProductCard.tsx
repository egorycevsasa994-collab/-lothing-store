import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
}

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group"
    >
      <div
        className="
          rounded-3xl
          overflow-hidden
          bg-[#1b1b1b]
          border
          border-[#2a2a2a]
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        <div className="relative aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-4">
          <h2 className="font-semibold">
            {product.name}
          </h2>

          <p className="text-gray-400">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}