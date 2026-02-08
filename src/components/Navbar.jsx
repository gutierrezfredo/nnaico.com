import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-14">
          {/* Left: Mobile menu toggle + Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 -ml-2 rounded transition-colors ${
                scrolled || mobileMenuOpen ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
              }`}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Nnaico"
                className={`h-6 transition-all duration-300 ${
                  scrolled || mobileMenuOpen ? '' : 'brightness-0 invert'
                }`}
              />
            </Link>
          </div>

          {/* Nav Links - Centered absolutely (desktop) */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className={`text-sm font-medium transition-colors ${
              isActive('/')
                ? (scrolled ? 'text-primary-600' : 'text-white')
                : (scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white')
            }`}>Product</Link>
            <Link to="/pricing" className={`text-sm font-medium transition-colors ${
              isActive('/pricing')
                ? (scrolled ? 'text-primary-600' : 'text-white')
                : (scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white')
            }`}>Pricing</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${
              isActive('/about')
                ? (scrolled ? 'text-primary-600' : 'text-white')
                : (scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white')
            }`}>About</Link>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://insight.nnaico.com"
              className={`hidden md:inline-flex items-center justify-center py-2 px-4 text-sm font-semibold rounded-md transition-colors ${
                scrolled || mobileMenuOpen
                  ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </a>
            {/* Mobile: Sign In button */}
            <a
              href="https://insight.nnaico.com"
              className={`md:hidden inline-flex items-center justify-center py-2 px-4 text-sm font-semibold rounded-md transition-colors ${
                scrolled || mobileMenuOpen
                  ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </a>
            <Link
              to="/demo"
              className="hidden md:inline-flex items-center justify-center py-2 px-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors text-sm"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={handleLinkClick}
                className={`text-sm font-medium py-2 ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Product
              </Link>
              <Link
                to="/pricing"
                onClick={handleLinkClick}
                className={`text-sm font-medium py-2 ${
                  isActive('/pricing') ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`text-sm font-medium py-2 ${
                  isActive('/about') ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <a
                href="https://insight.nnaico.com"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
