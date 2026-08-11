"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function Archive() {


  const photos = [
    "/archive/2.jpg",
    "/archive/3.jpg",
    "/archive/4.jpg",
    "/archive/5.jpg",
    "/archive/6.jpg",
    "/archive/7.jpg",
    "/archive/8.jpg",
    "/archive/9.jpg",
    "/archive/10.jpg",
  ];


  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);



  function nextPhoto() {

    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === photos.length - 1
        ? 0
        : activeIndex + 1
    );

  }



  function prevPhoto() {

    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === 0
        ? photos.length - 1
        : activeIndex - 1
    );

  }



  return (

    <main className="
    min-h-screen
    bg-[#0f0f0f]
    text-white
    relative
    px-6
    py-10
    ">



      {/* Кнопка меню */}

      <button

        onClick={() => setMenuOpen(true)}

        className="
        fixed
        right-6
        top-6
        z-40
        text-4xl
        "

      >

        ☰

      </button>






      {/* Боковое меню */}

      {menuOpen && (

        <>

          <div

            onClick={() => setMenuOpen(false)}

            className="
            fixed
            inset-0
            bg-black/60
            z-40
            "

          />



          <aside className="
          fixed
          right-0
          top-0
          h-screen
          w-72
          bg-[#181818]
          z-50
          p-10
          ">


            <button

              onClick={() => setMenuOpen(false)}

              className="
              absolute
              top-5
              right-6
              text-3xl
              "

            >
              ✕

            </button>



            <nav className="
            flex
            flex-col
            gap-8
            mt-16
            text-2xl
            ">


              <Link href="/">
                Главная
              </Link>


              <Link href="/archive">
                Архив
              </Link>


              <Link href="/contacts">
                Контакты
              </Link>


            </nav>


          </aside>

        </>

      )}







      {/* Полный экран фото */}

      {activeIndex !== null && (

        <div className="
        fixed
        inset-0
        bg-black
        z-50
        flex
        items-center
        justify-center
        ">



          <button

            onClick={() => setActiveIndex(null)}

            className="
            absolute
            top-6
            right-6
            text-4xl
            z-50
            "

          >

            ✕

          </button>





          <button

            onClick={prevPhoto}

            className="
            absolute
            left-6
            top-1/2
            -translate-y-1/2
            text-6xl
            z-50
            "

          >

            ‹

          </button>






          <div className="
          relative
          w-full
          h-full
          ">


            <Image

              src={photos[activeIndex]}

              alt="Archive"

              fill

              className="
              object-contain
              "

            />


          </div>






          <button

            onClick={nextPhoto}

            className="
            absolute
            right-6
            top-1/2
            -translate-y-1/2
            text-6xl
            z-50
            "

          >

            ›

          </button>



        </div>

      )}







      <h1 className="
      text-4xl
      font-bold
      text-center
      mb-12
      ">
        Архив
      </h1>







      <section className="
      max-w-4xl
      mx-auto
      flex
      flex-col
      gap-10
      ">



        {photos.map((photo, index) => (

          <div

            key={photo}
            onClick={() => setActiveIndex(index)}

            className="
            relative
            w-full
            aspect-[4/5]
            rounded-3xl
            overflow-hidden
            bg-[#1b1b1b]
            cursor-pointer
            hover:scale-[1.02]
            transition
            "

          >


            <Image

              src={photo}

              alt={`Archive ${index + 1}`}

              fill

              className="
              object-cover
              "

            />


          </div>

        ))}



      </section>




    </main>

  );

}