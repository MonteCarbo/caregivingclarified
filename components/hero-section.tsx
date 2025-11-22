import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  DollarSign,
  Users,
  Heart,
  BookOpen,
  Shield,
  AlertCircle,
  BarChart3,
  Handshake,
  CheckCircle,
} from "lucide-react"

interface ActionCard {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const actionCards: ActionCard[] = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Cost Calculator",
    description: "Aging in Place vs. Assisted Living comparison",
    href: "/tools/cost-calculator",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Protect Assets from Care Costs",
    description: "Medicaid planning made simple",
    href: "/financial-planning",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Have the Difficult Conversation",
    description: "Scripts and strategies for family talks",
    href: "/support",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Evaluate Senior Living Facilities",
    description: "Quality metrics that matter",
    href: "/senior-living",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Get Caregiver Support",
    description: "Tools and community for your wellbeing",
    href: "/caregiver-resources",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Access Our Resources",
    description: "Videos, templates, and tools",
    href: "/resources",
  },
]

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ backgroundColor: "#003784" }}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigate Caregiving with Confidence
            </h1>
            <p className="text-lg md:text-xl text-white max-w-5xl mx-auto mb-8 leading-normal text-center">
              At Caregiving Clarified, we believe that the basis of good decisions is good information. We focus on
              unbiased research and clear communication to save you time and help you make the best decisions for your
              family.
            </p>
          </div>

          <div className="mb-10 px-4 max-w-7xl mx-auto flex justify-center">
            <div className="flex items-start gap-2 max-w-7xl">
              <AlertCircle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-100">
                This website is an early stage work in progress. We're building something important. Thanks for being
                here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionCards.map((card, index) => (
              <Link key={index} href={card.href} className="group">
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 group-hover:bg-amber-400 transition-all">
                      <div className="text-amber-500 group-hover:text-white">{card.icon}</div>
                    </div>
                    <CardTitle className="text-lg text-foreground">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#003784" }}
            >
              Why Caregiving Clarified?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              You're not just looking for advice. You need someone who understands both the numbers and the emotions of
              caring for aging parents while protecting your own future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100">
                  <BarChart3 className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#003784" }}>
                  Rigorous Data
                </h3>
                <p className="text-slate-600">
                  We test, compare, and model the real costs of aging in place versus senior living facilities. No
                  guessing. You get the actual numbers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100">
                  <Handshake className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#003784" }}>
                  Honest Guidance
                </h3>
                <p className="text-slate-600">
                  We disclose our affiliates. We acknowledge conflicts of interest. We tell you what we don't know. Your
                  trust is more valuable than any commission.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#003784" }}>
                  Understand the Struggle
                </h3>
                <p className="text-slate-600">
                  The guilt. The fear. The impossible choices between your parents' needs and your retirement. We get
                  it. You're not alone in this.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#003784" }}>
                  Decisions Made Clear
                </h3>
                <p className="text-slate-600">
                  You don't want more information. You want a decision. We help you cut through the noise and find the
                  path forward for your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
