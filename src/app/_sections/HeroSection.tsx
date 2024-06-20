import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import SplitText from "@/components/helpers/SplitText";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const HeroSection = ({ scrollYProgress }: Props) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { setCursorState } = useCursorState();

  const scale = useTransform(scrollYProgress, [0, 0.47], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.47], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#letter", {
        yPercent: 200,
        stagger: 0.2,
        delay: 0.3,
        duration: 1.5,
        ease: "power3.out",
      });
    },
    { scope: headingRef }
  );

  return (
    <motion.section
      style={{ scale, rotate, opacity }}
      className="sticky top-0 flex flex-col justify-center items-center h-screen w-screen max-w-full bg-[#8cff34] overflow-x-hidden text-black"
    >
      <h1
        ref={headingRef}
        onMouseEnter={() => {
          setCursorState("lg-hovered");
        }}
        onMouseLeave={() => {
          setCursorState("regular");
        }}
        className="text-9xl font-bold font-tusker-grotesk pt-3 overflow-hidden"
      >
        <SplitText>MERON</SplitText>
      </h1>

      <div className="absolute bottom-20 flex flex-col justify-between items-center mt-20 text-xl">
        <p className="text-sm md:text-base w-full max-w-[40rem] text-center px-3">
          <TextReveal containerDelay={2} animationDelay={0.07}>
            We at MERON are a Photographer-friendly Agency, specializing in
            capturing stunning visuals and creating breathtaking photographic
            masterpieces.
          </TextReveal>
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
