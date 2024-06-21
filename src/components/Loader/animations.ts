import gsap from "gsap";

export const firstDigitLoaingAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".for-gsap-first-digit", {
    yPercent: -52,
    duration: 6.4,
    ease: "power4.inOut",
  });

  return tl;
};

export const secondDigitLoaingAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".for-gsap-second-digit", {
    yPercent: -91,
    duration: 6.4,
    ease: "power4.inOut",
  });

  return tl;
};

export const thirdDigitLoaingAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".for-gsap-third-digit", {
    yPercent: -99.1,
    duration: 6.4,
    ease: "power4.inOut",
  });

  return tl;
};

export const exitLoadingDigitAnimation = () => {
  const tl = gsap.timeline();

  tl.to(".for-gsap-loading-number-container", {
    yPercent: -80,
    autoAlpha: 0,
  });

  return tl;
};
