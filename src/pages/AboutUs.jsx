import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mt-[120px] md:mt-[140px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070"
            alt="Himalayan mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pb-12">
            <div className="w-16 h-1 bg-white mb-4"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Ram, founder of Himalaya Tribe in the Himalayas"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Best Adventure Trekking Company in Dehradun
              </h2>
              
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Greetings! I'm Ram. I started Himalaya Tribe to offer you truly local trekking experience. I take great pride in curating exceptional trekking experiences. With over 13 years of expertise under my belt, the Himalayas are not just my workplace—they are my home and passion.
                </p>
                
                <p>
                  For me, organizing treks is about more than just leading groups through mountains. It's about facilitating unforgettable experiences, fostering connections with nature enthusiasts, and ensuring that every trekker feels a sense of wonder, discovery, and accomplishment. As a guide, I focus on safety, exploration, enjoyment, and offering an authentic cultural experience through my connections with local communities.
                </p>
                
                <p>
                  Join me on an extraordinary Himalayan expedition, where we'll explore stunning landscapes and uncover hidden gems together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="Geodesic dome tent in forest"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Mission & Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Mission & Vision
              </h2>

              {/* Mission */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-himalaya-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We are committed to providing safe, responsible, and sustainable trekking journeys, fostering a deep appreciation for nature, local cultures, and the environment. Through our expert guidance and personalized services, we aim to create unforgettable and transformative experiences, leaving a positive impact on both our participants and the communities we engage with.
                </p>
                <div className="w-24 h-0.5 bg-himalaya-green mt-4"></div>
              </div>

              {/* Vision */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-himalaya-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our mission is to inspire and enable adventurers from all walks of life to explore and experience the majestic beauty of the Himalayas.
                </p>
                <div className="w-24 h-0.5 bg-himalaya-green mt-4"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              What makes us different and what we stand for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Himalayan Sunrise and Sunset",
                description: "Witness mesmerizing sunrise and sunset views from strategic vantage points, as the golden hues bathe the snow-capped peaks in a captivating display of nature's beauty.",
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Safety First",
                description: "We prioritize the safety and well-being of our trekkers above all else. Our experienced guides and staff are trained to ensure a secure and enjoyable trekking experience.",
                bgColor: "bg-green-50",
                iconColor: "bg-green-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Summiting Majestic Peaks",
                description: "For seasoned climbers, we organize expeditions to conquer some of the most iconic Himalayan peaks, offering a sense of accomplishment and awe-inspiring views from the top.",
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "Glacier Treks",
                description: "Embark on thrilling treks that take you through ancient glaciers, witnessing the raw beauty of ice formations and glacial landscapes unique to the Himalayas.",
                bgColor: "bg-blue-50",
                iconColor: "bg-blue-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "High-Altitude Lakes",
                description: "Experience the serenity of pristine high-altitude lakes nestled amidst the mountains, where the tranquil waters mirror the surrounding peaks, creating an otherworldly ambiance.",
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Respect for Nature",
                description: "We deeply respect the pristine environment of the Himalayas and are dedicated to preserving its beauty for future generations. We follow Leave No Trace principles and promote eco-friendly practices.",
                bgColor: "bg-green-50",
                iconColor: "bg-green-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Authenticity",
                description: "We strive to offer authentic and genuine experiences to our trekkers, immersing them in the local culture, traditions, and lifestyles of the Himalayan communities.",
                bgColor: "bg-orange-50",
                iconColor: "bg-orange-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Customer Satisfaction",
                description: "Customer satisfaction is at the heart of our operations. We focus on personalized service, attention to detail, and responsive communication to exceed our trekkers' expectations.",
                bgColor: "bg-blue-50",
                iconColor: "bg-blue-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${value.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`${value.iconColor} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trek Members Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Trek Members
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Meet the passionate team behind Himalaya Tribe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Ram Chauhan",
                role: "Founder of Himalaya Tribe",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              },
              {
                name: "Mukesh Chauhan",
                role: "CEO of Himalaya Tribe",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
              },
              {
                name: "CM Chauhan",
                role: "Trek Leader & Mountain Enthusiast",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default AboutUs

