"use client";

import HeroSection from "./_sections/HeroSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-black">
      <HeroSection />
      <div className="h-screen w-screen max-w-full bg-amber-600" />
      <div className="h-screen w-screen max-w-full bg-violet-500" />
      <div className="h-screen w-screen max-w-full bg-pink-600" />
    </main>
  );
}
