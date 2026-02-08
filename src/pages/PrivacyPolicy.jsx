import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Nnaico Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Account information (name, email, company name)</li>
              <li>Payment information (processed securely through our payment provider)</li>
              <li>Content you upload to train your AI assistants</li>
              <li>Communications with us (support requests, feedback)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Usage data (features used, interactions with assistants)</li>
              <li>Device information (browser type, operating system)</li>
              <li>Log data (IP address, access times, pages viewed)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>To provide and maintain our services</li>
              <li>To train AI assistants on your uploaded content</li>
              <li>To process payments and send related information</li>
              <li>To respond to your inquiries and provide support</li>
              <li>To improve our services and develop new features</li>
              <li>To send you updates and marketing communications (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your data is stored on Amazon Web Services (AWS) infrastructure with industry-standard security measures, including encryption in transit and at rest. Your uploaded content is stored separately and is not shared with other Nnaico customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For users in the European Union, data may be transferred to and processed in the United States. We rely on AWS's Standard Contractual Clauses and other appropriate safeguards to ensure your data is protected in accordance with GDPR requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Data Is Not Used for Training</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not use your company's data, documents, or queries to train AI models. Your information is used solely to provide our services to you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our AI providers (OpenAI, Anthropic, Google) do not use API data to train their models by default. Data sent through their APIs is processed to generate responses and is not retained for model training purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To provide our AI services, we use the following third-party language model providers:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>OpenAI</strong> - Your queries and relevant content may be sent to OpenAI's API to generate responses. See <a href="https://openai.com/policies/privacy-policy" className="text-primary-600 hover:underline">OpenAI's Privacy Policy</a>.</li>
              <li><strong>Anthropic (Claude)</strong> - Your queries and relevant content may be sent to Anthropic's API. See <a href="https://www.anthropic.com/privacy" className="text-primary-600 hover:underline">Anthropic's Privacy Policy</a>.</li>
              <li><strong>Google (Gemini)</strong> - Your queries and relevant content may be sent to Google's API. See <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline">Google's Privacy Policy</a>.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We also use third-party services for payment processing, analytics, and infrastructure. These providers are bound by their own privacy policies and contractual obligations to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Access</strong> - Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification</strong> - Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure</strong> - Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Data portability</strong> - Export your data in standard formats (original files, JSON, CSV)</li>
              <li><strong>Restriction</strong> - Request we limit how we use your data</li>
              <li><strong>Objection</strong> - Object to processing of your data in certain circumstances</li>
              <li><strong>Marketing opt-out</strong> - Unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To exercise any of these rights, contact us at hello@nnaico.com. We will respond to your request within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For European Union Users (GDPR)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you are located in the EU, you have additional rights under the General Data Protection Regulation (GDPR). We process your data based on the following lawful bases:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li><strong>Contract</strong> - Processing necessary to provide our services to you</li>
              <li><strong>Legitimate interest</strong> - Improving our services and preventing fraud</li>
              <li><strong>Consent</strong> - For marketing communications (you can withdraw at any time)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              You have the right to lodge a complaint with your local data protection authority if you believe we have violated your rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use essential cookies to maintain your session and remember your preferences. We may also use analytics cookies to understand how visitors use our website. You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately and we will delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> hello@nnaico.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
