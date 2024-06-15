import { useRef } from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "@/components/helpers/SplitText";
interface Props {
  scrollYProgress: MotionValue<number>;
}

const HeroSectionTop = ({ scrollYProgress }: Props) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLHeadingElement>(null);
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

//   useGSAP(
//     () => {
//       const tl = gsap.timeline();

//       tl.from("#letter", {
//         yPercent: 200,
//         stagger: 0.2,
//         delay: 0.3,
//         duration: 0.02,
//       });
//     },
//     { scope: paraRef }
//   );

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
        <p ref={paraRef} className="text-xl w-[38rem] text-center overflow-hidden">
          <SplitText>
            We at MERON are a Developer friendly Design Agency, Are experts in
            designing stunning Crafts for the Web & developing them.
          </SplitText>
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSectionTop;
