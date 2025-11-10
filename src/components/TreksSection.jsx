import { useState, useEffect } from 'react'

const TreksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4) // Show 4 cards at once on desktop
  const [cardWidth, setCardWidth] = useState(0)

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(4) // Desktop: 4 cards
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const treks = [
    {
      id: 1,
      name: 'BALI PASS',
      price: '₹ 16,999/-',
      duration: '7 NIGHT - 8 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      id: 2,
      name: 'KEDARKANTHA',
      price: '₹ 6,500/-',
      duration: '4 NIGHT - 5 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
    },
    {
      id: 3,
      name: 'HAR KI DUN',
      price: '₹ 8,999/-',
      duration: '5 NIGHT - 6 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    },
    {
      id: 4,
      name: 'DAYARA BUGYAL',
      price: '₹ 6,500/-',
      duration: '5 NIGHT - 6 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      id: 5,
      name: 'GAUMUKH TAPOVAN',
      price: '₹ 16,000/-',
      duration: '7 NIGHT - 8 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80'
    },
    {
      id: 6,
      name: 'CHOPTA',
      price: '₹ 5,999/-',
      duration: '2 NIGHT - 3 DAYS',
      location: 'RISHIKESH TO RISHIKESH',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    },
    {
      id: 7,
      name: 'VALLEY OF FLOWERS',
      price: '₹ 10,500/-',
      duration: '5 NIGHT - 6 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    },
    {
      id: 8,
      name: 'NAG TIBBA',
      price: '₹ 3,400/-',
      duration: '1 NIGHT - 2 DAYS',
      location: 'DEHRADUN TO DEHRADUN',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    }
  ]

  const maxIndex = Math.max(0, treks.length - cardsPerView)

  // Auto-slide functionality - slide one card at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0 // Loop back to start
        }
        return prev + 1
      })
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  // Calculate card width based on container
  useEffect(() => {
    const updateCardWidth = () => {
      const container = document.querySelector('.carousel-container')
      if (container) {
        const containerWidth = container.offsetWidth
        const gap = 16 // 1rem gap between cards
        const width = (containerWidth - (gap * (cardsPerView - 1))) / cardsPerView
        setCardWidth(width)
      }
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [cardsPerView])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Himalaya Tribes Treks for 2025
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Looking for your next Himalayan adventure? As the best trekking company in Uttarakhand, we bring you the most awaited upcoming treks of the season. Whether you're interested in snow trails, scenic valleys or beginner treks, we have something unique & something great for everyone.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8 carousel-container">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous trek"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next trek"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Wrapper */}
          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-4"
              style={{ 
                transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
                width: `${treks.length * (cardWidth + 16)}px`
              }}
            >
              {treks.map((trek) => (
                <div
                  key={trek.id}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                    {/* Image Container - adjusts to image natural size */}
                    <div className="relative w-full" style={{ minHeight: '400px', maxHeight: '600px' }}>
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="w-full h-full object-cover"
                        style={{ display: 'block' }}
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                      
                      {/* Trek Name Overlay - Top Center */}
                      <div className="absolute top-4 left-0 right-0 text-center px-4 z-10">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-himalaya-green uppercase mb-0 drop-shadow-lg leading-tight">
                          {trek.name}
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-himalaya-green italic" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                          Trek
                        </p>
                      </div>

                      {/* Info Overlay - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                        {/* Location */}
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white font-bold text-xs md:text-sm uppercase">
                            {trek.location}
                          </span>
                        </div>

                        {/* Price and Duration */}
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-1 whitespace-nowrap">
                              {trek.price}
                            </p>
                          </div>
                          <div className="bg-yellow-400 px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                            <p className="text-black font-bold text-xs md:text-sm uppercase whitespace-nowrap">
                              {trek.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore All Treks Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            EXPLORE ALL TREKS &gt;&gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default TreksSection
