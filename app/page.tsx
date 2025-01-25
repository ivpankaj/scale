"use client"
import { AnimatedSection } from "@/components/Animated";
import { Footer } from "@/components/Footer";
import { GridWrapper } from "@/components/grid-wrapper";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { Hero3 } from "@/components/hero3";
import { Navbar } from "@/components/navbar";


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

        <Footer/>
      </div>
    </main>
  );
}

