import { useEffect } from 'react'
import Hero from '../components/Hero'
import TreksSection from '../components/TreksSection'
import AboutSection from '../components/AboutSection'
import DiscoverSection from '../components/DiscoverSection'
import ChardhamSection from '../components/ChardhamSection'
import PopularTreksSection from '../components/PopularTreksSection'
import GearSection from '../components/GearSection'
import WhyHimalayaTribeSection from '../components/WhyHimalayaTribeSection'
import ContactSection from '../components/ContactSection'
import RecognitionSection from '../components/RecognitionSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const Home = () => {
  // Handle hash navigation when coming from another page
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Wait for page to render, then scroll
      setTimeout(() => {
        const targetId = hash.substring(1) // Remove the #
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="App">
      <Hero />
      <TreksSection />
      <AboutSection />
      <DiscoverSection />
      <ChardhamSection />
      <PopularTreksSection />
      <GearSection />
      <WhyHimalayaTribeSection />
      <ContactSection />
      <RecognitionSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Home

