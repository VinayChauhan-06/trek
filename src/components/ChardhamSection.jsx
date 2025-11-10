import { motion } from 'framer-motion'

const ChardhamSection = () => {
  return (
    <section id="chardham" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-[500px] lg:h-[600px] overflow-hidden"
            >
              <img
                src="https://himalayatribe.com/wp-content/uploads/2025/08/chardham.webp"
                alt="Mountain backdrop"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Best Time for Chardham Yatra
              </h2>

              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                <p>
                  The pleasant times for Chardham Yatra are from <strong>April to June</strong> and <strong>September to mid-November</strong>, offering good weather for a safe pilgrimage. These months provide the perfect conditions to complete your spiritual journey comfortably.
                </p>

                <p>
                  The Chardham Yatra typically starts in late April or early May and continues until November, before heavy blizzards make the routes inaccessible. <strong>April to June</strong> offers clear skies, accessible roads, and moderate temperatures, making it one of the most popular times to visit.
                </p>

                <p>
                  The <strong>post-monsoon season (September to November)</strong> is ideal for avoiding crowds and enjoying the scenic beauty of the Himalayas. The weather is pleasant, and the landscapes are lush and vibrant after the monsoon rains.
                </p>

                <p>
                  It is advisable to <strong>avoid visiting during the monsoon season (July to August)</strong> due to the risk of landslides and heavy rainfall in the Himalayan region, which can make travel dangerous and challenging.
                </p>

                <p>
                  Planning your Chardham Yatra during the recommended months ensures a <strong>spiritually pleasurable and problem-free experience</strong>, allowing you to focus entirely on your pilgrimage without weather-related concerns.
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
                className="px-8 py-4 bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl self-start"
              >
                KNOW MORE {'>>'}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChardhamSection

