import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '$150',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      '3 assistants',
      '10 users',
      'All tools included',
      'Priority support'
    ],
    cta: 'Book a demo',
    popular: false
  },
  {
    name: 'Growth',
    price: '$250',
    period: '/month',
    description: 'For growing companies with more needs',
    features: [
      '10 assistants',
      '50 users',
      'All tools included',
      'Priority support',
      'Advanced analytics'
    ],
    cta: 'Book a demo',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited assistants',
      'Unlimited users',
      'Self-hosted option',
      'Priority support',
      'Custom integrations',
      'SLA guarantee'
    ],
    cta: 'Contact Us',
    popular: false
  }
]

const tools = [
  { name: 'Memory', description: 'Remember customer preferences and team context' },
  { name: 'Charts', description: 'Visualize sales and performance data' },
  { name: 'File Export', description: 'Export reports to Excel, PDF, and more' },
  { name: 'Web Search', description: 'Research competitors and suppliers' },
  { name: 'Reports', description: 'See what customers are asking about' },
  { name: 'Calculations', description: 'Crunch numbers and forecast impact' }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-[#ECF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple Pricing. Powerful Results.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free, upgrade when you're ready. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg p-8 flex flex-col bg-white border border-gray-200 relative"
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900">
                {plan.name}
              </h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">
                  {plan.period}
                </span>
              </div>
              <p className="text-sm mb-6 text-gray-600">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full text-center py-3 px-4 rounded-md font-semibold transition-colors bg-primary-600 text-white hover:bg-primary-700"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* What are assistants */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              What are Assistants?
            </h3>
            <p className="text-gray-600 mb-6">
              Assistants are AI-powered specialists trained on your company's knowledge. Each assistant can be customized for a specific role or department:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📚</span>
                <div>
                  <p className="font-medium text-gray-900">Training Assistant</p>
                  <p className="text-sm text-gray-500">Onboard new hires with company SOPs and procedures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-medium text-gray-900">Customer Support</p>
                  <p className="text-sm text-gray-500">Answer customer questions 24/7 on your website</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <p className="font-medium text-gray-900">Sales Insights</p>
                  <p className="text-sm text-gray-500">Connect to your CRM for instant performance reports</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📖</span>
                <div>
                  <p className="font-medium text-gray-900">Knowledge Base</p>
                  <p className="text-sm text-gray-500">Instant answers from your docs, manuals, and FAQs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools included */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Tools Included in All Plans
            </h3>
            <p className="text-gray-600 mb-6">
              Every assistant has access to powerful tools that go beyond simple chat:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">{tool.name}</p>
                    <p className="text-sm text-gray-500">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          All plans include: Priority support, admin dashboard, and website embedding.
        </p>
      </div>
    </section>
  )
}
