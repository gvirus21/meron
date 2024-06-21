"use client";

import { useState, useRef } from "react";
import { useScroll } from "framer-motion";
import Loader from "@/components/Loader/index";
import MainOVerlay from "@/components/MainOVerlay";
import HeroSection from "./_sections/HeroSection";
import InfoSection from "./_sections/InfoSection";
import OurWorkSection from "./_sections/OurWorkSection";
import OfficeSection from "./_sections/OfficeSection";
import Footer from "./_sections/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });
    setTimeline(tl);
  });

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
      {loaderFinished ? (
        <>
          <Navbar />
          <MainOVerlay timeline={timeline} scrollYProgress={scrollYProgress} />
          <HeroSection timeline={timeline} scrollYProgress={scrollYProgress} />
        </>
      ) : (
        <Loader timeline={timeline} />
      )}

      <InfoSection scrollYProgress={scrollYProgress} />
      <OurWorkSection scrollYProgress={scrollYProgress} />
      <OfficeSection scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  );
}

// TODO:
// fix office modal
