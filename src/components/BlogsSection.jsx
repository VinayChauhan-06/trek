import { motion } from 'framer-motion'

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      date: 'October 31, 2025',
      title: 'Best Time to Visit Kedarkantha Trek: Month-by-Month Weather & Season Guide 2025',
      overlay: {
        topBanner: 'Best Time To Visit',
        mainText: 'KEDARKANTHA TREK:',
        middleBanner: 'MONTH-BY-MONTH WEATHER',
        bottomText: '& SEASON GUIDE 2025'
      }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
      date: 'October 27, 2025',
      title: 'Kedarkantha Summit Guide: Height, Altitude, Temperature, and Sunrise Views',
      overlay: {
        topText: 'Kedarkantha Summit Guide:',
        bottomText: 'Height, Altitude, Temperature, and Sunrise Views'
      }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      date: 'October 17, 2025',
      title: 'Best Winter Treks in India',
      overlay: {
        topText: 'Best Winter Treks in',
        mainText: 'INDIA'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Our Blogs
        </motion.h2>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Container with Overlays */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                
                {/* Text Overlays */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Top Left Banner (for first blog) */}
                  {blog.overlay.topBanner && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-yellow-400 px-3 py-1.5 rounded text-black text-xs font-bold uppercase self-start"
                    >
                      {blog.overlay.topBanner}
                    </motion.div>
                  )}

                  {/* Top Text */}
                  {blog.overlay.topText && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-white font-bold text-lg md:text-xl"
                    >
                      {blog.overlay.topText}
                    </motion.div>
                  )}

                  {/* Main Text */}
                  <div className="text-center space-y-2">
                    {blog.overlay.mainText && (
                      <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-white font-bold text-2xl md:text-3xl uppercase drop-shadow-lg"
                      >
                        {blog.overlay.mainText}
                      </motion.h3>
                    )}
                    {blog.overlay.middleBanner && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-orange-500 px-3 py-1.5 rounded text-white text-xs font-bold uppercase"
                      >
                        {blog.overlay.middleBanner}
                      </motion.div>
                    )}
                    {blog.overlay.bottomText && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-white text-sm md:text-base font-semibold drop-shadow-lg"
                      >
                        {blog.overlay.bottomText}
                      </motion.p>
                    )}
                  </div>

                  {/* Logo (for first blog) */}
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-white text-xs font-bold uppercase self-end"
                    >
                      HIMALAYA TRIBE
                    </motion.div>
                  )}

                  {/* Green INDIA text (for third blog) */}
                  {blog.overlay.mainText === 'INDIA' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-center"
                    >
                      <span className="text-white font-bold text-xl md:text-2xl block mb-2">
                        {blog.overlay.topText}
                      </span>
                      <span className="text-himalaya-green font-bold text-4xl md:text-5xl uppercase drop-shadow-lg">
                        {blog.overlay.mainText}
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 line-clamp-3 flex-grow">
                  {blog.title}
                </h3>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-himalaya-green font-bold text-sm md:text-base hover:text-himalaya-green-dark transition-colors duration-300 inline-flex items-center gap-1 self-start"
                >
                  READ MORE {'>>'}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
          >
            VIEW MORE {'>>'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogsSection

