import { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";

export const metadata: Metadata = {
  title: "eFOLiO | Modern CS Portfolio",
  description: "Introduction and overview of my technical portfolio.",
};

export default function Home() {
  /**
   * The page is kept intentionally light!
   * All layout logic is handled by layout.tsx & Header/Footer in "/components".
   * All visual content is contained within the HeroSection component.
   */
  return <HeroSection />;
}
