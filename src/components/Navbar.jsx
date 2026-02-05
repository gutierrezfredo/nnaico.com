export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-xl z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-14">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Nnaico" className="h-6" />
          </a>

          {/* Nav Links - Centered absolutely */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://insight.nnaico.com"
              className="hidden sm:inline-block text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Sign In
            </a>
            <a
              href="https://insight.nnaico.com"
              className="inline-flex items-center justify-center px-4 py-1.5 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-colors text-sm"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
