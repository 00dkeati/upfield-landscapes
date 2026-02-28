'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Upfield Landscapes" 
              width={180} 
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/#about" className="text-white hover:text-brand-red transition-colors font-medium tracking-wider">
              ABOUT
            </Link>
            <Link href="/services" className="text-white hover:text-brand-red transition-colors font-medium tracking-wider">
              SERVICES
            </Link>
            <Link href="/#portfolio" className="text-white hover:text-brand-red transition-colors font-medium tracking-wider">
              PORTFOLIO
            </Link>
            <Link href="/#testimonials" className="text-white hover:text-brand-red transition-colors font-medium tracking-wider">
              REVIEWS
            </Link>
            <Link 
              href="/#contact" 
              className="bg-brand-red text-white px-6 py-3 font-semibold hover:bg-red-500 transition-colors tracking-wider"
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
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 bg-black/90">
            <div className="flex flex-col gap-4">
              <Link href="/#about" className="text-white hover:text-brand-red tracking-wider">ABOUT</Link>
              <Link href="/services" className="text-white hover:text-brand-red tracking-wider">SERVICES</Link>
              <Link href="/#portfolio" className="text-white hover:text-brand-red tracking-wider">PORTFOLIO</Link>
              <Link href="/#testimonials" className="text-white hover:text-brand-red tracking-wider">REVIEWS</Link>
              <Link href="/#contact" className="bg-brand-red text-white px-6 py-3 text-center font-semibold tracking-wider">
                GET QUOTE
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
