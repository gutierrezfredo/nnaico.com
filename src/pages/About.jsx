import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 pt-32 md:pt-40 pb-16 md:pb-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            About Nnaico
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            We build custom AI agents that help businesses work smarter and faster.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We are a team of engineers, designers, and marketers with years of expertise in machine learning. Instead of offering rigid software that requires businesses to adjust their operations, we deliver consultation services to implement scalable AI agents.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach ensures that rather than forcing your processes and data to fit into predefined software, our AI agents tailor their functionality to meet your specific needs, fostering a progressive approach to enhancing business efficiency.
            </p>
          </div>

          {/* Photos side by side */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src="/images/team-1.jpg"
              alt="Nnaico team collaborating"
              className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
            />
            <img
              src="/images/team-2.jpg"
              alt="Nnaico team meeting"
              className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We don't sell rigid software solutions. We work with each company to understand their unique challenges and build AI agents tailored to their specific needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Consolidation</h3>
              <p className="text-gray-600">We connect your docs, tools, and institutional knowledge into a single AI-powered source of truth.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Answers</h3>
              <p className="text-gray-600">Your team gets accurate answers in seconds, not hours of searching or waiting for the right person.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Private & Secure</h3>
              <p className="text-gray-600">Your data stays yours. We offer on-premises deployment options for companies with strict security requirements.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Training</h3>
              <p className="text-gray-600">We train your AI on your specific terminology, processes, and use cases—not generic data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Interested in how AI can help your business? We'd love to learn about your challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center py-3 px-6 bg-white text-primary-700 font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a demo
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:hello@nnaico.com"
              className="inline-flex items-center justify-center py-3 px-6 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              hello@nnaico.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
