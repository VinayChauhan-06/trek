import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const GearSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready-to-Go Gear
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Buy or Rent Trekking Gears
          </p>
        </div>

        {/* Main Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8"
          style={{ minHeight: '500px', maxHeight: '700px' }}
        >
          <img
            src="https://himalayandreamtreks.in/wp-content/uploads/2024/05/Packing-List-.webp"
            alt="Trekking and camping gear arranged on wooden surface"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          
          {/* Text Overlay - BUY/RENT A GEAR */}
          <div className="absolute left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-10">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl leading-tight"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
            >
              BUY/RENT 
              <br />
              A GEAR
            </motion.h3>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              CONTACT US {'>>'}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GearSection

