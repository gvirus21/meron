"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import useCursorState from "@/store/useCursorState";

const Cursor = () => {
  const [cursorSize, setCursorSize] = useState(24);
  const { cursorState } = useCursorState();

  useEffect(() => {
    switch (cursorState) {
      case "regular":
        setCursorSize(24);
        break;
      case "sm-hovered":
        setCursorSize(40);
        break;
      case "md-hovered":
        setCursorSize(80);
        break;
      case "lg-hovered":
        setCursorSize(120);
        break;
      case "xl-hovered":
        setCursorSize(160);
        break;
      default:
        break;
    }
  }, [cursorState]);

  const circle = useRef(null);
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

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -24, yPercent: -50 });
  };

  useEffect(() => {
    const animate = () => {
      const { x, y } = delayedMouse.current;

      delayedMouse.current = {
        x: lerp(x, mouse.current.x, 0.1),
        y: lerp(y, mouse.current.y, 0.1),
      };
      moveCircle(delayedMouse.current.x, delayedMouse.current.y);
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
      ref={circle}
      style={{
        height: cursorSize,
        width: cursorSize,
      }}
      className="hidden md:block fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white mix-blend-difference rounded-full z-[999] transition-all duration-300 ease-out pointer-events-none"
    ></div>
  );
};

export default Cursor;
