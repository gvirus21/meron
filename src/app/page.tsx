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
      <div className="h-[20vh] w-screen max-w-full bg-violet-500" />
    </main>
  );
}


// TODO:
// add office location section.
// add footer
// add images to the grid section

// ---

// add custom cursor & interactions.
// add rest of the scroll animation.

