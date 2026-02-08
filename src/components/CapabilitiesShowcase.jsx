import { useState } from 'react'
import ChatMockup from './ChatMockup'

const capabilities = [
  {
    id: 'memory',
    title: 'Memory',
    description: 'Remembers important details across conversations',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Scheduler', icon: '📅', bgColor: 'bg-blue-100', active: true },
        { name: 'Notes', icon: '📝', bgColor: 'bg-yellow-100', active: false }
      ],
      history: [
        { label: 'Team preferences', time: 'Just now', active: true },
        { label: 'Meeting notes', time: 'Yesterday', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'Remember that Sarah prefers morning meetings and John is out every Friday' },
      { role: 'assistant', text: `Got it! I've saved these preferences:

• Sarah: Prefers morning meetings
• John: Out every Friday

I'll keep these in mind for scheduling.` },
      { role: 'user', text: 'Schedule a team sync with Sarah and John' },
      { role: 'assistant', text: `Based on their preferences, I suggest:

Tuesday 9:30 AM — Works for Sarah (morning) and John (not Friday).

Want me to send the calendar invite?` }
    ]
  },
  {
    id: 'charts',
    title: 'Charts',
    description: 'Generate visual data representations instantly',
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
        { label: 'Sales by region', time: 'Just now', active: true },
        { label: 'Q4 metrics', time: '2 days ago', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'Show me our sales by region as a chart' },
      { role: 'assistant', text: 'Here\'s your sales breakdown by region:', hasChart: true },
      { role: 'user', text: 'Which region needs attention?' },
      { role: 'assistant', text: `South region is underperforming at 45% of target.

I can pull the South team's pipeline report or schedule a review with the regional manager. What would help?` }
    ]
  },
  {
    id: 'export',
    title: 'File Export',
    description: 'Export data to Excel, PDF, and more',
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
        { label: 'Support tickets', time: 'Just now', active: true },
        { label: 'Monthly report', time: 'Last week', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'Export last month\'s support tickets to Excel' },
      { role: 'assistant', text: 'I\'ve generated your Excel file with 147 support tickets from January 2026.', hasDownload: true },
      { role: 'user', text: 'Can you also send this to the support team?' },
      { role: 'assistant', text: `Done! I've emailed the report to support-team@acme.com.

I can also set this up as a weekly automated report. Want me to schedule it?` }
    ]
  },
  {
    id: 'search',
    title: 'Web Search',
    description: 'Search the web for real-time information',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Research', icon: '🔍', bgColor: 'bg-sky-100', active: true },
        { name: 'News Feed', icon: '📰', bgColor: 'bg-gray-100', active: false }
      ],
      history: [
        { label: 'AI trends', time: 'Just now', active: true },
        { label: 'Market analysis', time: '3 hours ago', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'What are the latest industry trends in AI customer service?' },
      { role: 'assistant', text: `Based on recent articles and reports:

• 67% of customers prefer AI for simple inquiries (Gartner, Jan 2026)
• Voice AI adoption up 40% year-over-year
• Top trend: Hybrid AI + human handoff models

Want me to compile a summary report for your team?` },
      { role: 'user', text: 'Yes, include competitor moves too' },
      { role: 'assistant', text: `I'm compiling the report now with:

• Industry trends & statistics
• Competitor AI initiatives
• Recommended action items

I'll have it in your inbox within 10 minutes.` }
    ]
  },
  {
    id: 'reports',
    title: 'Reports',
    description: 'Get insights on what your customers are asking',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    sidebar: {
      assistants: [
        { name: 'Insights', icon: '💡', bgColor: 'bg-amber-100', active: true },
        { name: 'Dashboard', icon: '📈', bgColor: 'bg-teal-100', active: false }
      ],
      history: [
        { label: 'Weekly topics', time: 'Just now', active: true },
        { label: 'Customer feedback', time: 'Yesterday', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'What are customers asking about most this week?' },
      { role: 'assistant', text: `Top topics from 312 conversations this week:

1. Shipping delays (23%) ⬆️ +40%
2. Return policy (18%)
3. Product availability (15%)
4. Pricing questions (12%)

Alert: Shipping delays spiked Tuesday after the warehouse issue.` },
      { role: 'user', text: 'Draft a response for the shipping delays' },
      { role: 'assistant', text: `Here's a suggested response:

"We're experiencing 2-3 day delays due to high demand. Your order is on track for delivery by [date]. Track it here: [link]"

Want me to update all pending shipping inquiries with this message?` }
    ]
  },
  {
    id: 'code',
    title: 'Calculations',
    description: 'Run complex calculations and process data',
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
        { label: 'Price impact', time: 'Just now', active: true },
        { label: 'Revenue model', time: '2 days ago', active: false }
      ]
    },
    conversation: [
      { role: 'user', text: 'If we increase prices by 15%, what\'s the impact on revenue assuming 10% customer churn?' },
      { role: 'assistant', text: `Running the calculation with your current data...

Current monthly revenue: $850,000
After 15% price increase: $977,500
After 10% churn: $879,750

Net impact: +$29,750/month (+3.5%)

The price increase outweighs the churn. Want a breakdown by customer segment?` }
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

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-stretch">
          {/* Left: Selection cards */}
          <div className="grid grid-cols-2 gap-3 content-start">
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
