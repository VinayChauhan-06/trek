import { motion } from 'framer-motion'

const DiscoverSection = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070"
          alt="Mountain campsite at sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 md:space-y-8"
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Discover the mountains like a local
            </h2>

            {/* Three Paragraphs */}
            <div className="space-y-4 md:space-y-5 text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
              <p>
                At Himalaya Tribe, we offer you a unique and unforgettable trekking experience that takes you through alpine meadows, reveals sunrises above snowy heights, and gifts you nights under starlit skies. Every trail we choose is carefully selected to give you the authentic mountain experience — one that connects you deeply with nature and the local culture.
              </p>
              
              <p>
                Our goal is to create memories that last a lifetime. We believe in small group sizes, expert local guides, and carefully crafted itineraries that prioritize your safety & comfort. Whether you're a first-time trekker or an experienced mountaineer, we ensure that every step of your journey is filled with wonder and supported by our unwavering commitment to excellence.
              </p>
              
              <p>
                So come discover the majestic trails of Uttarakhand with us — step by step, peak by peak.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-8 px-8 py-4 bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              KNOW MORE {'>>'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverSection

