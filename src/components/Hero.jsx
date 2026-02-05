import { useState, useEffect } from 'react'

const conversations = [
  {
    label: "Knowledge Bottleneck",
    user: "Who handles vendor contracts and what's the approval process?",
    assistant: `Sarah Chen in Operations handles all vendor contracts.

Approval process:
1. Submit Vendor Request Form
2. Sarah reviews within 48 hours
3. Legal review if contract > $10k
4. Finance approval for budget

Need the request form? I can send you the link.`
  },
  {
    label: "New Employee Onboarding",
    user: "I'm new here - how do I submit expense reports?",
    assistant: `Welcome to the team! Here's how to submit expenses:

1. Log into Workday (HR portal)
2. Go to Expenses > Create Report
3. Upload receipts (photo or PDF)
4. Select expense category
5. Submit for manager approval

Tip: Submit within 30 days of purchase. Need the Workday link?`
  },
  {
    label: "Sales Enablement",
    user: "Prospect asked why we're better than CompetitorX - quick talking points?",
    assistant: `Key differentiators vs CompetitorX:

✓ Unlimited users (they charge per seat)
✓ Self-hosted option (they're cloud-only)
✓ Custom AI training (they use generic models)
✓ 99.9% uptime SLA (they offer 99.5%)

Price comparison: We're $150/mo vs their $200/mo

Want the full battlecard PDF?`
  },
  {
    label: "Instant Support",
    user: "What's our refund policy for enterprise customers?",
    assistant: `Enterprise refund policy:

• 30-day money-back guarantee (no questions)
• Pro-rated refunds after 30 days
• Annual contracts: refund unused months
• Setup fees are non-refundable

For refunds over $5k, loop in finance@acme.com

Source: Enterprise Terms (updated Jan 2026)`
  }
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentConvo = conversations[activeIndex]

  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % conversations.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-rotate after 10s
  }

  const goToPrev = () => {
    setActiveIndex(prev => (prev - 1 + conversations.length) % conversations.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToIndex = (index) => {
    setActiveIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  // Auto-rotate conversations
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % conversations.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100/50 to-amber-100/30">
      {/* Content */}
      <div className="pt-32 pb-14 md:pt-40 md:pb-20 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Every Answer Your Team<br />
              Needs, <span className="text-primary-600 italic">Instantly</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Train AI on your company's knowledge. Give your team instant answers to any question.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center py-3 px-6 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-white hover:border-gray-400 transition-colors"
              >
                Learn more
              </a>
              <a
                href="https://insight.nnaico.com"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
              >
                Start free trial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Mockup */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative">
          {/* Subtle shadow behind */}
          <div className="absolute -inset-4 bg-primary-200/30 rounded-3xl blur-3xl" />

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Chat frame mockup */}
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-200 relative">
            {/* Conversation label */}
            <div className="absolute top-4 left-6 z-10">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                {currentConvo.label}
              </span>
            </div>

            {/* Chat content */}
            <div className="p-8 md:p-10 pt-14 bg-gradient-to-b from-gray-50 to-white">
              {/* Messages area */}
              <div key={activeIndex} className="min-h-[400px] space-y-6 animate-[fadeIn_0.5s_ease-out]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[75%] bg-primary-600 rounded-2xl rounded-tr-sm px-6 py-4 shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
                    <p className="text-sm text-white font-medium">{currentConvo.user}</p>
                  </div>
                </div>

                {/* Assistant message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl rounded-tl-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                      <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                        {currentConvo.assistant}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="mt-6 flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm text-gray-400 flex-1">Ask anything about your company...</span>
                <div className="w-8 h-8 rounded-lg bg-gray-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Conversation indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {conversations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
