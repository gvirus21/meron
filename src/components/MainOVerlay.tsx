"use client";

import useCursorState from "@/store/useCursorState";
import { delay, motion, MotionValue, useTransform } from "framer-motion";
import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaReddit,
  FaPinterest,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: <FaInstagram />,
    link: "#",
  },
  {
    id: "youtube",
    icon: <FaYoutube />,
    link: "#",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    link: "#",
  },
  {
    id: "reddit",
    icon: <FaReddit />,
    link: "#",
  },
  {
    id: "pintrest",
    icon: <FaPinterest />,
    link: "#",
  },
];

interface Props {
  scrollYProgress: MotionValue<number>;
}

const iconVariant = {
  initial: {
    y: 20,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 2,
      duration: 0.5,
    },
  },
};

const phoneNoVariant = {
  initial: {
    x: -200,
  },
  animate: {
    x: 0,
    transition: {
      ease: "easeInOut",
      delay: 2.4,
      duration: 1.5,
    },
  },
};

const mailIdVariant = {
  initial: {
    x: -200,
  },
  animate: {
    x: 0,
    transition: {
      ease: "easeInOut",
      delay: 2,
      duration: 1.5,
    },
  },
};

const MainOVerlay = ({ scrollYProgress }: Props) => {
  const { setCursorState } = useCursorState();

  const mailIdY = useTransform(scrollYProgress, [0.8, 1.6], [0, 1000]);
  const phoneNoY = useTransform(scrollYProgress, [0.85, 1.65], [0, 1000]);
  const iconY = useTransform(scrollYProgress, [0.9, 1.6], [0, -200]);

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        onMouseEnter={() => {
          setCursorState("md-hovered");
        }}
        onMouseLeave={() => {
          setCursorState("regular");
        }}
        className="fixed top-1/2 -translate-y-[20%] left-2 text-black text-xl z-50 -rotate-90"
      >
        <div className="hidden md:block relative overflow-hidden">
          <motion.p
            variants={mailIdVariant}
            style={{
              x: mailIdY,
            }}
          >
            Meron.help@mail.co
          </motion.p>
        </div>
        <div className="hidden md:block relative overflow-hidden">
          <motion.p
            variants={phoneNoVariant}
            style={{
              x: phoneNoY,
            }}
          >
            +91-8903-8080
          </motion.p>
        </div>
      </motion.div>
      <div className="hidden md:flex fixed top-1/2 -translate-y-[50%] right-20 flex-col justify-between h-[20rem] text-black text-xl z-50">
        {SOCIAL_LINKS.map((social) => (
          <div
            className="overflow-hidden"
            key={social.id}
            onMouseEnter={() => {
              setCursorState("sm-hovered");
            }}
            onMouseLeave={() => {
              setCursorState("regular");
            }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariant}
              style={{
                y: iconY,
              }}
            >
              {social.icon}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainOVerlay;
