"use client";

import HeroSection from "./_sections/HeroSection";
import OfficeSection from "./_sections/OfficeSection";
import ThirdSection from "./_sections/ThirdSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-black">
      <HeroSection />
      <ThirdSection />
      <OfficeSection />
      <footer className="flex justify-end items-center h-[20vh] w-full bg-black px-20">
        <p className="text-white text-xl mt-20">Made by @gouravkumar</p>
      </footer>
    </main>
  );
}


// TODO:

// add custom cursor & interactions.
// add rest of the scroll animation.

