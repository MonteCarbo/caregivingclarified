import Link from "next/link"
import { Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Caregiving Clarified</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              A trusted guide to senior care, aging in place, and family finances. Real data. Real talk. Real help.
            </p>
            <a
              href="https://www.youtube.com/@CaregivingClarified"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Youtube size={18} />
              <span className="text-sm font-medium">Watch on YouTube</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/tools/cost-calculator" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  About Ethan
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Mission */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Mission</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Bridge the trust gap in senior care by providing rigorous data, clear communication, and honest guidance
              for the Sandwich Generation.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>&copy; 2025 Caregiving Clarified. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
