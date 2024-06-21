"use client";

import NumberLoader from "./number-loader";
import TextReveal from "../helpers/TextReveal";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const LOADER_MESSAGE = "“Good things take time”: Unkown";

const Loader: React.FC<Props> = ({ timeline }) => {
  return (
    <div className="relative inset-0 flex justify-center items-center h-screen w-screen max-w-full bg-[#8cff34] z-[999]">
      <p className="absolute bottom-20 left-1/2 w-full text-center transform -translate-x-1/2 text-xl text-black font-medium italic uppercase">
        <TextReveal exitAnimation exitDelay={6000}>{LOADER_MESSAGE}</TextReveal>
      </p>
      <NumberLoader timeline={timeline} />
    </div>
  );
};

export default Loader;
