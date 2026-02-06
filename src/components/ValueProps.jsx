const leftCards = [
  {
    title: "AI That Actually Knows Your Business",
    description: "Unlike ChatGPT, Nnaico is trained on YOUR documents. Upload manuals, SOPs, FAQs, and product info.",
    borderColor: "border-l-indigo-300",
    bgColor: "bg-gradient-to-tl from-indigo-100 via-white via-70% to-white"
  },
  {
    title: "Your Company's Brain, On Demand",
    description: "Available 24/7 for any employee. No more waiting for \"the person who knows.\"",
    borderColor: "border-l-orange-300",
    bgColor: "bg-gradient-to-tl from-orange-100 via-white via-70% to-white"
  }
]

const rightCard = {
  title: "From Scattered Docs to Instant Answers",
  description: "No more searching through Drive, Notion, Slack, and email. One place to ask anything.",
  image: null // placeholder for future image
}

export default function ValueProps() {
  return (
    <section className="pt-40 md:pt-48 lg:pt-56 pb-16 md:pb-24 lg:pb-32 bg-[#ECF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Teams Choose Nnaico
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your company's knowledge, instantly accessible to your team.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column - two stacked cards */}
          <div className="flex flex-col gap-6">
            {leftCards.map((card) => (
              <div
                key={card.title}
                className={`${card.bgColor} rounded-3xl p-8 md:p-10 border-l-4 ${card.borderColor} shadow-[0_8px_40px_rgba(0,0,0,0.06)]`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right column - contrast card */}
          <div className="bg-gradient-to-tl from-sky-200 via-white via-60% to-white rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full border-l-4 border-l-sky-200 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {rightCard.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {rightCard.description}
              </p>
            </div>

            {/* Chat input */}
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 border border-gray-200 shadow-sm mt-8">
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <span className="text-sm text-gray-400 flex-1">Your company's brain, one question away...</span>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-orange-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
