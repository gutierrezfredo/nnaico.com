import { useState } from 'react'
import ChatMockup from './ChatMockup'

const capabilities = [
  {
    id: 'memory',
    title: 'Memory',
    description: 'Remembers customer and team details',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5c-2 0-3.5.8-4.2 2.2-.5 1-1.3 1.3-2.3 1.8-1.2.6-2 1.8-2 3.2 0 1.2.6 2.2 1.5 2.8.6.4 1 1 1 1.8 0 1.8 1.2 3.2 3 3.7.8.2 1.2.7 1.5 1.2.2.5.8.8 1.5.8s1.3-.3 1.5-.8c.3-.5.7-1 1.5-1.2 1.8-.5 3-1.9 3-3.7 0-.8.4-1.4 1-1.8.9-.6 1.5-1.6 1.5-2.8 0-1.4-.8-2.6-2-3.2-1-.5-1.8-.8-2.3-1.8-.7-1.4-2.2-2.2-4.2-2.2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9c1 .5 2.5.5 4 0M8 13c1.5 1 3.5 1 5 0" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Customer Info', icon: '👤', bgColor: 'bg-blue-100', active: true },
        { name: 'Team Notes', icon: '📝', bgColor: 'bg-yellow-100', active: false }
      ],
      history: [
        { label: 'VIP preferences', time: 'Just now', active: true },
        { label: 'Allergy notes', time: 'Yesterday', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'The Hendersons are coming in tonight - do we have any notes on them?' },
      { role: 'assistant', text: `Yes! Here's what I have on the Hendersons:

• VIP customers (12 visits this year)
• Mrs. Henderson has a shellfish allergy
• They prefer booth 7 by the window
• Usually order the house red

Last visit: Jan 15 - left a 25% tip for Mike.` },
      { role: 'user', text: 'Great, also note that Mr. Henderson just had a birthday' },
      { role: 'assistant', text: `Got it! I've added:

• Mr. Henderson: Birthday in February

I'll remind you next year. Want me to flag them for a complimentary dessert tonight?` }
    ]
  },
  {
    id: 'charts',
    title: 'Charts',
    description: 'Visualize your sales and performance data',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Analytics', icon: '📊', bgColor: 'bg-indigo-100', active: true },
        { name: 'Sales Data', icon: '💰', bgColor: 'bg-green-100', active: false }
      ],
      history: [
        { label: 'Weekly sales', time: 'Just now', active: true },
        { label: 'Best sellers', time: '2 days ago', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'Show me sales by day of week for this month' },
      { role: 'assistant', text: 'Here\'s your sales by day of week:', hasChart: true },
      { role: 'user', text: 'Why is Tuesday so low?' },
      { role: 'assistant', text: `Looking at the data, Tuesday has:

• 40% less foot traffic than average
• No promotions running
• Competitor runs "Taco Tuesday" specials

Idea: Consider a Tuesday special to boost traffic. Want me to pull what sold best on slower days?` }
    ]
  },
  {
    id: 'export',
    title: 'File Export',
    description: 'Export reports to Excel, PDF, and more',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Reports', icon: '📄', bgColor: 'bg-orange-100', active: true },
        { name: 'Data Export', icon: '📤', bgColor: 'bg-cyan-100', active: false }
      ],
      history: [
        { label: 'Inventory report', time: 'Just now', active: true },
        { label: 'Sales summary', time: 'Last week', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'Export this month\'s inventory report to Excel' },
      { role: 'assistant', text: 'I\'ve generated your Excel file with 234 items and current stock levels.', hasDownload: true },
      { role: 'user', text: 'Can you highlight items running low?' },
      { role: 'assistant', text: `Done! I've added a "Low Stock" column highlighting 12 items below reorder threshold:

• Paper towels (15% remaining)
• Sanitizer (22% remaining)
• Receipt paper (18% remaining)

Want me to auto-generate a reorder list?` }
    ]
  },
  {
    id: 'search',
    title: 'Web Search',
    description: 'Research competitors and suppliers',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Research', icon: '🔍', bgColor: 'bg-sky-100', active: true },
        { name: 'Competitors', icon: '🏪', bgColor: 'bg-gray-100', active: false }
      ],
      history: [
        { label: 'Supplier pricing', time: 'Just now', active: true },
        { label: 'Competitor hours', time: '3 hours ago', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'What are competitors charging for similar services in our area?' },
      { role: 'assistant', text: `I found 4 competitors within 10 miles:

• MainStreet Co: $45-65 (similar quality)
• Budget Place: $30-40 (lower quality)
• Premium Shop: $80-95 (high-end)
• QuickServe: $50-60 (similar to us)

You're priced at $55 avg - right in the middle. Want a detailed breakdown?` },
      { role: 'user', text: 'What about their hours?' },
      { role: 'assistant', text: `Competitor hours:

• MainStreet Co: 9am-7pm (closed Sun)
• Budget Place: 8am-8pm daily
• Premium Shop: 10am-6pm (closed Sun-Mon)
• QuickServe: 7am-9pm daily

You're open 9am-6pm. Extending to 8pm could capture after-work traffic.` }
    ]
  },
  {
    id: 'reports',
    title: 'Reports',
    description: 'See what customers are asking about',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Insights', icon: '💡', bgColor: 'bg-amber-100', active: true },
        { name: 'Feedback', icon: '📈', bgColor: 'bg-teal-100', active: false }
      ],
      history: [
        { label: 'Top questions', time: 'Just now', active: true },
        { label: 'Complaints', time: 'Yesterday', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'What are customers asking about most this week?' },
      { role: 'assistant', text: `Top questions from 89 conversations:

1. "Do you have X in stock?" (34%) ⬆️
2. "What are your hours?" (22%)
3. "Do you offer delivery?" (18%)
4. "Can I return this?" (12%)

Heads up: Stock questions up 50% - might need to update online inventory.` },
      { role: 'user', text: 'Which products are they asking about?' },
      { role: 'assistant', text: `Most asked-about products:

1. Pro Model (out of stock since Tuesday)
2. Starter Bundle (in stock)
3. Accessory Kit (low stock - 3 left)

The Pro Model is driving most "do you have" questions. Restock arriving Thursday.

Want me to draft an auto-reply for Pro Model questions?` }
    ]
  },
  {
    id: 'code',
    title: 'Calculations',
    description: 'Crunch numbers and forecast impact',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Calculator', icon: '🔢', bgColor: 'bg-lime-100', active: true },
        { name: 'Forecasting', icon: '📐', bgColor: 'bg-pink-100', active: false }
      ],
      history: [
        { label: 'Discount impact', time: 'Just now', active: true },
        { label: 'Break-even', time: '2 days ago', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'If I give a 15% discount, how many more units do I need to sell to make the same profit?' },
      { role: 'assistant', text: `Based on your current margins:

• Current: 100 units @ $50 = $2,000 profit
• With 15% off: Need to sell 127 units (+27%)

Break-even point: 127 units at $42.50 each

That's 27 extra sales to make the same money. Worth it for clearing old inventory, risky for regular pricing.` },
      { role: 'user', text: 'What if I do 10% instead?' },
      { role: 'assistant', text: `At 10% discount:

• Need to sell 115 units (+15%)
• Break-even: 115 units at $45 each

That's only 15 extra sales - much more achievable.

Based on last month's traffic, a 10% promo typically boosts sales 20-25%. I'd go with 10%.` }
    ]
  }
]

export default function CapabilitiesShowcase() {
  const [activeTab, setActiveTab] = useState('memory')

  const activeCapability = capabilities.find(c => c.id === activeTab)

  return (
    <section id="demo" className="py-16 md:py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            See What Nnaico Can Do
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            More than just chat — your assistant can take action.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-3 lg:gap-6 items-stretch">
          {/* Mobile: Horizontal scroll tiles */}
          <div className="lg:hidden overflow-hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x overscroll-x-contain scrollbar-hide">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`relative rounded-lg p-3 text-left transition-all flex-shrink-0 w-28 h-24 snap-start border-2 ${
                    activeTab === cap.id
                      ? 'bg-primary-600 border-primary-400'
                      : 'bg-slate-800 border-transparent'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-2 ${
                    activeTab === cap.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-700 text-primary-400'
                  }`}>
                    {cap.icon}
                  </div>
                  <h3 className="text-xs font-bold text-white leading-tight">
                    {cap.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Selection cards grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3 content-start">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`text-left rounded-lg p-4 transition-all ${
                  activeTab === cap.id
                    ? 'bg-primary-600 text-white shadow-lg ring-2 ring-primary-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${
                  activeTab === cap.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-700 text-primary-400'
                }`}>
                  {cap.icon}
                </div>
                <h3 className="text-sm font-bold mb-1">
                  {cap.title}
                </h3>
                <p className={`text-xs ${
                  activeTab === cap.id ? 'text-white/80' : 'text-slate-400'
                }`}>
                  {cap.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Chat Mockup */}
          <div className="lg:sticky lg:top-24 flex flex-col">
            <div
              key={activeTab}
              className="animate-[fadeIn_0.4s_ease-out] flex-1 flex flex-col lg:min-h-[500px]"
            >
              <ChatMockup
                conversation={activeCapability.conversation}
                sidebar={activeCapability.sidebar}
                minimal
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
