import { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "./styles.css";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const HeroSectionBottom = ({ scrollYProgress }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [-5, 0]);

  const { scrollYProgress: sliderScreenYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
      style={{
        scale,
        rotate,
      }}
      className="relative flex justify-center items-center h-screen w-screen max-w-full bg-slate-200 text-black overflow-x-hidden font-mono gallery-clip"
    >
      <div className="flex flex-col justify-between h-screen w-screen py-20">
        <Slider
          text="PROFESSIONAL PHOTOSHOOT"
          left="-80%"
          direction="right"
          progress={sliderScreenYProgress}
        />
        <Slider
          text="ASTHETIC VIDEOSHOOT"
          left="-50%"
          direction="right"
          progress={sliderScreenYProgress}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 h-[30rem] aspect-[3/4] overflow-hidden bg-pink-300">
        <Image
          className="h-[120%] w-[120%] object-cover"
          src={"/images/sideface-model.jpg"}
          width={500}
          height={100}
          alt="model"
        />
      </div>
    </motion.section>
  );
};

export default HeroSectionBottom;

const TextElement = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-8xl font-tusker-grotesk tracking-wider mr-20",
        className
      )}
    >
      {children}
    </p>
  );
};

interface SliderProps {
  progress: MotionValue;
  text: string;
  left: string;
  direction: "left" | "right";
}

const Slider = ({ progress, text, left, direction }: SliderProps) => {
  const dir = direction == "left" ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [-750 * dir, 750 * dir]);

  return (
    <motion.div
      style={{
        x: translateX,
        left,
      }}
      className="flex whitespace-nowrap"
    >
      <TextElement>{text}</TextElement>
      <TextElement>{text}</TextElement>
      <TextElement>{text}</TextElement>
      <TextElement>{text}</TextElement>
      <TextElement>{text}</TextElement>
      <TextElement>{text}</TextElement>
    </motion.div>
  );
};
