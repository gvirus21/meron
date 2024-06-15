import { motion, type MotionValue, useTransform } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const HeroSectionBottom = ({ scrollYProgress }: Props) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.section
      style={{
        scale,
        rotate,
      }}
      className="relative flex justify-center items-center h-screen w-screen max-w-full bg-slate-200 text-black overflow-x-hidden font-mono"
    >
      HeroSectionBottom
    </motion.section>
  );
};

export default HeroSectionBottom;
