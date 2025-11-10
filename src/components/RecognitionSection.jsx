import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const RecognitionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const recognitions = [
    {
      id: 1,
      name: 'Uttarakhand Tourism',
      logo: 'https://via.placeholder.com/200x100/4A90E2/FFFFFF?text=Uttarakhand',
      description: 'Uttarakhand Tourism'
    },
    {
      id: 2,
      name: 'TripAdvisor',
      logo: 'https://via.placeholder.com/200x100/00AA6C/FFFFFF?text=TripAdvisor',
      description: 'TripAdvisor Certified'
    },
    {
      id: 3,
      name: 'Decathlon',
      logo: 'https://via.placeholder.com/200x100/005CAB/FFFFFF?text=DECATHLON',
      description: 'Decathlon Partner'
    },
    {
      id: 4,
      name: 'Indian Mountaineering Foundation',
      logo: 'https://via.placeholder.com/200x100/1E88E5/FFFFFF?text=IMF',
      description: 'Indian Mountaineering Foundation'
    },
    {
      id: 5,
      name: 'Adventure Tour Operators',
      logo: 'https://via.placeholder.com/200x100/FF6B35/FFFFFF?text=ATO',
      description: 'Adventure Tour Operators'
    },
    {
      id: 6,
      name: 'Eco Tourism',
      logo: 'https://via.placeholder.com/200x100/4CAF50/FFFFFF?text=Eco+Trek',
      description: 'Eco Tourism Certified'
    },
    {
      id: 7,
      name: 'Safe Travel',
      logo: 'https://via.placeholder.com/200x100/FF9800/FFFFFF?text=Safe+Travel',
      description: 'Safe Travel Certified'
    },
    {
      id: 8,
      name: 'Travel Association',
      logo: 'https://via.placeholder.com/200x100/9C27B0/FFFFFF?text=Travel+Assoc',
      description: 'Travel Association Member'
    }
  ]

  const visibleCount = 4 // Show 4 logos at a time
  const maxIndex = Math.max(0, recognitions.length - visibleCount)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-12"
        >
          Recognition & Association
        </motion.h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 -left-4 md:-left-6"
            aria-label="Previous logo"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 -right-4 md:-right-6"
            aria-label="Next logo"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Logo Slider */}
          <div className="overflow-hidden px-8 md:px-12">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut"
              }}
              style={{
                width: `${(recognitions.length / visibleCount) * 100}%`
              }}
            >
              {recognitions.map((recognition) => (
                <motion.div
                  key={recognition.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-1/4 px-2"
                >
                  <div className="bg-white rounded-lg p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 h-full flex items-center justify-center min-h-[100px] md:min-h-[120px]">
                    <img
                      src={recognition.logo}
                      alt={recognition.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-himalaya-green'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecognitionSection

