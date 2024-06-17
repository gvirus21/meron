"use client";

import MainOVerlay from "@/components/MainOVerlay";
import Footer from "./_sections/Footer";
import HeroSection from "./_sections/HeroSection";
import OfficeSection from "./_sections/OfficeSection";
import OurWorkSection from "./_sections/OurWorkSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-black">
      <MainOVerlay />
      <HeroSection />
      <OurWorkSection />
      <OfficeSection />
      <Footer />
    </main>
  );
}

// TODO:
// add custom cursor & interactions.
// add rest of the scroll animation.
