import { useState } from 'react'

const testimonials = [
  {
    id: 'rfg',
    quote: "Nnaico transformed how our team accesses information. What used to take hours of searching now takes seconds.",
    highlight: ["transformed", "hours of searching now takes seconds"],
    author: "Operations Director",
    company: "Racing Force Group",
    logo: "/logos/rfg.png"
  },
  {
    id: 'seedtrust',
    quote: "Our support team handles twice the volume with Nnaico answering routine questions instantly. It's like having an extra team member who never sleeps.",
    highlight: ["twice the volume", "extra team member who never sleeps"],
    author: "Head of Customer Success",
    company: "SeedTrust Escrow",
    logo: "/logos/seedtrust.png"
  }
]

function highlightText(quote, highlights) {
  let result = quote
  highlights.forEach(phrase => {
    result = result.replace(phrase, `<span class="text-primary-600">${phrase}</span>`)
  })
  return result
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-blue-100/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-gray-200/50 shadow-sm">
          {/* Quote mark */}
          <div className="text-6xl text-primary-300 font-serif leading-none mb-6">"</div>

          {/* Quote text */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-snug text-center mb-10"
            dangerouslySetInnerHTML={{ __html: highlightText(activeTestimonial.quote, activeTestimonial.highlight) }}
          />

          {/* Author */}
          <div className="text-center mb-12">
            <span className="text-gray-900 font-semibold">{activeTestimonial.author}</span>
            <span className="text-gray-400 mx-2">·</span>
            <span className="text-gray-500">{activeTestimonial.company}</span>
          </div>

          {/* Logo selector */}
          <div className="flex justify-center items-center gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`transition-all rounded-xl overflow-hidden ${
                  index === activeIndex
                    ? 'ring-2 ring-primary-500 scale-110 shadow-lg'
                    : 'opacity-50 hover:opacity-75 grayscale hover:grayscale-0'
                }`}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gray-100 flex items-center justify-center p-2 ${
                  index === activeIndex ? 'bg-white' : ''
                }`}>
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
