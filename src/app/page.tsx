"use client";

import { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!loaderFinished) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
      window.scrollTo(0, 0);
      window.addEventListener("scroll", preventScroll, { passive: false });
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      window.removeEventListener("scroll", preventScroll);
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      window.removeEventListener("scroll", preventScroll);
    };
  }, [loaderFinished]);

  const preventScroll = (e: Event) => {
    window.scrollTo(0, 0);
    e.preventDefault();
  };

  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className="relative flex flex-col items-center justify-between bg-black h-[420vh]"
    >
      {!loaderFinished ? (
        <Loader timeline={timeline} />
      ) : (
        <>
          <Navbar />
          <MainOVerlay timeline={timeline} scrollYProgress={scrollYProgress} />
          <HeroSection timeline={timeline} scrollYProgress={scrollYProgress} />
        </>
      )}

      <InfoSection scrollYProgress={scrollYProgress} />
      <OurWorkSection scrollYProgress={scrollYProgress} />
      <OfficeSection scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  );
}
