import { useState } from 'react'
import ChatMockup from './ChatMockup'

const useCases = [
  {
    id: 'onboarding',
    title: "Employee Onboarding",
    problem: "New hires take weeks to learn your processes",
    solution: "Upload your procedures. New hires ask the AI instead of interrupting.",
    outcome: "Productive in days, not months. Senior staff get their time back.",
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
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'sales',
    title: "Sales Enablement",
    problem: "Your sales team can't find product info fast enough",
    solution: "Instant access to specs, pricing, competitive intel",
    outcome: "Faster responses, more closed deals, consistent messaging.",
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
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 'knowledge',
    title: "Internal Knowledge Base",
    problem: "Information trapped in docs nobody reads",
    solution: "One AI that knows everything about your company",
    outcome: "Any employee, any question, instant answer.",
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
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'support',
    title: "Customer Support",
    problem: "Your team answers the same 20 questions daily",
    solution: "AI assistant trained on your FAQs, policies, and products",
    outcome: "Customers get instant answers. Your team handles real issues.",
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
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
]

export default function UseCases() {
  const [activeCase, setActiveCase] = useState('onboarding')

  const activeUseCase = useCases.find(uc => uc.id === activeCase)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for How You Actually Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real solutions to real problems your company faces every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Selection cards */}
          <div className="space-y-3">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveCase(useCase.id)}
                className={`w-full text-left rounded-xl p-5 transition-all ${
                  activeCase === useCase.id
                    ? 'bg-white shadow-lg ring-2 ring-primary-500'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 ${
                    activeCase === useCase.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    {useCase.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-600">{useCase.problem}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Chat Mockup */}
          <div className="lg:sticky lg:top-24">
            <ChatMockup conversation={activeUseCase.conversation} minimal />
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Outcome</p>
                  <p className="text-sm text-green-900">{activeUseCase.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
