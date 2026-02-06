import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-14">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Nnaico"
              className={`h-6 transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Nav Links - Centered absolutely */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <a href="#features" className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>Features</a>
            <a href="#how-it-works" className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>How It Works</a>
            <a href="#pricing" className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}>Pricing</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://insight.nnaico.com"
              className={`hidden sm:inline-block text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              Sign In
            </a>
            <a
              href="https://insight.nnaico.com"
              className="inline-flex items-center justify-center py-2 px-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors text-sm"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
