import { useState } from 'react'

const testimonials = [
  {
    id: 'rfg',
    quote: "Nnaico transformed how our team accesses information. What used to take hours of searching now takes seconds.",
    highlight: ["transformed", "hours of searching now takes seconds"],
    author: "Operations Director",
    company: "Racing Force Group",
    logo: "/images/racing-force-group-logo.png"
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
    result = result.replace(phrase, `<span class="text-primary-400">${phrase}</span>`)
  })
  return result
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        {/* Quote text */}
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug mb-10"
          dangerouslySetInnerHTML={{ __html: `"${highlightText(activeTestimonial.quote, activeTestimonial.highlight)}"` }}
        />

        {/* Author */}
        <div className="mb-16">
          <span className="text-white font-semibold">{activeTestimonial.author}</span>
          <span className="text-slate-500 mx-2">·</span>
          <span className="text-slate-400">{activeTestimonial.company}</span>
        </div>

        {/* Logo selector */}
        <div className="flex justify-center items-center gap-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-all ${
                index === activeIndex
                  ? 'scale-110 brightness-0 invert'
                  : 'opacity-40 hover:opacity-70 brightness-0 invert'
              }`}
            >
              <img
                src={testimonial.logo}
                alt={testimonial.company}
                className="h-5 md:h-6 w-auto object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
