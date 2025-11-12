import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ChardhamSection = () => {
  return (
    <section id="chardham" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Chardham Yatra - Spiritual Journey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Chardham Tour – A Soulful Spiritual Journey
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Thousands of devotees travel to the well-known holy circuit in Chardham each year. Situated in Uttarakhand's high Himalayas, the yatra comes to an end at the completion of visits to the four Hindu pilgrimage sites of Yamunotri, Gangotri, Kedarnath, and Badrinath.
              </p>
              
              <p>
                Our 12-day Chardham pilgrimage tour departing from Delhi provides holy darshan at all four shrines along with cosy lodging and amenities in between the yatra.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/chardham"
                className="inline-block px-8 py-4 bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Explore Chardham Yatra {'>>'}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ChardhamSection

