"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import AboutSection from "./_sections/AboutSection";
import HeroSection from "./_sections/HeroSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-black">
      <div ref={containerRef} className="relative h-[200vh] max-w-full">
        <HeroSection scrollYProgress={scrollYProgress} />
        <AboutSection scrollYProgress={scrollYProgress} />
      </div>
      <div className="h-screen w-screen max-w-full bg-amber-600" />
      <div className="h-screen w-screen max-w-full bg-violet-500" />
      <div className="h-screen w-screen max-w-full bg-pink-600" />
    </main>
  );
}
