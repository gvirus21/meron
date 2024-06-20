"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import MainOVerlay from "@/components/MainOVerlay";
import HeroSection from "./_sections/HeroSection";
import InfoSection from "./_sections/InfoSection";
import OurWorkSection from "./_sections/OurWorkSection";
import OfficeSection from "./_sections/OfficeSection";
import Footer from "./_sections/Footer";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className="relative flex flex-col items-center justify-between h-[420vh] bg-black"
    >
      <MainOVerlay scrollYProgress={scrollYProgress} />
      <HeroSection scrollYProgress={scrollYProgress} />
      <InfoSection scrollYProgress={scrollYProgress} />
      <OurWorkSection scrollYProgress={scrollYProgress} />
      <OfficeSection scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  );
}

// TODO:
// bug fixes
