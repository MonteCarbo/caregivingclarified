import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Caregiving Clarified",
  description: "Privacy policy for Caregiving Clarified",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-primary mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p>
              At Caregiving Clarified, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              and protect your information.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p>
                We may collect information about you in various ways, including information you voluntarily provide
                through forms, emails, or when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, respond to your
                inquiries, and communicate with you about updates or changes to our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. If you have
                questions about your privacy or our practices, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please reach out through
                our website.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
