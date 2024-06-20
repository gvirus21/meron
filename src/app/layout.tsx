import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

import Providers from "../providers";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Meron",
  description: "Best Photography agency",
};

const tuskerGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/tusker-grotesk/TuskerGrotesk-2500Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tusker-grotesk/TuskerGrotesk-4600Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/tusker-grotesk/TuskerGrotesk-4800Super.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--tusker-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative font-sans ${tuskerGrotesk.variable}`}>
        <Providers>
          <Cursor />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
