import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  firstDigitLoaingAnimation,
  secondDigitLoaingAnimation,
  thirdDigitLoaingAnimation,
  exitLoadingDigitAnimation,
} from "./animations";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const FIRST_DIGITS_SET = [0, 1];
const SECOND_DIGITS_SET = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const temp_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const THIRD_DIGITS_SET = Array(10)
  .fill([...temp_array, 0].join(""))
  .join("")
  .split("")
  .map(Number);

interface Props {
  timeline: gsap.core.Timeline | null;
}

const NumberLoader = ({ timeline }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const loadingNumberRefContainer = useRef(null);

  useGSAP(() => {
    timeline &&
      timeline
        .add(thirdDigitLoaingAnimation())
        .add(secondDigitLoaingAnimation(), 1)
        .add(firstDigitLoaingAnimation(), 2)
        .add(exitLoadingDigitAnimation(), 6);
  }, [timeline]);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const lerp = (x: number, y: number, amount: number) =>
    x * (1 - amount) + y * amount;

  const moveLoaderContainer = (x: number, y: number) => {
    gsap.set(loadingNumberRefContainer.current, {
      x,
      y,
      xPercent: 55,
      yPercent: 55,
    });
  };

  useEffect(() => {
    const animate = () => {
      const { x, y } = delayedMouse.current;

      delayedMouse.current = {
        x: lerp(x, mouse.current.x, 0.1),
        y: lerp(y, mouse.current.y, 0.1),
      };

      const windowWidth = window.innerWidth;

      if (windowWidth > 800) {
        moveLoaderContainer(delayedMouse.current.x, delayedMouse.current.y);
      }
      window.requestAnimationFrame(animate);
    };
    animate();
    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.current = {
        x: clientX - window.innerWidth / 2,
        y: clientY - window.innerHeight / 2,
      };
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div
      ref={loadingNumberRefContainer}
      className={cn(
        "absolute flex h-[5rem] w-[6rem] text-black text-[3.5rem] overflow-hidden font-tusker-grotesk for-gsap-loading-number-container",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex justify-center items-start h-[5rem] w-[2rem] overflow-hidden">
        <div className="for-gsap-first-digit">
          {FIRST_DIGITS_SET.map((digit) => (
            <p key={`0-${digit}`}>{digit}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start h-[5rem] w-[2rem]">
        <div className="for-gsap-second-digit">
          {SECOND_DIGITS_SET.map((digit) => (
            <p key={`1-${digit}`}>{digit}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start h-[5rem] w-[2rem]">
        <div className="for-gsap-third-digit">
          {THIRD_DIGITS_SET.map((digit) => (
            <p key={`2-${digit}`}>{digit}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberLoader;
