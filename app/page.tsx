"use client"
import { GridWrapper } from "@/components/grid-wrapper";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { Hero3 } from "@/components/hero3";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GridWrapper />
      <div className="relative z-10">
        <Navbar />

        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Hero2 />
        </AnimatedSection>
        <AnimatedSection>
          <Hero3 />
        </AnimatedSection>
      </div>
    </main>
  );
}

// Reusable animated wrapper for scroll-based animations
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, scale: 0.8 }, // Start invisible and scaled down
        visible: {
          opacity: 1,
          scale: 1, // Scale back to normal size
          transition: { duration: 0.8 }, // Smooth animation
        },
      }}
    >
      {children}
    </motion.div>
  );
}
