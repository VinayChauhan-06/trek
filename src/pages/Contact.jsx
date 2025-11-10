import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mt-[120px] md:mt-[140px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80"
            alt="Himalayan mountains with trekkers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pb-12">
            <div className="w-16 h-1 bg-white mb-4"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Contact

