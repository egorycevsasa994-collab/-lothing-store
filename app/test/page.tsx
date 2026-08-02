"use client";

export default function Test() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <button
        type="button"
        onClick={() => alert("Работает!")}
        className="bg-white text-black px-8 py-4 rounded-xl text-xl"
      >
        Нажми меня
      </button>
    </main>
  );
}