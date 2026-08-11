"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Кнопка меню */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          fixed
          top-4
          right-4
          z-[100]
          w-12
          h-12
          flex
          items-center
          justify-center
          text-3xl
          text-white
          active:scale-95
        "
      >
        ☰
      </button>

      {/* Затемнение */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-[110]"
        />
      )}

      {/* Боковое меню */}
      <aside
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-72
          bg-[#181818]
          text-white
          z-[120]
          transition-transform
          duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Кнопка закрытия */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="
            absolute
            right-6
            top-5
            text-3xl
            text-white
          "
        >
          ✕
        </button>

        {/* Ссылки */}
        <nav
          className="
            flex
            flex-col
            gap-8
            mt-24
            px-10
            text-2xl
            text-white
          "
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            Главная
          </Link>

          <Link
            href="/archive"
            onClick={() => setOpen(false)}
          >
            Архив
          </Link>

          <Link
            href="/contacts"
            onClick={() => setOpen(false)}
          >
            Контакты
          </Link>
        </nav>
      </aside>
    </>
  );
}