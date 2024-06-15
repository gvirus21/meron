"use client"

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ReactLenisProvider({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default ReactLenisProvider;
