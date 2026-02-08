import { useState } from 'react'
import ChatMockup from './ChatMockup'

const useCases = [
  {
    id: 'onboarding',
    title: "Employee Onboarding",
    description: "New hires productive in days",
    gradient: "from-blue-400 to-indigo-500",
    sidebar: {
      assistants: [
        { name: 'Team Training', icon: '📚', bgColor: 'bg-purple-100', active: true },
        { name: 'IT Help', icon: '💻', bgColor: 'bg-blue-100', active: false }
      ],
      history: [
        { label: 'Opening procedures', time: 'Just now', active: true },
        { label: 'Clock in help', time: '2 hours ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "It's my first day - what do I need to do before we open?"
      },
      {
        role: 'assistant',
        text: `Welcome to the team! Here's the opening checklist:

1. Arrive 15 min before your shift
2. Clock in at the back terminal
3. Check the daily notes board
4. Restock supplies if running low
5. Unlock the front door at 9am

Pro tip: Ask Maria if you need help - she usually opens.`
      },
      {
        role: 'user',
        text: "Where do I find the daily notes board?"
      },
      {
        role: 'assistant',
        text: `The daily notes board is in the break room, on the wall next to the schedule.

It has updates from management, any specials for the day, and things to watch out for.

I can also send you reminders each morning if you'd like!`
      }
    ]
  },
  {
    id: 'sales',
    title: "Sales Insights",
    description: "Your CRM data, in plain English",
    gradient: "from-cyan-400 to-blue-500",
    image: "/images/use-case-sales.png",
    sidebar: {
      assistants: [
        { name: 'Sales Intel', icon: '📊', bgColor: 'bg-green-100', active: true },
        { name: 'CRM Helper', icon: '💼', bgColor: 'bg-orange-100', active: false }
      ],
      history: [
        { label: 'Q1 performance', time: 'Just now', active: true },
        { label: 'Pipeline review', time: '1 hour ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "What's our sales performance looking like this month?"
      },
      {
        role: 'assistant',
        text: `Here's your February snapshot:

• Revenue: $142k (89% of target)
• Deals closed: 23
• Pipeline: $380k in active opportunities
• Top performer: Sarah - $48k closed

You're $18k short of target with 8 days left. Want me to show deals likely to close this week?`
      },
      {
        role: 'user',
        text: "Yes, and which deals are at risk?"
      },
      {
        role: 'assistant',
        text: `Deals likely to close this week:
• Acme Corp - $12k (contract sent)
• TechStart - $8k (verbal yes)

At-risk deals:
• BuildRight - $15k (no response in 14 days)
• DataFlow - $9k (asked for discount)

I'd prioritize following up with BuildRight today - that could make your month.`
      }
    ]
  },
  {
    id: 'knowledge',
    title: "Instant Answers",
    description: "No more hunting for info",
    gradient: "from-emerald-400 to-teal-500",
    image: "/images/use-case-knowledge.png",
    sidebar: {
      assistants: [
        { name: 'Company Guide', icon: '📖', bgColor: 'bg-emerald-100', active: true },
        { name: 'Policies', icon: '📋', bgColor: 'bg-gray-100', active: false }
      ],
      history: [
        { label: 'Return process', time: 'Just now', active: true },
        { label: 'Discount rules', time: '3 hours ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "Customer wants to return something without a receipt. What do I do?"
      },
      {
        role: 'assistant',
        text: `For returns without receipt:

1. Ask for their ID (required)
2. Look up purchase by card or phone number
3. If found: process normal return
4. If not found: store credit only, max $50

Need manager approval if item is over $100.`
      },
      {
        role: 'user',
        text: "They're upset about the $50 limit. Can I make an exception?"
      },
      {
        role: 'assistant',
        text: `For exceptions over $50:

• Call the manager on duty for approval
• They can authorize up to $100 for store credit
• Document the exception in the return notes

Tip: Offer to look up their purchase history - sometimes we can find it with their name.`
      }
    ]
  },
  {
    id: 'support',
    title: "Customer Support",
    description: "Answer customers 24/7",
    gradient: "from-violet-400 to-purple-500",
    image: "/images/use-case-support.png",
    sidebar: {
      assistants: [
        { name: 'Support', icon: '💬', bgColor: 'bg-violet-100', active: true },
        { name: 'Products', icon: '📦', bgColor: 'bg-red-100', active: false }
      ],
      history: [
        { label: 'Order status', time: 'Just now', active: true },
        { label: 'Product question', time: '30 min ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "Hi, I ordered last week and haven't received anything yet"
      },
      {
        role: 'assistant',
        text: `I'm sorry about the delay! Let me help.

Could you share your order number? It starts with # and is in your confirmation email.

Or I can look it up with the email address you used to order.`
      },
      {
        role: 'user',
        text: "It's order #4521"
      },
      {
        role: 'assistant',
        text: `Found it! Order #4521 shipped on Monday and is currently in transit.

Tracking shows delivery expected tomorrow by 6pm.

Here's your tracking link: track.carrier.com/4521

Want me to send you text updates when it's out for delivery?`
      }
    ]
  }
]

export default function UseCases() {
  const [activeCase, setActiveCase] = useState('onboarding')

  const activeUseCase = useCases.find(uc => uc.id === activeCase)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for How You Actually Work
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Real solutions to real problems your company faces every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[500px_1fr] gap-3 lg:gap-6 items-stretch">
          {/* Mobile: Horizontal scroll tiles */}
          <div className="lg:hidden overflow-hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x overscroll-x-contain scrollbar-hide">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase.id)}
                  className={`relative rounded-lg p-3 text-left transition-all overflow-hidden flex-shrink-0 w-36 h-28 snap-start border-2 ${
                    activeCase === useCase.id
                      ? 'border-primary-500'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={useCase.image || "/images/use-cases-bg.avif"}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {activeCase === useCase.id && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-50`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {useCase.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Image selection tiles */}
          <div className="hidden lg:grid grid-cols-2 gap-4 content-start">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveCase(useCase.id)}
                className={`relative rounded-lg p-4 text-left transition-all overflow-hidden aspect-[3/4] ${
                  activeCase === useCase.id
                    ? 'ring-2 ring-primary-500 ring-offset-2'
                    : 'hover:ring-2 hover:ring-gray-300'
                }`}
              >
                {/* Background image */}
                <img
                  src={useCase.image || "/images/use-cases-bg.avif"}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Color overlay for active tile */}
                {activeCase === useCase.id && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-50`} />
                )}

                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Text content at bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <h3 className="text-xl font-bold text-white leading-tight drop-shadow-sm">
                    {useCase.title}
                  </h3>
                  <p className="text-base text-white/90 mt-2 drop-shadow-sm">
                    {useCase.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Chat Mockup */}
          <div className="lg:sticky lg:top-24 flex flex-col">
            <div
              key={activeCase}
              className="animate-[fadeIn_0.4s_ease-out] flex-1 flex flex-col"
            >
              <ChatMockup conversation={activeUseCase.conversation} sidebar={activeUseCase.sidebar} minimal className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
