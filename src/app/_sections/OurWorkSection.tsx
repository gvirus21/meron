import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TextReveal from "@/components/helpers/TextReveal";
import {
  useScroll,
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import useCursorState from "@/store/useCursorState";
import { cn } from "@/lib/utils";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const OurWorkSection = ({ scrollYProgress }: Props) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { height } = dimension;

  const { setCursorState } = useCursorState();

  const scale = useTransform(scrollYProgress, [0.25, 0.47], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.25, 0.47], [5, 0]);
  const top = useTransform(scrollYProgress, [0.25, 0.47, 0.5], [-20, -40, 0]);

  useEffect(() => {
    const raf = () => {
      requestAnimationFrame(raf);
    };

    // handling dimension change
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const sectionContainer = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionContainerScrollY } = useScroll({
    target: sectionContainer,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(sectionContainerScrollY, [0, 1], [0, -height / 2]);
  const y2 = useTransform(sectionContainerScrollY, [0, 1], [0, height / 2]);
  const y3 = useTransform(sectionContainerScrollY, [0, 1], [0, -height / 2]);
  const y4 = useTransform(sectionContainerScrollY, [0, 1], [0, height / 2]);
  const y5 = useTransform(sectionContainerScrollY, [0, 1], [0, -height / 2]);

  const images = [
    "/images/grid-images/1.webp",
    "/images/grid-images/2.webp",
    "/images/grid-images/3.webp",
    "/images/grid-images/4.webp",
    "/images/grid-images/5.webp",
    "/images/grid-images/6.webp",
    "/images/grid-images/7.webp",
    "/images/grid-images/8.webp",
    "/images/grid-images/9.webp",
    "/images/grid-images/10.webp",
    "/images/grid-images/11.webp",
    "/images/grid-images/12.webp",
    "/images/grid-images/13.webp",
    "/images/grid-images/14.webp",
    "/images/grid-images/15.webp",
  ];

  return (
    <motion.div
      style={{ scale, rotate, top }}
      className="relative flex flex-col justify-center items-center h-screen w-screen max-w-full bg-[#8cff34]"
    >
      <h2
        onMouseEnter={() => {
          setCursorState("lg-hovered");
        }}
        onMouseLeave={() => {
          setCursorState("regular");
        }}
        className="text-left w-[90%] text-black text-8xl lg:text-9xl font-tusker-grotesk tracking-wider my-10"
      >
        <TextReveal type="letter">OUR WORK</TextReveal>
      </h2>
      <div
        ref={sectionContainer}
        className="flex gap-[2vw] py-[2vw] box-border h-[70%] w-[80%] min-w-[250px] overflow-hidden"
      >
        <Column y={y1} images={[images[0], images[1], images[2]]} />
        <Column
          y={y2}
          className="-mt-[60rem]"
          images={[images[3], images[4], images[5]]}
        />
        <Column
          y={y3}
          className="-mt-[20rem]"
          images={[images[6], images[7], images[8]]}
        />
        <Column
          y={y4}
          className="hidden md:flex -mt-[50rem]"
          images={[images[9], images[10], images[11]]}
        />
        <Column
          y={y5}
          className="hidden md:flex -mt-[14rem]"
          images={[images[12], images[13], images[14]]}
        />
      </div>
    </motion.div>
  );
};

export default OurWorkSection;

interface ColumnProps {
  y: MotionValue;
  images: string[];
  className?: string;
}

const Column = ({ images, y, className }: ColumnProps) => {
  const { setCursorState } = useCursorState();

  return (
    <motion.div
      style={{ y }}
      className={cn(`flex flex-col h-full w-1/3 md:w-1/5 gap-[2vw]`, className)}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`min-h-[36rem] w-full relative overflow-hidden`}
        >
          <Image
            src={src}
            fill
            sizes="1200px"
            alt="project"
            className="object-cover h-auto w-auto"
            onMouseEnter={() => {
              setCursorState("md-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
          />
        </div>
      ))}
    </motion.div>
  );
};
