import { Link } from 'react-router-dom'
import Cal from '@calcom/embed-react'

const expectations = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    text: "Discuss the challenges you're looking to solve"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "Get a live demo of how Nnaico can help"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    text: "Plan next steps like a pilot with your team"
  }
]

const stats = [
  { value: '+80%', label: 'Faster answers for employees' },
  { value: '10x', label: 'Faster onboarding process' }
]

const clients = [
  { name: 'Racing Force Group', logo: '/images/racing-force-group-logo.png' },
  { name: 'Bell Helmets', logo: '/logos/bell-helmets.png' },
  { name: 'OMP Racing', logo: '/logos/omp.png' },
  { name: 'SeedTrust Escrow', logo: '/logos/seedtrust.png' }
]

export default function BookDemo() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 bg-white px-8 py-12 lg:px-20 lg:py-16 flex flex-col items-center lg:min-h-screen">
        {/* Logo - fixed at top */}
        <div className="mb-8 w-full max-w-lg">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="Nnaico" className="h-6" />
          </Link>
        </div>

        {/* Main content - centered vertically and horizontally */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-lg">
          {/* Badge */}
          <span className="inline-block text-xs font-medium text-gray-500 uppercase tracking-wide border border-gray-300 rounded px-3 py-1 mb-8 w-fit">
            Meet with our team
          </span>

          {/* Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 leading-tight">
            What you can expect from the first meeting
          </h1>

          {/* Expectations list */}
          <ul className="space-y-6 mb-12">
            {expectations.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-gray-400 mt-0.5">{item.icon}</span>
                <span className="text-gray-600">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-lg px-6 py-5 flex-1">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client logos - fixed at bottom */}
        <div className="pt-12 w-full max-w-lg">
          <div className="flex items-center justify-center gap-8">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className={`object-contain grayscale ${client.name === 'OMP Racing' || client.name === 'Racing Force Group' ? 'opacity-100' : 'opacity-40'} ${client.name === 'Racing Force Group' ? 'h-5' : 'h-8'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Calendar with background */}
      <div className="w-full lg:w-1/2 relative lg:h-screen lg:sticky lg:top-0">
        {/* Background image */}
        <img
          src="/images/step-3-ocean.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />

        {/* Cal.com embed */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px] lg:h-screen p-6 lg:p-12">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <Cal
              calLink="nnaico/30min"
              config={{
                theme: 'light',
                hideEventTypeDetails: true,
              }}
              style={{ width: '100%', height: '650px', overflow: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
