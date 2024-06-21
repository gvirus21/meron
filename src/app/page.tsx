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
import { cn } from "@/lib/utils";

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
      className={cn(
        "relative flex flex-col items-center justify-between  bg-black",
        loaderFinished ? "h-[420vh]" : "h-screen"
      )}
    >
      {loaderFinished ? (
        <>
          <Navbar />
          <MainOVerlay timeline={timeline} scrollYProgress={scrollYProgress} />
          <HeroSection timeline={timeline} scrollYProgress={scrollYProgress} />
          <InfoSection scrollYProgress={scrollYProgress} />
          <OurWorkSection scrollYProgress={scrollYProgress} />
          <OfficeSection scrollYProgress={scrollYProgress} />
          <Footer />
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </main>
  );
}

// TODO:
// fix office modal
