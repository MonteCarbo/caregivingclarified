import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Caregiving Clarified - Financial Guidance for the Sandwich Generation",
  description:
    "Navigate senior care decisions with rigorous data and empathy. Get clarity on costs, strategies, and next steps.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <HeroSection />
      </div>
      <Footer />
    </main>
  )
}
