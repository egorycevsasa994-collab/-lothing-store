"use client";

import Image from "next/image";
import Menu from "@/components/Menu";


export default function Contacts() {


  return (

    <main className="
    min-h-screen
    relative
    overflow-hidden
    bg-black
    ">



      {/* Меню */}

      <Menu />





      {/* Фоновая фотография */}

      <Image

        src="/contacts.jpg"

        alt="Contacts"

        fill

        priority

        className="
        object-cover
        "

      />





      {/* Затемнение */}

      <div className="
      absolute
      inset-0
      bg-black/50
      " />







      {/* Кнопки контактов */}

      <section className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      ">



        <div className="
        flex
        flex-col
        gap-5
        w-64
        ">




          <a

            href="https://youtube.com/ТВОЙ_КАНАЛ"

            target="_blank"

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
            transition
            "

          >

            YouTube

          </a>







          <a

            href="https://t.me/ТВОЙ_USERNAME"

            target="_blank"

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
            transition
            "

          >

            Telegram

          </a>







          <a

            href="mailto:твояпочта@gmail.com"

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
            transition
            "

          >

            Email

          </a>





        </div>


      </section>



    </main>

  );

}