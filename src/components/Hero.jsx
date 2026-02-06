import { useState, useEffect, useRef } from 'react'
import { FloatingShapes } from './ui/ElegantShapes'

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

// Component to animate words appearing
function AnimatedText({ text, isFirstLine }) {
  const [visibleWords, setVisibleWords] = useState(0)
  const words = text.split(/(\s+)/) // Split but keep whitespace

  useEffect(() => {
    setVisibleWords(0)
    const totalWords = words.filter(w => w.trim()).length
    let currentWord = 0

    const interval = setInterval(() => {
      currentWord++
      setVisibleWords(currentWord)
      if (currentWord >= totalWords) {
        clearInterval(interval)
      }
    }, 30) // Speed of word appearance

    return () => clearInterval(interval)
  }, [text])

  let wordIndex = 0
  return (
    <span className={isFirstLine ? 'font-semibold' : ''}>
      {words.map((word, i) => {
        if (!word.trim()) {
          // It's whitespace, render as-is
          return <span key={i}>{word}</span>
        }
        const currentWordIndex = wordIndex
        wordIndex++
        return (
          <span
            key={i}
            className="inline-block transition-all duration-200"
            style={{
              opacity: currentWordIndex < visibleWords ? 1 : 0,
              transform: currentWordIndex < visibleWords ? 'translateY(0)' : 'translateY(4px)',
            }}
          >
            {word}
          </span>
        )
      })}
    </span>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const touchStartX = useRef(0)
  const pendingIndex = useRef(null)

  const currentConvo = conversations[activeIndex]

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
  }

  const changeConversation = (newIndex) => {
    if (isExiting) return
    setIsExiting(true)
    pendingIndex.current = newIndex
    setTimeout(() => {
      setActiveIndex(newIndex)
      setIsExiting(false)
    }, 300)
  }

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % conversations.length
    changeConversation(newIndex)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToPrev = () => {
    const newIndex = (activeIndex - 1 + conversations.length) % conversations.length
    changeConversation(newIndex)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToIndex = (index) => {
    if (index === activeIndex) return
    changeConversation(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  // Handle typing animation when conversation changes
  useEffect(() => {
    setIsTyping(true)
    setShowAnswer(false)

    // Show typing indicator after question appears
    const typingTimer = setTimeout(() => {
      setIsTyping(false)
      setShowAnswer(true)
    }, 1000)

    return () => clearTimeout(typingTimer)
  }, [activeIndex])

  // Auto-rotate conversations
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % conversations.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950">
      {/* Floating shapes background */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 pt-32 md:pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Every Answer Your Team<br />
              Needs, <span className="text-primary-600 italic">Instantly</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Train AI on your company's knowledge. Give your team instant answers to any question.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center py-2 px-4 md:py-3 md:px-6 text-sm md:text-base border-2 border-slate-500 text-white font-semibold rounded-full hover:bg-slate-700 hover:border-slate-400 transition-colors"
              >
                Learn more
              </a>
              <a
                href="https://insight.nnaico.com"
                className="inline-flex items-center justify-center gap-2 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
              >
                Start free trial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Mockup - extends beyond hero into next section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-24">
        <div className="relative">
          {/* Subtle shadow behind */}
          <div className="absolute -inset-4 bg-primary-200/30 rounded-3xl blur-3xl" />

          {/* Navigation arrows - hidden on mobile */}
          <button
            onClick={goToPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Conversation label - above chat on mobile */}
          <div className="flex md:hidden justify-center mb-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-200 bg-primary-900/50 px-3 py-1.5 rounded-full border border-primary-700/30">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              {currentConvo.label}
            </span>
          </div>

          {/* Chat frame mockup */}
          <div
            className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200 relative flex"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sidebar - hidden on mobile */}
            <div className="hidden md:flex flex-col w-56 border-r border-gray-200 bg-gray-50/80">
              {/* Sidebar header */}
              <div className="p-3 border-b border-gray-200">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 w-full px-2 py-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Chat
                </button>
              </div>

              {/* Assistants section */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Assistants</span>
                  <span className="text-xs text-gray-400">Manage</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gray-200/80 text-sm">
                    <span className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-xs">💬</span>
                    <span className="text-gray-900 font-medium">Acme Support</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                    <span className="w-5 h-5 rounded bg-green-100 flex items-center justify-center text-xs">⚡</span>
                    <span className="text-gray-600">Sales Helper</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                    <span className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center text-xs">📚</span>
                    <span className="text-gray-600">HR Assistant</span>
                  </div>
                </div>
              </div>

              {/* History section */}
              <div className="p-3 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">History</span>
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="space-y-0.5 text-sm">
                  <div className="px-2 py-1.5 rounded-lg bg-gray-200/80">
                    <p className="text-gray-900 font-medium truncate text-xs">{currentConvo.label}</p>
                    <p className="text-gray-400 text-xs">Just now</p>
                  </div>
                  <div className="px-2 py-1.5 rounded-lg hover:bg-gray-100">
                    <p className="text-gray-600 truncate text-xs">Refund policy question</p>
                    <p className="text-gray-400 text-xs">2 hours ago</p>
                  </div>
                  <div className="px-2 py-1.5 rounded-lg hover:bg-gray-100">
                    <p className="text-gray-600 truncate text-xs">Vendor contracts</p>
                    <p className="text-gray-400 text-xs">Yesterday</p>
                  </div>
                </div>
              </div>

              {/* User */}
              <div className="p-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-medium">A</div>
                  <span className="text-sm text-gray-700">Admin</span>
                </div>
              </div>
            </div>

            {/* Chat content */}
            <div className="flex-1 flex flex-col p-4 md:p-5 lg:p-6 bg-white">
              {/* Messages area */}
              <div
                key={activeIndex}
                className={`flex-1 min-h-[380px] md:min-h-[440px] space-y-4 md:space-y-6 ${isExiting ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : ''}`}
              >
                {/* User message */}
                <div
                  className="flex justify-end animate-[fadeIn_0.4s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: '0s' }}
                >
                  <div className="max-w-[85%] md:max-w-[75%] bg-gray-100 rounded-3xl px-4 py-3 md:px-5 md:py-3">
                    <p className="text-sm md:text-base text-gray-900">{currentConvo.user}</p>
                  </div>
                </div>

                {/* Assistant message */}
                <div
                  className="flex justify-start animate-[fadeIn_0.4s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="max-w-[95%] md:max-w-[90%]">
                    {isTyping ? (
                      <div className="flex items-center gap-1 py-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    ) : (
                      <div className="text-sm md:text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {currentConvo.assistant.split('\n').map((line, lineIndex) => (
                          <span key={lineIndex}>
                            {lineIndex > 0 && '\n'}
                            <AnimatedText text={line} isFirstLine={lineIndex === 0} />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="flex mt-auto pt-2 items-center gap-2 bg-white rounded-full px-3 py-2 border border-gray-200 shadow-sm">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <span className="text-sm text-gray-400 flex-1">Type your message...</span>
                <button className="hidden md:block text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-orange-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Conversation indicators */}
          <div className="flex justify-center gap-2 mt-4 pb-4">
            {conversations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary-400 w-6' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
