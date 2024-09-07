import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Milestone from "@/components/Milestone";
import Testimonials from "@/components/Testimonials";
import TimeLine from "@/components/Timeline";
import Video from "@/components/Video";
import { Metadata } from "next";
import FAQ from "./faq/page";
import GrandLaunch from "@/components/GrandLaunch";

export const metadata: Metadata = {
  title: "Rudra Overseas - Your Gateway to Global Education and Careers",
  description: "Explore new horizons with Rudra Overseas. npmEmbark on a journey to world-class education and global career opportunities.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Video />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Milestone />
      <TimeLine />
      <FAQ />
      <Contact />
      <GrandLaunch />
    </>
  );
}
