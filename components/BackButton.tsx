"use client";

import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="
        fixed
        top-4
        left-4
        z-[100]
        w-12
        h-12
        rounded-full
        bg-[#1b1b1b]/90
        backdrop-blur
        border
        border-[#333]
        flex
        items-center
        justify-center
        text-2xl
        text-white
        active:scale-95
        transition
      "
    >
      ←
    </Link>
  );
}