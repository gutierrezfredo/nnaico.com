const leftCards = [
  {
    title: "AI That Actually Knows Your Business",
    description: "Unlike ChatGPT, Nnaico is trained on YOUR documents. Upload manuals, SOPs, FAQs, and product info.",
    borderColor: "border-l-indigo-300",
    bgColor: "bg-gradient-to-tl from-indigo-100 via-white via-70% to-white",
    iconColor: "text-indigo-300",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Your Company's Brain, On Demand",
    description: "Available 24/7 for any employee. No more waiting for \"the person who knows.\"",
    borderColor: "border-l-orange-300",
    bgColor: "bg-gradient-to-tl from-orange-100 via-white via-70% to-white",
    iconColor: "text-orange-300",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
]

const rightCard = {
  title: "From Scattered Docs to Instant Answers",
  description: "No more searching through Drive, Notion, Slack, and email. One place to ask anything.",
  iconColor: "text-sky-300",
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
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
                className={`${card.bgColor} rounded-lg p-8 md:p-10 border-l-4 ${card.borderColor} shadow-[0_8px_40px_rgba(0,0,0,0.06)] relative overflow-hidden`}
              >
                {/* Decorative background icon */}
                <div className={`absolute right-4 bottom-4 ${card.iconColor} opacity-50 pointer-events-none`}>
                  {card.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - contrast card */}
          <div className="bg-gradient-to-tl from-sky-200 via-white via-60% to-white rounded-lg p-8 md:p-10 flex flex-col justify-between h-full border-l-4 border-l-sky-200 shadow-[0_8px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            {/* Decorative background icon */}
            <div className={`absolute right-4 bottom-4 ${rightCard.iconColor} opacity-50 pointer-events-none`}>
              {rightCard.icon}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {rightCard.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {rightCard.description}
              </p>
            </div>

            {/* Chat input */}
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm mt-8 relative z-10">
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <span className="text-sm text-gray-600 flex-1">Your company's brain, one question away...</span>
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
