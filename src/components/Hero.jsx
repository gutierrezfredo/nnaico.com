import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FloatingShapes } from './ui/ElegantShapes'

const assistants = [
  {
    id: 'support',
    name: 'Acme Support',
    icon: '💬',
    bgColor: 'bg-blue-100',
    conversations: [
      {
        label: "Vendor contracts",
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
        label: "Refund policy",
        user: "What's our refund policy for enterprise customers?",
        assistant: `Enterprise refund policy:

• 30-day money-back guarantee (no questions)
• Pro-rated refunds after 30 days
• Annual contracts: refund unused months
• Setup fees are non-refundable

For refunds over $5k, loop in finance@acme.com

Source: Enterprise Terms (updated Jan 2026)`
      },
      {
        label: "Password reset",
        user: "How do I reset my company email password?",
        assistant: `To reset your email password:

1. Go to portal.acme.com/reset
2. Enter your work email
3. Check for reset link (also check spam)
4. Create new password (min 12 chars)

If locked out, contact IT at it-help@acme.com or ext. 4357.`
      }
    ]
  },
  {
    id: 'sales',
    name: 'Sales Helper',
    icon: '⚡',
    bgColor: 'bg-green-100',
    conversations: [
      {
        label: "CompetitorX comparison",
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
        label: "Enterprise pricing",
        user: "Client asking for enterprise discount - what can we offer?",
        assistant: `Enterprise discount guidelines:

• 10-49 seats: 10% off annual
• 50-99 seats: 15% off annual
• 100+ seats: 20% off + dedicated CSM

For deals over $50k ARR, you can also offer:
• Free onboarding ($2k value)
• Extended trial (30 days)

Need VP approval for anything beyond this.`
      },
      {
        label: "Case study request",
        user: "Do we have a case study for fintech companies?",
        assistant: `Yes! We have 2 fintech case studies:

1. PayFlow Inc - 40% faster onboarding
2. TrustBank - $200k saved in support costs

Both are in the Sales Drive under Case Studies > Fintech.

Want me to send you the links or draft an intro email for your prospect?`
      }
    ]
  },
  {
    id: 'hr',
    name: 'HR Assistant',
    icon: '📚',
    bgColor: 'bg-purple-100',
    conversations: [
      {
        label: "Expense reports",
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
        label: "PTO balance",
        user: "How many PTO days do I have left this year?",
        assistant: `You can check your PTO balance in Workday:

1. Log in to workday.acme.com
2. Go to Time Off > My Balance

Quick note: Unused PTO rolls over up to 5 days. Use-it-or-lose-it deadline is Dec 31.

Want me to show you how to request time off?`
      },
      {
        label: "Benefits enrollment",
        user: "When is open enrollment and what are my options?",
        assistant: `Open enrollment runs Nov 1-15.

Your options:
• Health: PPO, HMO, or HDHP with HSA
• Dental: Basic or Premium
• Vision: Optional add-on ($8/mo)
• 401k: Up to 6% match

New this year: Mental health stipend ($500/yr)

I can send you the full benefits guide!`
      }
    ]
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
  const [activeAssistantIndex, setActiveAssistantIndex] = useState(0)
  const [activeConvoIndex, setActiveConvoIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const touchStartX = useRef(0)

  const currentAssistant = assistants[activeAssistantIndex]
  const currentConvo = currentAssistant.conversations[activeConvoIndex]

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

  const changeConversation = (assistantIdx, convoIdx) => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setActiveAssistantIndex(assistantIdx)
      setActiveConvoIndex(convoIdx)
      setIsExiting(false)
    }, 300)
  }

  const goToNext = () => {
    let newAssistantIdx = activeAssistantIndex
    let newConvoIdx = activeConvoIndex + 1

    // If we've gone past the last conversation in this assistant, move to next assistant
    if (newConvoIdx >= currentAssistant.conversations.length) {
      newAssistantIdx = (activeAssistantIndex + 1) % assistants.length
      newConvoIdx = 0
    }

    changeConversation(newAssistantIdx, newConvoIdx)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToPrev = () => {
    let newAssistantIdx = activeAssistantIndex
    let newConvoIdx = activeConvoIndex - 1

    // If we've gone before the first conversation, move to previous assistant
    if (newConvoIdx < 0) {
      newAssistantIdx = (activeAssistantIndex - 1 + assistants.length) % assistants.length
      newConvoIdx = assistants[newAssistantIdx].conversations.length - 1
    }

    changeConversation(newAssistantIdx, newConvoIdx)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToAssistant = (assistantIdx) => {
    if (assistantIdx === activeAssistantIndex) return
    changeConversation(assistantIdx, 0)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToConvo = (convoIdx) => {
    if (convoIdx === activeConvoIndex) return
    changeConversation(activeAssistantIndex, convoIdx)
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
  }, [activeAssistantIndex, activeConvoIndex])

  // Auto-rotate conversations
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      goToNext()
    }, 10000)

    return () => clearInterval(timer)
  }, [isPaused, activeAssistantIndex, activeConvoIndex])

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
            <div className="mt-8 flex flex-row gap-3 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center py-2 px-4 md:py-3 md:px-6 text-sm md:text-base border border-slate-500 text-white font-semibold rounded-md hover:bg-slate-700 hover:border-slate-400 transition-colors"
              >
                Learn more
              </a>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
              >
                Book a demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
                      </div>
        </div>
      </div>

      {/* Chat Mockup - extends beyond hero into next section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-24">
        <div className="relative">
          {/* Subtle shadow behind */}
          <div className="absolute -inset-4 bg-primary-200/30 rounded-lg blur-3xl" />

          {/* Navigation arrows - hidden on mobile */}
          <button
            onClick={goToPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Conversation label - above chat on mobile */}
          <div className="flex md:hidden justify-center mb-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-200 bg-primary-900/50 px-3 py-1.5 rounded-md border border-primary-700/30">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              {currentConvo.label}
            </span>
          </div>

          {/* Chat frame mockup */}
          <div
            className="bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200 relative flex"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sidebar - hidden on mobile */}
            <div className="hidden md:flex flex-col w-56 border-r border-gray-200 bg-gray-100">
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
                  {assistants.map((ast, astIndex) => {
                    const isActive = astIndex === activeAssistantIndex
                    return (
                      <button
                        key={ast.id}
                        onClick={() => goToAssistant(astIndex)}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors w-full text-left ${
                          isActive
                            ? 'bg-blue-100 text-blue-900'
                            : 'hover:bg-gray-200/60 cursor-pointer'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded ${ast.bgColor} flex items-center justify-center text-xs`}>{ast.icon}</span>
                        <span className={isActive ? 'text-gray-900 font-medium' : 'text-gray-600'}>
                          {ast.name}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* History section - shows conversations for current assistant */}
              <div className="p-3 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">History</span>
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="space-y-0.5 text-sm">
                  {currentAssistant.conversations.map((convo, index) => {
                    const isActive = index === activeConvoIndex
                    const timeLabels = ['Just now', '2 hours ago', 'Yesterday']
                    return (
                      <button
                        key={convo.label}
                        onClick={() => goToConvo(index)}
                        className={`px-2 py-1.5 rounded w-full text-left transition-colors ${
                          isActive ? 'bg-gray-200/80' : 'hover:bg-gray-200/60 cursor-pointer'
                        }`}
                      >
                        <p className={`truncate text-xs ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                          {convo.label}
                        </p>
                        <p className="text-gray-400 text-xs">{timeLabels[index]}</p>
                      </button>
                    )
                  })}
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
                key={`${activeAssistantIndex}-${activeConvoIndex}`}
                className={`flex-1 min-h-[380px] md:min-h-[440px] space-y-4 md:space-y-6 ${isExiting ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : ''}`}
              >
                {/* User message */}
                <div
                  className="flex justify-end animate-[fadeIn_0.4s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: '0s' }}
                >
                  <div className="max-w-[85%] md:max-w-[75%] bg-gray-100 rounded-lg px-4 py-3 md:px-5 md:py-3">
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
              <div className="flex mt-auto pt-2 items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 shadow-sm">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <span className="text-sm text-gray-400 flex-1">Ask anything...</span>
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

          {/* Conversation indicators - grouped by assistant */}
          <div className="flex justify-center gap-4 mt-4 pb-4">
            {assistants.map((ast, astIndex) => (
              <div key={ast.id} className="flex items-center gap-1">
                {ast.conversations.map((_, convoIndex) => (
                  <button
                    key={convoIndex}
                    onClick={() => {
                      if (astIndex === activeAssistantIndex) {
                        goToConvo(convoIndex)
                      } else {
                        changeConversation(astIndex, convoIndex)
                        setIsPaused(true)
                        setTimeout(() => setIsPaused(false), 10000)
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      astIndex === activeAssistantIndex && convoIndex === activeConvoIndex
                        ? 'bg-primary-400 w-6'
                        : astIndex === activeAssistantIndex
                          ? 'bg-primary-300 hover:bg-primary-400'
                          : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
