export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Ready to Give Your Team Superpowers?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Join companies using Nnaico to answer questions instantly, train employees faster, and delight customers.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://insight.nnaico.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
