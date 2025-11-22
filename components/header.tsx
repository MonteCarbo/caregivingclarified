"use client"

import { useState } from "react"
import { ChevronDown, Youtube, Menu, X } from "lucide-react"
import Link from "next/link"

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  items: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: "Tools",
    items: [{ label: "Cost Calculator", href: "/tools/cost-calculator" }],
  },
  {
    label: "About Us",
    items: [{ label: "Meet Ethan Carbo", href: "/about" }],
  },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold whitespace-nowrap"
              style={{ fontFamily: "'Playfair Display', serif", color: "#003784" }}
            >
              Caregiving Clarified
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {item.label}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform flex-shrink-0" />
                </button>

                {/* Dropdown Menu */}
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className={`absolute left-0 mt-0 w-56 bg-card rounded-lg shadow-lg border border-border overflow-hidden z-50 transition-all duration-200 ${
                    openDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {item.items.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Right side: YouTube and CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@CaregivingClarified"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-foreground hover:text-red-500 transition-colors"
              aria-label="YouTube channel"
            >
              <Youtube size={20} />
            </a>
            <Link
              href="/get-started"
              className="hidden sm:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium whitespace-nowrap"
            >
              Get Started
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <h3 className="px-4 py-2 font-medium text-foreground">{item.label}</h3>
                <div className="pl-4">
                  {item.items.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-slate-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
