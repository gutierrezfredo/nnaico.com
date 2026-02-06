const steps = [
  {
    number: "01",
    title: "Upload Your Knowledge",
    description: "Add your documents, procedures, FAQs, and company info. Drag and drop — we handle the rest.",
    image: "/images/step-1-sky.jpg",
    illustration: (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-full max-w-[240px] border-2 border-dashed border-primary-300 rounded-2xl flex flex-col items-center justify-center bg-white shadow-lg py-14">
          <svg className="w-16 h-16 text-primary-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-base text-gray-500">Drop files here</p>
          <p className="text-base text-primary-600 font-semibold">or Upload</p>
        </div>
      </div>
    )
  },
  {
    number: "02",
    title: "Create Your Assistants",
    description: "Build specialized assistants for support, sales, training. Give each one a name and personality.",
    image: "/images/step-2-forest.jpg",
    illustration: (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-full max-w-[240px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-base font-bold text-gray-900">New Assistant</div>
          </div>
          <div className="space-y-3 mb-5">
            <div className="h-3 bg-gray-100 rounded-full w-full"></div>
            <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
            <div className="h-3 bg-gray-100 rounded-full w-1/2"></div>
          </div>
          <div className="h-10 bg-primary-600 rounded-lg text-sm text-white flex items-center justify-center font-semibold">
            Create Assistant
          </div>
        </div>
      </div>
    )
  },
  {
    number: "03",
    title: "Start Asking",
    description: "Your team gets instant answers. Embed on your website for customers. Watch productivity soar.",
    image: "/images/step-3-ocean.jpg",
    illustration: (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-full max-w-[240px] bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-gray-700">
                How do I submit expenses?
              </div>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              Here's how to submit expenses:
              <br />1. Log into Workday...
              <br />2. Go to Expenses...
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-[#ECF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Up and Running in Minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No complex setup. No coding required. Just results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Illustration card */}
              <div className="relative rounded-3xl h-72 mb-6 overflow-hidden">
                <img
                  src={step.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
                />
                <div className="relative z-10 h-full">
                  {step.illustration}
                </div>
              </div>

              {/* Text content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://insight.nnaico.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
          >
            Start Free Trial
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
