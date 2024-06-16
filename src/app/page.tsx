"use client";

import HeroSection from "./_sections/HeroSection";
import ThirdSection from "./_sections/ThirdSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-black">
      <HeroSection />
      <ThirdSection />
      <div className="h-screen w-screen max-w-full bg-black" />
      <div className="h-[20vh] w-screen max-w-full bg-violet-500" />
    </main>
  );
}
