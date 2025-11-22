import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Caregiving Clarified",
  description: "Terms of Service for Caregiving Clarified",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-primary mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p>
              Welcome to Caregiving Clarified. By using our website and services, you agree to comply with these Terms
              of Service.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Caregiving Clarified's website for personal, non-commercial transitory viewing only. This is the grant
                of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <p>
                The materials on Caregiving Clarified's website are provided on an "as is" basis. We make no warranties,
                expressed or implied, and hereby disclaim and negate all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitations</h2>
              <p>
                In no event shall Caregiving Clarified or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Caregiving Clarified's website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Accuracy of Materials</h2>
              <p>
                The materials appearing on Caregiving Clarified's website could include technical, typographical, or
                photographic errors. We do not warrant that any of the materials on our website are accurate, complete,
                or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Modifications</h2>
              <p>
                We may revise these terms of service for our website at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
