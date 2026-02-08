import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Ready to Give Your Team Superpowers?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Join companies using Nnaico to answer questions instantly, train employees faster, and delight customers.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center py-3 px-6 bg-white text-primary-700 font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book a demo
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
