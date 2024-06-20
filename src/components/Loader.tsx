import { MutableRefObject, useRef } from "react";
import { useGSAP } from "@gsap/react";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const progressAnimation = ({
  progressRef,
  progressNumberRef,
}: {
  progressRef: React.RefObject<MutableRefObject<HTMLDivElement>>;
  progressNumberRef: React.RefObject<MutableRefObject<HTMLDivElement>>;
}) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

const Loader = ({ timeline }: Props) => {
  const progressRef = useRef<MutableRefObject<HTMLDivElement>>(null);
  const progressNumberRef = useRef<MutableRefObject<HTMLDivElement>>(null);

  useGSAP(() => {
    timeline &&
      timeline.add(progressAnimation({ progressRef, progressNumberRef }));
  });
  return (
    <div className="fixed inset-0 h-screen w-screen max-w-full flex justify-center items-center bg-lime-700 z-50">
      Loader
    </div>
  );
};

export default Loader;
