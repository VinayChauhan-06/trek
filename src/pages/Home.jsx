import Hero from '../components/Hero'
import TreksSection from '../components/TreksSection'
import AboutSection from '../components/AboutSection'
import DiscoverSection from '../components/DiscoverSection'
import ChardhamSection from '../components/ChardhamSection'
import PopularTreksSection from '../components/PopularTreksSection'
import GearSection from '../components/GearSection'
import WhyHimalayaTribeSection from '../components/WhyHimalayaTribeSection'
import ContactSection from '../components/ContactSection'
import BlogsSection from '../components/BlogsSection'
import RecognitionSection from '../components/RecognitionSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const Home = () => {
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
      <BlogsSection />
      <RecognitionSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Home

