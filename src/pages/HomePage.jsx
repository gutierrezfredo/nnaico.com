import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import UseCases from '../components/UseCases'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import CapabilitiesShowcase from '../components/CapabilitiesShowcase'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <UseCases />
        <HowItWorks />
        <Features />
        <CapabilitiesShowcase />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
