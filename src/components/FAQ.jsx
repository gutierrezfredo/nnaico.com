import { useState } from 'react'

const faqs = [
  {
    question: "How is this different from ChatGPT or Copilot?",
    answer: "ChatGPT and Copilot are general-purpose AI tools. Nnaico is trained on YOUR company's documents and data — it actually knows your business, products, and processes. It's the difference between a generic assistant and one who's worked at your company for years."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Your data is encrypted and never used to train public AI models. We follow enterprise-grade security practices. Enterprise customers can also choose self-hosted deployment for complete control over their data."
  },
  {
    question: "How long does setup take?",
    answer: "Most companies are up and running in under an hour. Upload your documents, create an assistant, and start asking questions. No coding required. Our team can also help with onboarding if needed."
  },
  {
    question: "Can I embed the assistant on my website?",
    answer: "Yes! With one line of code, you can add a Nnaico assistant to any website. Perfect for customer support, lead capture, or providing instant answers to visitors."
  },
  {
    question: "What file types can I upload?",
    answer: "We support PDFs, Word docs, text files, spreadsheets, and more. If it contains text, we can process it. Our knowledge base also supports direct text input and web page imports."
  },
  {
    question: "Can I use my own LLM?",
    answer: "Yes! Nnaico supports GPT, Claude, Gemini, Ollama, and local LLMs. You can even use different models for different assistants — use a powerful model for complex tasks and a faster one for simple queries."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#ECF4FF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Nnaico.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
