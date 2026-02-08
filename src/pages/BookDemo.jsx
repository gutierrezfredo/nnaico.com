import { useState } from 'react'
import { Link } from 'react-router-dom'

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
  { name: 'Racing Force Group', logo: '/logos/rfg.png' },
  { name: 'SeedTrust Escrow', logo: '/logos/seedtrust.png' }
]

const howDidYouHearOptions = [
  'Please select...',
  'Google Search',
  'LinkedIn',
  'Referral',
  'Social Media',
  'Other'
]

export default function BookDemo() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    howDidYouHear: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 bg-white px-6 py-12 lg:px-16 lg:py-16 flex flex-col">
        {/* Logo */}
        <Link to="/" className="mb-12 lg:mb-16">
          <img src="/logo.png" alt="Nnaico" className="h-6" />
        </Link>

        {/* Badge */}
        <span className="inline-block text-xs font-medium text-gray-500 uppercase tracking-wide border border-gray-300 rounded px-3 py-1 mb-6 w-fit">
          Meet with our team
        </span>

        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
          What you can expect from the first meeting
        </h1>

        {/* Expectations list */}
        <ul className="space-y-5 mb-12">
          {expectations.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="text-gray-400">{item.icon}</span>
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Stats */}
        <div className="flex gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-100 rounded-lg px-6 py-5 flex-1">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-auto">
          <div className="flex items-center gap-8">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-8 object-contain grayscale opacity-60"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form with background */}
      <div className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-screen">
        {/* Background image */}
        <img
          src="/images/step-3-ocean.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />

        {/* Form card */}
        <div className="relative z-10 flex items-center justify-center h-full p-6 lg:p-16">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-10 lg:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600 mb-6">We'll be in touch within 24 hours to schedule your demo.</p>
                <Link
                  to="/"
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Back to homepage
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white text-gray-700"
                  >
                    {howDidYouHearOptions.map((option) => (
                      <option key={option} value={option === 'Please select...' ? '' : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center">
                  By proceeding, I agree to Nnaico's{' '}
                  <a href="#" className="text-gray-700 underline">Terms of Use</a>
                  {' '}and acknowledge that I have read the{' '}
                  <a href="#" className="text-gray-700 underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
