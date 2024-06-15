import React from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const HeroSection = ({ scrollYProgress }: Props) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 flex justify-center items-center h-screen w-screen max-w-full bg-yellow-400 overflow-x-hidden"
    >
      HeroSection
      
    </motion.section>
  );
};

export default HeroSection;
