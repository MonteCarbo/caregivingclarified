import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Ethan Carbo - Caregiving Clarified",
  description: "Learn about Ethan's mission to guide families through senior care decisions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img src="/images/ethan.png" alt="Ethan Carbo" className="w-48 h-auto rounded-lg shadow-md" />
              </div>
              <div className="flex-grow">
                <h1
                  className="text-4xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#003784" }}
                >
                  About Ethan Carbo
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I approach problems with an engineer's mindset: rigorous research, honest analysis, and no hidden
                  agenda. I believe that good decisions are based on good information, and that's what I'm here to
                  provide.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#003784" }}>
                  A Personal Stake in This
                </h2>
                <div className="float-right w-48 rounded-lg shadow-md ml-6 mb-4">
                  <img
                    src="/images/meemaw-100th.png"
                    alt="Ethan's grandmother at her 100th birthday celebration"
                    className="w-full rounded-lg"
                  />
                  <p className="text-center text-sm text-muted-foreground italic mt-2">
                    A photo from my grandmother's 100th birthday celebration
                  </p>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  My journey started with my grandmother. When her eyes and memory began to fade 25 years ago, I
                  witnessed my family grapple with one of life's hardest decisions: how to keep her safe while
                  respecting her independence and dignity.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I remember my dad pacing in the driveway, debating with my uncle on the phone about whether she could
                  safely age in place. The most stressful part wasn't the logistics, it was having no one to trust for
                  real, unbiased advice. There were companies trying to sell them solutions, but no one genuinely
                  guiding them.
                </p>
                <p className="text-foreground/80 leading-relaxed clear-left">
                  Today, 25 years later, my grandmother is still safely in her home. But it was hard on everyone. And I
                  watched my own parents face similar challenges. That's when I decided: someone needs to be that
                  trusted guide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#003784" }}>
                  What I Discovered
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Most people over 50 want to age in place, and the technology to make that possible is getting better
                  every year. But here's the hard truth: caring for aging parents can be one of the most confusing,
                  expensive, and emotionally overwhelming experiences of your life.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  To make matters worse, the market is filled with pushy tactics designed to prey on your fears and
                  inexperience. There's "patient steering," hidden conflicts of interest, and companies more interested
                  in selling you something than helping you decide what's actually right for your family.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  When I started researching how to approach my own parents' care, I looked for someone I could
                  trust—someone with real data, who understood the emotions behind this stage of life, and who had no
                  agenda beyond telling me the truth. I couldn't find that person.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#003784" }}>
                  That's Why Caregiving Clarified Exists
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I want to be the trusted resource I wish my family had 25 years ago. My goal is to help you navigate
                  this journey with clarity, not confusion.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  That means testing and researching so <em>you</em> don't have to. I review technology from medical
                  alert systems to smart pill dispensers to home monitoring devices with the rigor of an engineer, not
                  the bias of a salesman.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  But it's more than gadgets. We'll talk about the financial side: Medicaid planning, cost comparisons,
                  insurance. We'll discuss the incredibly difficult family conversations. And we'll address the
                  emotional weight of this journey for both you and your parents.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Everything I share comes with full transparency: my affiliations, my biases, and the real tradeoffs
                  you're facing. Because you deserve clarity, not spin.
                </p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 my-8">
                <p className="text-foreground leading-relaxed italic">
                  "For some of us, our parents were heroes we still look up to. For others, we have strained or
                  complicated relationships. But regardless, I believe this is your chance to be a hero for them. You
                  get to be the one who makes sure your loved ones are safe, supported, and treated with dignity. I
                  think that's really cool. Let's work together to make you the best caregiver and advocate you can be."
                </p>
              </div>

              <div className="text-center pt-8">
                <a
                  href="https://www.youtube.com/@CaregivingClarified"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Watch Videos on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
