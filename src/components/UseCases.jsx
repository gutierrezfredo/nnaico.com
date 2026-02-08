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
        { name: 'HR Assistant', icon: '📚', bgColor: 'bg-purple-100', active: true },
        { name: 'IT Help', icon: '💻', bgColor: 'bg-blue-100', active: false }
      ],
      history: [
        { label: 'Expense reports', time: 'Just now', active: true },
        { label: 'Benefits enrollment', time: '2 hours ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "I'm new here - how do I submit expense reports?"
      },
      {
        role: 'assistant',
        text: `Welcome to the team! Here's how to submit expenses:

1. Log into Workday (HR portal)
2. Go to Expenses > Create Report
3. Upload receipts (photo or PDF)
4. Select expense category
5. Submit for manager approval

Tip: Submit within 30 days of purchase.
Need the Workday login link?`
      },
      {
        role: 'user',
        text: "Yes please, and who approves my expenses?"
      },
      {
        role: 'assistant',
        text: `Here's your Workday link: workday.acme.com

Your expense approver is Lisa Chen (your direct manager). She typically approves within 48 hours.

I've also sent you the full Expense Policy PDF to your email!`
      }
    ]
  },
  {
    id: 'sales',
    title: "Sales Enablement",
    description: "Close deals faster with instant intel",
    gradient: "from-cyan-400 to-blue-500",
    image: "/images/use-case-sales.png",
    sidebar: {
      assistants: [
        { name: 'Sales Helper', icon: '⚡', bgColor: 'bg-green-100', active: true },
        { name: 'Product Info', icon: '📦', bgColor: 'bg-orange-100', active: false }
      ],
      history: [
        { label: 'Pricing comparison', time: 'Just now', active: true },
        { label: 'Case studies', time: '1 hour ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "What's our pricing vs CompetitorX?"
      },
      {
        role: 'assistant',
        text: `Here's the comparison:

Nnaico vs CompetitorX:
• Base price: $150 vs $200/mo
• Users included: Unlimited vs 10 users
• Storage: 1GB vs 500MB
• Self-hosted option: Yes vs No

Key differentiator: We don't charge per user.
Want the full competitive battlecard?`
      },
      {
        role: 'user',
        text: "Yes, send me the battlecard"
      },
      {
        role: 'assistant',
        text: `Done! I've sent the CompetitorX Battlecard to your email (sarah@acme.com).

It includes objection handling and customer win stories.

Good luck with the pitch! Let me know how it goes.`
      }
    ]
  },
  {
    id: 'knowledge',
    title: "Knowledge Base",
    description: "Any question, instant answer",
    gradient: "from-emerald-400 to-teal-500",
    image: "/images/use-case-knowledge.png",
    sidebar: {
      assistants: [
        { name: 'Company Wiki', icon: '📖', bgColor: 'bg-emerald-100', active: true },
        { name: 'Policy Guide', icon: '📋', bgColor: 'bg-gray-100', active: false }
      ],
      history: [
        { label: 'PTO request', time: 'Just now', active: true },
        { label: 'Meeting rooms', time: '3 hours ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "What's the process for requesting PTO?"
      },
      {
        role: 'assistant',
        text: `Here's the PTO request process:

1. Submit in Workday (HR > Time Off)
2. Select PTO type and dates
3. Manager approves within 48 hours
4. Calendar blocks automatically

Reminder: Submit 2+ weeks ahead for trips over 5 days.
Current PTO balance: Check Workday dashboard.`
      },
      {
        role: 'user',
        text: "Can you submit PTO for next Friday?"
      },
      {
        role: 'assistant',
        text: `Done! I've submitted a PTO request for Friday, Feb 14th.

Your manager (David) will be notified and typically approves within 24 hours.

I'll let you know once it's approved!`
      }
    ]
  },
  {
    id: 'support',
    title: "Customer Support",
    description: "Instant answers for customers",
    gradient: "from-violet-400 to-purple-500",
    image: "/images/use-case-support.png",
    sidebar: {
      assistants: [
        { name: 'Support Bot', icon: '💬', bgColor: 'bg-violet-100', active: true },
        { name: 'Returns', icon: '↩️', bgColor: 'bg-red-100', active: false }
      ],
      history: [
        { label: 'Return policy', time: 'Just now', active: true },
        { label: 'Shipping info', time: '30 min ago', active: false }
      ]
    },
    conversation: [
      {
        role: 'user',
        text: "What's your return policy for opened items?"
      },
      {
        role: 'assistant',
        text: `For opened items, here's our policy:

• Electronics: 14-day return, must be in original packaging
• Clothing: 30-day return, unworn with tags
• Food items: Non-returnable once opened

Would you like me to start a return for you?`
      },
      {
        role: 'user',
        text: "Yes, start the return please"
      },
      {
        role: 'assistant',
        text: `Done! Return #4521 has been created.

A shipping label has been sent to your email. Just drop it off at any UPS location within 7 days.

Anything else I can help with?`
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

        <div className="grid lg:grid-cols-[500px_1fr] gap-6 items-stretch">
          {/* Left: Image selection tiles */}
          <div className="grid grid-cols-2 gap-4 content-start">
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
