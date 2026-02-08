import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Terms of Service
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Nnaico's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Nnaico provides AI-powered assistant services that allow businesses to create custom AI agents trained on their own data. Our services include document processing, AI training, and assistant deployment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Registration</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must notify us immediately of any unauthorized access to your account</li>
              <li>You must be at least 18 years old to use our services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Upload content that infringes on intellectual property rights</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to generate harmful, misleading, or deceptive content</li>
              <li>Resell or redistribute our services without authorization</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Content</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You retain ownership of all content you upload to train your AI assistants. By uploading content, you grant us a license to process and use that content solely for the purpose of providing our services to you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for ensuring you have the right to upload and use any content you provide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI-Generated Content</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our AI assistants generate responses based on the content you provide and the capabilities of underlying language models. You acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>AI-generated responses may contain errors, inaccuracies, or outdated information</li>
              <li>You are responsible for reviewing and verifying AI outputs before relying on them</li>
              <li>AI responses should not be treated as professional advice (legal, medical, financial, etc.)</li>
              <li>We do not guarantee the accuracy, completeness, or reliability of AI-generated content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Nnaico platform, including all software, designs, logos, and documentation, is owned by Nnaico Technologies and protected by intellectual property laws. Your use of our services does not grant you any ownership rights to our platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You retain full ownership of your uploaded content and any AI assistants you create. We claim no intellectual property rights over your data or configurations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Subscription fees are billed in advance on a monthly basis</li>
              <li>New customers are eligible for a 30-day money-back guarantee</li>
              <li>After 30 days, fees are non-refundable except as required by law</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>Failure to pay may result in suspension or termination of your account</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may cancel your subscription at any time through your account settings or by contacting us at hello@nnaico.com. Upon cancellation:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Your subscription will remain active until the end of your current billing period</li>
              <li>You will not be charged for subsequent periods</li>
              <li>You may export your data before your access ends</li>
              <li>After your subscription ends, your data will be retained for 30 days before permanent deletion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our services are hosted on Amazon Web Services (AWS) infrastructure. We target 99.9% uptime availability, consistent with AWS service level standards. However, we do not guarantee uninterrupted access and may perform scheduled maintenance with advance notice when possible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Planned maintenance windows will be communicated via email. Emergency maintenance may occur without prior notice to address security or stability issues.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, Nnaico shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify and hold harmless Nnaico and its employees from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may terminate or suspend your account at any time for violation of these terms. Upon termination, your right to use our services will immediately cease.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may request export of your data within 30 days of termination. Data exports include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Original uploaded documents in their original format</li>
              <li>Conversation history in JSON or CSV format</li>
              <li>Assistant configurations in JSON format</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              After 30 days, your data will be permanently deleted from our systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. We will provide notice of significant changes via email or through our services. Continued use after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> hello@nnaico.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
