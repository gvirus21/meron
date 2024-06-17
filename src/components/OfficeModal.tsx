import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import "./styles.css";

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
  const container = useRef(null);
  useGSAP(() => {
    const movContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const movContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      const mouseMoveContainer = document.getElementById("mouseMoveContainer");

      if (mouseMoveContainer instanceof HTMLElement) {
        const containerWidth = mouseMoveContainer?.offsetWidth;
        const containerHeight = mouseMoveContainer?.offsetHeight;

        const x = clientX - containerWidth;
        const y = clientY - containerHeight;
        movContainerX(x);
        movContainerY(y);
      }
    });
  });

  const { active, index } = modal;

  return (
    <motion.div
      id="mouseMoveContainer"
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "open" : "closed"}
      className="absolute bg-white h-[20rem] aspect-[4/3] flex justify-center items-center overflow-hidden pointer-events-none"
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
