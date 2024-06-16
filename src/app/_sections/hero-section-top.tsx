import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import SplitText from "@/components/helpers/SplitText";
import TextReveal from "@/components/helpers/TextReveal";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const HeroSectionTop = ({ scrollYProgress }: Props) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

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
      style={{ scale, rotate }}
      className="sticky top-0 flex flex-col justify-center items-center h-screen w-screen max-w-full bg-[#8cff34] overflow-x-hidden text-black"
    >
      <h1
        ref={headingRef}
        className="text-9xl font-bold font-tusker-grotesk pt-3 overflow-hidden"
      >
        <SplitText>MERON</SplitText>
      </h1>

      <div className="absolute bottom-20 flex flex-col justify-between items-center mt-20 text-xl">
        <p className="w-[40rem] text-center">
          <TextReveal containerDelay={2} animationDelay={0.07}>
            We at MERON are a Developer friendly Design Agency, Are experts in
            designing stunning Crafts for the Web & developing them.
          </TextReveal>
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSectionTop;
