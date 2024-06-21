import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: string;
  className?: string;
  animationDelay?: number;
  containerDelay?: number;
  exitAnimation?: boolean;
  exitDelay?: number;
  type?: "word" | "letter";
}

const TextReveal = ({
  children,
  className,
  animationDelay = 0.2,
  containerDelay,
  type = "word",
  exitAnimation,
  exitDelay = 5000,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (exitAnimation) {
      timer = setTimeout(() => {
        setShow(false);
      }, exitDelay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [exitAnimation, exitDelay]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: containerDelay || 0,
      },
    },
  };

  const wordVariants = {
    initial: {
      y: 60,
    },
    animate: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.6,
        delay:
          (containerDelay ?? 0) +
          (animationDelay ? animationDelay * i : 0.2 * i),
      },
    }),

    exit: (i: number) => ({
      y: -60,
      transition: {
        duration: 0.6,
        delay:
          (containerDelay ?? 0) +
          (animationDelay ? animationDelay * i : 0.2 * i),
      },
    }),
  };

  const lettersVariant = {
    initial: {
      y: 150,
    },
    animate: (i: number) => ({
      y: 10,
      transition: {
        duration: 0.8,
        delay:
          (containerDelay ?? 0) +
          (animationDelay ? animationDelay * i : 0.2 * i),
      },
    }),
  };

  const words = children.split(" ");
  const letters = children.split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.span
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
        >
          {type === "word"
            ? words.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className={cn("overflow-hidden inline-block", className)}
                >
                  <motion.span
                    className="inline-block"
                    custom={i}
                    variants={wordVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    exit={exitAnimation ? "exit" : undefined}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))
            : letters.map((letter, i) => {
                return (
                  <span
                    key={`${letter}-${i}`}
                    className={cn("overflow-hidden inline-block", className)}
                  >
                    <motion.span
                      className="inline-block"
                      custom={i}
                      variants={lettersVariant}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      exit={exitAnimation ? "exit" : undefined}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  </span>
                );
              })}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default TextReveal;
