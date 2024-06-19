"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import MainOVerlay from "@/components/MainOVerlay";
import HeroSectionTop from "./_sections/hero-section-top";
import HeroSectionBottom from "./_sections/hero-section-bottom";
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
      <MainOVerlay />
      <HeroSectionTop scrollYProgress={scrollYProgress} />
      <HeroSectionBottom scrollYProgress={scrollYProgress} />
      <OurWorkSection scrollYProgress={scrollYProgress} />
      <OfficeSection scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  );
}

// TODO:
// small fixes
// add rest of the scroll animation.
// make site responsive

// Small tasks
// adjust height of section headings
// add cursor interactions
// update footer
// make overlay items disappear on office screen
