import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FloatingShapes } from './ui/ElegantShapes'

const assistants = [
  {
    id: 'training',
    name: 'Team Training',
    icon: '📚',
    bgColor: 'bg-purple-100',
    conversations: [
      {
        label: "New hire question",
        user: "It's my first day - what's the opening procedure?",
        assistant: `Welcome to the team! Here's the opening checklist:

1. Arrive 15 min before shift
2. Clock in at the back terminal
3. Check the daily notes board
4. Restock supplies if needed
5. Unlock front door at 9am sharp

Pro tip: Maria usually opens Mon/Wed - she's great to shadow.

Want me to send you the full training guide?`
      },
      {
        label: "Process question",
        user: "How do I process a return without a receipt?",
        assistant: `For returns without receipt:

1. Ask for ID (required)
2. Look up purchase in system by card or phone
3. If found: process normal return
4. If not found: store credit only, max $50

Manager approval needed if:
• Item over $100
• Customer disputes policy

The full return policy is in the Staff Handbook, Section 4.`
      },
      {
        label: "Equipment help",
        user: "The POS system is showing an error - what do I do?",
        assistant: `For POS errors, try this first:

1. Note the error code (take a photo)
2. Press Cancel and retry the transaction
3. If still failing: restart terminal (hold power 10 sec)

Common fixes:
• "Connection error" → check WiFi on back screen
• "Card read fail" → clean the chip reader

Still stuck? Call tech support: 555-0123 (open 24/7)`
      }
    ]
  },
  {
    id: 'sales',
    name: 'Sales Insights',
    icon: '📊',
    bgColor: 'bg-green-100',
    conversations: [
      {
        label: "Performance check",
        user: "How are we doing on sales this month?",
        assistant: `Here's your February snapshot:

• Revenue: $142k (89% of $160k target)
• Deals closed: 23
• Avg deal size: $6,174
• Top seller: Sarah - $48k closed

You're $18k short with 8 days left. The Acme Corp deal ($12k) should close this week.

Want to see the full pipeline breakdown?`
      },
      {
        label: "Product insights",
        user: "What products are selling best this quarter?",
        assistant: `Top 5 products in Q1:

1. Pro Bundle - $89k (142 units)
2. Starter Kit - $52k (312 units)
3. Enterprise License - $45k (9 deals)
4. Add-on Pack - $28k (89 units)
5. Training Package - $18k (23 sold)

Pro Bundle is up 34% from last quarter. Starter Kit has the highest volume but lowest margin.

Want me to compare this to Q4?`
      },
      {
        label: "Team performance",
        user: "Which sales reps are behind target?",
        assistant: `Reps below 80% of target:

• Jason M. - 62% ($31k of $50k)
  → Low activity: only 12 calls this week
• Maria L. - 74% ($37k of $50k)
  → Pipeline is healthy, deals stuck in negotiation

Top performers (over 100%):
• Sarah T. - 128% ($48k)
• David R. - 108% ($43k)

I'd check in with Jason - his activity dropped after the team meeting.`
      }
    ]
  },
  {
    id: 'support',
    name: 'Customer Support',
    icon: '💬',
    bgColor: 'bg-blue-100',
    conversations: [
      {
        label: "Product question",
        user: "Customer asking if the Pro model works with their setup",
        assistant: `The Pro model is compatible with:

✓ All standard mounts (2019+)
✓ Both 110V and 220V power
✓ iOS and Android apps
✗ NOT compatible with legacy Gen 1 systems

If they have Gen 1, offer the adapter kit ($29) or trade-in discount.

Want me to pull up the full compatibility chart?`
      },
      {
        label: "Policy question",
        user: "What's our warranty policy? Customer's unit stopped working.",
        assistant: `Warranty coverage:

• 1 year standard (from purchase date)
• 2 years if registered within 30 days
• Covers defects, NOT physical damage

For warranty claims:
1. Get their order # or serial number
2. Create ticket in the support portal
3. We ship replacement within 3-5 days

Out of warranty? Offer 20% off replacement.`
      },
      {
        label: "Complaint handling",
        user: "Angry customer says they've been waiting 2 weeks for their order",
        assistant: `For delayed orders:

1. Apologize sincerely (don't make excuses)
2. Look up order status in the system
3. If shipping issue: offer to reship priority (free)
4. Offer 15% off next order as goodwill

If order is lost:
• Full refund OR immediate reship
• Add $10 credit to their account

Log all complaints in the feedback tracker.`
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
                className={`flex-1 min-h-[420px] md:min-h-[500px] space-y-4 md:space-y-6 ${isExiting ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : ''}`}
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
