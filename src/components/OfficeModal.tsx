import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import "./styles.css";
import { useGSAP } from "@gsap/react";

interface Props {
  modal: {
    active: boolean;
    index: number;
  };
  officeData: {
    src: string;
    color: string;
  }[];
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const OfficeModal = ({ officeData, modal }: Props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const movContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const movContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const mouseMoveContainer = container.current;
      if (mouseMoveContainer instanceof HTMLElement) {
        const containerWidth = mouseMoveContainer.offsetWidth;
        const containerHeight = mouseMoveContainer.offsetHeight;

        const x = clientX - containerWidth / 2;
        const y = clientY - containerHeight / 2;
        movContainerX(x);
        movContainerY(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const { active, index } = modal;

  return (
    <motion.div
      id="mouseMoveContainer"
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "open" : "closed"}
      className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-[20rem] aspect-[4/3] justify-center items-center overflow-hidden pointer-events-none"
      // style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} // Ensure it starts centered
    >
      <div
        style={{
          top: index * -100 + "%",
        }}
        className="absolute h-full w-full modal-slider"
      >
        {officeData.map((office, index) => {
          const { src, color } = office;

          return (
            <div
              key={`modal-${index}`}
              style={{ backgroundColor: color }}
              className={"h-full w-full flex justify-center items-center"}
            >
              <Image
                src={`/images/offices/${src}`}
                width={300}
                height={0}
                className="h-auto object-cover"
                alt="office-image"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default OfficeModal;
