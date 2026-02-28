'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white">
              <div className="text-xs tracking-widest border border-white px-2 py-1">
                <span className="font-heading font-bold">UPFIELD</span>
                <br />
                <span className="text-[8px]">LANDSCAPES</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-white hover:text-brand-red transition-colors font-medium">
              ABOUT
            </Link>
            <Link href="/services" className="text-white hover:text-brand-red transition-colors font-medium">
              SERVICES
            </Link>
            <Link href="/#portfolio" className="text-white hover:text-brand-red transition-colors font-medium">
              PORTFOLIO
            </Link>
            <Link href="/#testimonials" className="text-white hover:text-brand-red transition-colors font-medium">
              REVIEWS
            </Link>
            <Link 
              href="/#contact" 
              className="bg-brand-red text-white px-6 py-3 font-semibold hover:bg-red-600 transition-colors"
            >
              GET QUOTE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/#about" className="text-white hover:text-brand-red">ABOUT</Link>
              <Link href="/services" className="text-white hover:text-brand-red">SERVICES</Link>
              <Link href="/#portfolio" className="text-white hover:text-brand-red">PORTFOLIO</Link>
              <Link href="/#testimonials" className="text-white hover:text-brand-red">REVIEWS</Link>
              <Link href="/#contact" className="bg-brand-red text-white px-6 py-3 text-center font-semibold">
                GET QUOTE
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
