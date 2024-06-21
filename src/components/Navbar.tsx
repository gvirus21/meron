"use client";

import { motion } from "framer-motion";
import useCursorState from "@/store/useCursorState";

const Navbar = () => {
  const { setCursorState } = useCursorState();

  const navAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 1,
        delay: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navAnimation}
      initial="initial"
      animate="animate"
      className="fixed top-0 flex justify-center items-center h-20 w-screen z-[99] text-black"
    >
      <div className="flex justify-between items-center w-full px-4 lg:px-16">
        <p
          onMouseEnter={() => {
            setCursorState("sm-hovered");
          }}
          onMouseLeave={() => {
            setCursorState("regular");
          }}
          className="text-lg text-black"
        >
          Meron.
        </p>

        <div className="flex text-sm md:text-base">
          <button
            onMouseEnter={() => {
              setCursorState("sm-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
            className="px-4 py-2 border border-black rounded-full mr-2 lg:mr-4"
          >
            Join the community
          </button>
          <button
            onMouseEnter={() => {
              setCursorState("md-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
            className="px-4 py-2 border border-black rounded-full"
          >
            Support
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
