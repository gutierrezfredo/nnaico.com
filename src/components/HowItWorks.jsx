import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Animated upload illustration component
function UploadAnimation() {
  const [showUploaded, setShowUploaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowUploaded(prev => !prev)
    }, showUploaded ? 5000 : 2000) // 5s on documents, 2s on upload
    return () => clearTimeout(timeout)
  }, [showUploaded])

  const uploadedDocs = [
    { name: 'Employee Handbook.pdf', icon: '📘' },
    { name: 'Expense Policy.pdf', icon: '📄' },
    { name: 'IT Setup Guide.pdf', icon: '💻' },
    { name: 'PTO & Leave Policy.pdf', icon: '📋' },
    { name: 'Benefits Overview.pdf', icon: '🏥' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="w-full max-w-[320px] bg-white rounded-lg shadow-lg overflow-hidden relative transition-all duration-500" style={{ minHeight: showUploaded ? '270px' : '220px' }}>
        {/* Upload zone - Frame 1 */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            showUploaded
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'opacity-100 scale-100'
          }`}
        >
          <div className="border-2 border-dashed border-primary-300 rounded-lg flex flex-col items-center justify-center m-3 py-7">
            <svg className="w-14 h-14 text-primary-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm text-gray-500">Drop files here</p>
            <p className="text-sm text-primary-600 font-semibold">or Upload</p>
          </div>
        </div>

        {/* Uploaded files - Frame 2 */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            showUploaded
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              5 files uploaded
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {uploadedDocs.map((doc, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2.5 transition-all duration-500 ${
                  showUploaded
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: showUploaded ? `${i * 100}ms` : '0ms' }}
              >
                <span className="text-lg">{doc.icon}</span>
                <span className="text-sm text-gray-700 truncate">{doc.name}</span>
                <svg className="w-4 h-4 text-green-500 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Assistants list component with scroll animation
function AssistantsIllustration() {
  const assistants = [
    { name: 'HR Assistant', icon: '👥', bgColor: 'bg-purple-100' },
    { name: 'IT Support', icon: '💻', bgColor: 'bg-blue-100' },
    { name: 'Sales Coach', icon: '📈', bgColor: 'bg-green-100' },
    { name: 'Onboarding Guide', icon: '🎯', bgColor: 'bg-orange-100' },
    { name: 'Customer Support', icon: '💬', bgColor: 'bg-cyan-100' },
    { name: 'Legal Assistant', icon: '⚖️', bgColor: 'bg-slate-100' },
    { name: 'Finance Helper', icon: '💰', bgColor: 'bg-emerald-100' },
    { name: 'Training Bot', icon: '📚', bgColor: 'bg-rose-100' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="w-full max-w-[320px] bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '270px' }}>
        <div className="p-3 border-b border-gray-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">Your Assistants</span>
          <span className="text-xs text-gray-400">{assistants.length} active</span>
        </div>
        <div className="h-[225px] overflow-hidden relative">
          {/* Fade overlays */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="animate-[scrollUp_25s_linear_infinite]">
            {[...assistants, ...assistants].map((assistant, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-3 border-b border-gray-50"
              >
                <div className={`w-9 h-9 rounded-lg ${assistant.bgColor} flex items-center justify-center text-lg`}>
                  {assistant.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{assistant.name}</p>
                </div>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  )
}

// Animated chat illustration component
function ChatAnimation() {
  const [conversationIndex, setConversationIndex] = useState(0)
  const [showTyping, setShowTyping] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const [visibleWords, setVisibleWords] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const conversations = [
    {
      user: "How do I submit expenses?",
      assistant: "Log into Workday, go to Expenses > Create Report, upload receipts, and submit for approval."
    },
    {
      user: "What's our PTO policy?",
      assistant: "You get 20 days PTO annually. Submit requests in Workday at least 2 weeks ahead for trips over 5 days."
    },
    {
      user: "Who handles vendor contracts?",
      assistant: "Sarah Chen in Operations. Submit a Vendor Request Form and she'll review within 48 hours."
    }
  ]

  const currentConvo = conversations[conversationIndex]
  const answerWords = currentConvo.assistant.split(' ')

  // Handle conversation cycling and animation
  useEffect(() => {
    setShowTyping(true)
    setShowAnswer(false)
    setVisibleWords(0)
    setIsExiting(false)

    // Show typing for 1.5s, then start showing answer
    const typingTimer = setTimeout(() => {
      setShowTyping(false)
      setShowAnswer(true)
    }, 1500)

    return () => clearTimeout(typingTimer)
  }, [conversationIndex])

  // Word-by-word animation for answer
  useEffect(() => {
    if (!showAnswer) return

    if (visibleWords < answerWords.length) {
      const wordTimer = setTimeout(() => {
        setVisibleWords(prev => prev + 1)
      }, 50)
      return () => clearTimeout(wordTimer)
    } else {
      // All words shown, wait then trigger exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
        // After exit animation, go to next conversation
        setTimeout(() => {
          setConversationIndex(prev => (prev + 1) % conversations.length)
        }, 400)
      }, 4000)
      return () => clearTimeout(exitTimer)
    }
  }, [showAnswer, visibleWords, answerWords.length])

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="w-full max-w-[320px] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden flex flex-col" style={{ height: '270px' }}>
        <div className="flex-1 p-4 overflow-hidden">
          <div
            key={conversationIndex}
            className={`space-y-3 transition-all duration-400 ${
              isExiting
                ? 'opacity-0 -translate-x-4'
                : 'opacity-100 translate-x-0 animate-[slideIn_0.4s_ease-out]'
            }`}
          >
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-gray-100 rounded-lg rounded-tr-sm px-3 py-2 text-sm text-gray-700 max-w-[85%]">
                {currentConvo.user}
              </div>
            </div>

            {/* Assistant message */}
            <div className="min-h-[60px]">
              {showTyping ? (
                <div className="flex gap-1.5 py-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
              ) : (
                <p className="text-sm text-gray-700 leading-relaxed">
                  {answerWords.map((word, i) => (
                    <span
                      key={i}
                      className="inline transition-all duration-150"
                      style={{
                        opacity: i < visibleWords ? 1 : 0,
                      }}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mock input field */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
            <span className="text-xs text-gray-400 flex-1">Ask anything...</span>
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

const steps = [
  {
    number: "01",
    title: "Upload Your Knowledge",
    description: "Add your documents, procedures, FAQs, and company info. Drag and drop — we handle the rest.",
    image: "/images/step-1-sky.jpg",
    illustration: <UploadAnimation />
  },
  {
    number: "02",
    title: "Create Your Assistants",
    description: "Build specialized assistants for support, sales, training. Give each one a name and personality.",
    image: "/images/step-2-forest.jpg",
    illustration: <AssistantsIllustration />
  },
  {
    number: "03",
    title: "Start Asking",
    description: "Your team gets instant answers. Embed on your website for customers. Watch productivity soar.",
    image: "/images/step-3-ocean.jpg",
    illustration: <ChatAnimation />
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-[#ECF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Up and Running in Minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No complex setup. No coding required. Just results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Illustration card */}
              <div className="relative rounded-lg h-72 mb-6 overflow-hidden">
                <img
                  src={step.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
                />
                <div className="relative z-10 h-full">
                  {step.illustration}
                </div>
              </div>

              {/* Text content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
          >
            Book a demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
