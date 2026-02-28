'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm">
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
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-brand-silver hover:text-brand-red transition-colors font-medium tracking-wider text-sm">
              ABOUT
            </Link>
            <Link href="/services" className="text-brand-silver hover:text-brand-red transition-colors font-medium tracking-wider text-sm">
              SERVICES
            </Link>
            <Link href="/#portfolio" className="text-brand-silver hover:text-brand-red transition-colors font-medium tracking-wider text-sm">
              PORTFOLIO
            </Link>
            <Link href="/#testimonials" className="text-brand-silver hover:text-brand-red transition-colors font-medium tracking-wider text-sm">
              REVIEWS
            </Link>
            <Link href="/blog" className="text-brand-silver hover:text-brand-red transition-colors font-medium tracking-wider text-sm">
              BLOG
            </Link>
            <Link 
              href="/#contact" 
              className="bg-brand-red text-white px-6 py-3 font-semibold hover:bg-red-500 transition-colors tracking-wider text-sm"
            >
              GET QUOTE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-silver"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-brand-silver/20 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/#about" className="text-brand-silver hover:text-brand-red tracking-wider">ABOUT</Link>
              <Link href="/services" className="text-brand-silver hover:text-brand-red tracking-wider">SERVICES</Link>
              <Link href="/#portfolio" className="text-brand-silver hover:text-brand-red tracking-wider">PORTFOLIO</Link>
              <Link href="/#testimonials" className="text-brand-silver hover:text-brand-red tracking-wider">REVIEWS</Link>
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
