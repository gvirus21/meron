import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TextReveal from "@/components/helpers/TextReveal";
import {
  useScroll,
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

const OurWorkSection = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { height } = dimension;

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

  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -height / 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height / 2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -height / 2]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height / 2]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -height / 2]);

  const images = [
    "/images/grid-images/1.jpg",
    "/images/grid-images/2.jpg",
    "/images/grid-images/3.jpg",
    "/images/grid-images/4.jpg",
    "/images/grid-images/5.jpg",
    "/images/grid-images/6.jpg",
    "/images/grid-images/7.jpg",
    "/images/grid-images/8.jpg",
    "/images/grid-images/9.jpg",
    "/images/grid-images/10.jpg",
    "/images/grid-images/11.jpg",
    "/images/grid-images/12.jpg",
    "/images/grid-images/13.jpg",
    "/images/grid-images/14.jpg",
    "/images/grid-images/15.jpg",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full bg-[#8cff34]">
      <h2 className="text-left w-[90%] text-black text-9xl font-tusker-grotesk tracking-wider my-10">
        <TextReveal type="letter">OUR WORK</TextReveal>
      </h2>
      <div
        ref={container}
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
          className="-mt-[50rem]"
          images={[images[9], images[10], images[11]]}
        />
        <Column
          y={y5}
          className="-mt-[14rem]"
          images={[images[12], images[13], images[14]]}
        />
      </div>
    </div>
  );
};

export default OurWorkSection;

interface ColumnProps {
  y: MotionValue;
  images: string[];
  className?: string;
}

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div
      style={{ y }}
      className={cn(`flex flex-col h-full w-1/5 gap-[2vw]`, className)}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`min-h-[36rem] w-full relative overflow-hidden`}
        >
          <Image src={src} fill alt="project" className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
