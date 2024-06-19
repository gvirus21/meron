import { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import useCursorState from "@/store/useCursorState";
import { cn } from "@/lib/utils";
import "./styles.css";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const InfoSection = ({ scrollYProgress }: Props) => {
  const { setCursorState } = useCursorState();
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [-5, 0]);

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smParralax = useTransform(containerScrollYProgress, [0, 1], [-100, 0]);
  const mdParralax = useTransform(containerScrollYProgress, [0, 1], [0, -350]);

  return (
    <motion.section
      style={{
        scale,
        rotate,
      }}
      ref={container}
      className="relative flex justify-center items-center h-screen w-screen max-w-full bg-slate-200 text-black overflow-x-hidden font-mono gallery-clip"
    >
      <div className="flex flex-col justify-between h-screen w-screen py-20">
        <Slider
          text="PROFESSIONAL PHOTOSHOOT"
          left="-80%"
          direction="right"
          progress={containerScrollYProgress}
        />
        <Slider
          text="ASTHETIC VIDEOGRAPHY"
          left="-50%"
          direction="left"
          progress={containerScrollYProgress}
        />
      </div>
      {/* images */}
      <>
        <motion.div
          style={{ y: smParralax }}
          className="absolute top-[50%] left-[36%] h-[16rem] aspect-[3/4] bg-pink-500 z-10 shadow-xl"
        >
          <Image
            onMouseEnter={() => {
              setCursorState("lg-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
            className="h-[120%] w-[120%] object-cover"
            src={"/images/model-1.jpg"}
            width={500}
            height={100}
            alt="model"
          />
        </motion.div>

        <motion.div className="absolute top-1/2 -translate-y-1/2 h-[40rem] aspect-[3/4] overflow-hidden bg-pink-300 shadow-xl">
          <Image
            onMouseEnter={() => {
              setCursorState("xl-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
            className="h-[120%] w-[120%] object-cover"
            src={"/images/model-2.jpg"}
            width={500}
            height={100}
            alt="model"
          />
        </motion.div>

        <motion.div
          style={{ y: mdParralax }}
          className="absolute top-2/4 -translate-y-1/2 right-[32%] h-[24rem] aspect-[3/4] bg-pink-500 shadow-xl"
        >
          <Image
            onMouseEnter={() => {
              setCursorState("lg-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
            className="h-[120%] w-[120%] object-cover"
            src={"/images/model-3.webp"}
            width={500}
            height={100}
            alt="model"
          />
        </motion.div>
      </>
    </motion.section>
  );
};

export default InfoSection;

const TextElement = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const { setCursorState } = useCursorState();

  return (
    <p
      onMouseEnter={() => {
        setCursorState("lg-hovered");
      }}
      onMouseLeave={() => {
        setCursorState("regular");
      }}
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
