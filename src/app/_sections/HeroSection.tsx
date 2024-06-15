import { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroSectionTop from "./hero-section-top";
import HeroSectionBottom from "./hero-section-bottom";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[200vh] max-w-full">
      <HeroSectionTop scrollYProgress={scrollYProgress} />
      <HeroSectionBottom scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default HeroSection;
