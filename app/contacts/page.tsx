"use client";

import Image from "next/image";
import Menu from "@/components/Menu";

export default function Contacts() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">

      {/* Фоновая фотография */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contacts.jpg"
          alt="Contacts"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Затемнение */}
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

      {/* Меню */}
      <Menu />

      {/* Кнопки контактов */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">

        <div className="flex flex-col gap-5 w-full max-w-xs">

          {/* YouTube */}
          <a
            href="https://youtube.com/channel/UCOtvonqSeA0QYBX1ivSFviA?si=jZxAgQ5iaM87NPUe"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/10
              backdrop-blur-md
              border
              border-white/30
              rounded-2xl
              py-4
              text-center
              text-white
              hover:bg-white/20
              active:scale-95
              transition
              select-none
            "
          >
            YouTube
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/ble5smee"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/10
              backdrop-blur-md
              border
              border-white/30
              rounded-2xl
              py-4
              text-center
              text-white
              hover:bg-white/20
              active:scale-95
              transition
              select-none
            "
          >
            Telegram
          </a>

          {/* Email */}
          <a
            href="mailto:egorychevaleksandar@yandex.com"
            className="
              bg-white/10
              backdrop-blur-md
              border
              border-white/30
              rounded-2xl
              py-4
              text-center
              text-white
              hover:bg-white/20
              active:scale-95
              transition
              select-none
            "
          >
            Email
          </a>

        </div>

      </section>

    </main>
  );
}