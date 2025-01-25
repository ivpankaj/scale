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
        <Hero />
        <Hero2/>
        <Hero3/>
      </div>
    </main>
  )
}

