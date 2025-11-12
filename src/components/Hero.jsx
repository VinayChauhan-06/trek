import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'

const Hero = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTreksDropdownOpen, setIsTreksDropdownOpen] = useState(false)
  const [hoveredTrekCategory, setHoveredTrekCategory] = useState(null)
  const [showTopBar, setShowTopBar] = useState(true)
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const [viewportHeight, setViewportHeight] = useState(800)
  
  // Get viewport height on mount and resize
  useEffect(() => {
    setViewportHeight(window.innerHeight)
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Smoother parallax effect with spring physics
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const smoothY = useSpring(backgroundY, { stiffness: 150, damping: 40 })
  
  // Separate opacity for hero fade-out on scroll (only when scrolling past hero)
  const heroOpacity = useTransform(
    scrollY, 
    [0, viewportHeight * 0.8, viewportHeight], 
    [1, 1, 0.3]
  )
  const smoothOpacity = useSpring(heroOpacity, { stiffness: 150, damping: 40 })
  
  // Hide top bar on scroll down - with throttling for smoother performance
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            setShowTopBar(false)
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            setShowTopBar(true)
          }
          
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Trek categories with their sub-items
  const trekCategories = {
    'Summer Treks': [
      'Bali Pass Trek',
      'Phulara Ridge',
      'Har Ki Dun Trek',
      'Gaumukh Tapovan Trek'
    ],
    'Winter Treks': [
      'Chopta trek',
      'Kedarkantha Trek',
      'Dayara Bugyal',
      'Nag Tibba Trek'
    ],
    'Monsoon Treks': ['Valley of Flowers Trek']
  }

  const handleCallNow = () => {
    // Works in both mobile and webview
    window.location.href = 'tel:+917248708755'
  }

  // Hero slides data
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070',
      alt: 'Mountain landscape',
      title: 'Best Trekking Company in Uttarakhand',
      subtitle: 'Discover the Himalayas with expert guides'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80',
      alt: 'Adventure trekking',
      title: 'Unforgettable Himalayan Adventures',
      subtitle: 'Experience nature like never before'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2070&q=80',
      alt: 'Mountain peak',
      title: 'Your Journey Starts Here',
      subtitle: 'Join us for the adventure of a lifetime'
    }
  ]

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Hero background image
  const heroImage = 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070'

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
        {/* Top Contact Bar - Hidden on scroll down */}
        <motion.div 
          className="bg-himalaya-green-dark"
          initial={{ height: 'auto' }}
          animate={{ 
            height: showTopBar ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-6 px-3 sm:px-4 py-1.5 sm:py-2">
            <a href="tel:+917248708755" className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm hover:opacity-80 transition-opacity">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">+91 7248708755</span>
            </a>
            <a href="mailto:info.himalayatribe@gmail.com" className="hidden sm:flex items-center gap-2 text-white text-sm hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate max-w-[200px]">info.himalayatribe@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Main Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 py-3 md:py-4 bg-white relative">
          {/* Logo - Adventure Explorer Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <svg 
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mountain */}
              <path 
                d="M30 180 L100 60 L170 180 Z" 
                fill="black" 
              />
              {/* Hiker */}
              <g transform="translate(130, 100)">
                {/* Backpack */}
                <rect x="5" y="15" width="12" height="20" rx="2" fill="black"/>
                {/* Body */}
                <ellipse cx="11" cy="30" rx="8" ry="12" fill="black"/>
                {/* Head */}
                <circle cx="11" cy="8" r="6" fill="black"/>
                {/* Trekking Pole */}
                <line x1="20" y1="15" x2="22" y2="50" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="22" cy="50" r="2" fill="black"/>
                {/* Left leg (elevated on peak) */}
                <path d="M11 42 L5 55" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                {/* Right leg */}
                <path d="M11 42 L17 55" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              </g>
            </svg>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black uppercase tracking-tight" style={{ fontFamily: 'sans-serif', lineHeight: '1.1' }}>
                REMOTE
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-normal text-black uppercase tracking-wide -mt-0.5 sm:-mt-1" style={{ fontFamily: 'sans-serif' }}>
                TREK
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="text-himalaya-green font-semibold hover:text-himalaya-green-dark transition-colors duration-300">Home</a>
            <Link to="/about-us" className="text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300">About Us</Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsTreksDropdownOpen(true)}
              onMouseLeave={() => {
                setIsTreksDropdownOpen(false)
                setHoveredTrekCategory(null)
              }}
            >
              <a 
                href="#treks" 
                className={`font-medium transition-colors duration-300 flex items-center gap-1 ${
                  isTreksDropdownOpen ? 'text-himalaya-green' : 'text-gray-800 hover:text-himalaya-green'
                }`}
              >
                Treks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              {isTreksDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  style={{ minWidth: '200px' }}
                >
                  <div className="flex">
                    {/* Left Panel - Categories */}
                    <div className="py-2">
                      {Object.keys(trekCategories).map((category) => (
                        <div
                          key={category}
                          onMouseEnter={() => setHoveredTrekCategory(category)}
                          className={`px-6 py-3 cursor-pointer transition-colors duration-200 ${
                            hoveredTrekCategory === category
                              ? 'bg-gray-50 text-himalaya-green'
                              : 'text-gray-800 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-medium whitespace-nowrap">{category}</span>
                            {trekCategories[category].length > 0 && (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Right Panel - Sub-items */}
                    {hoveredTrekCategory && trekCategories[hoveredTrekCategory].length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="py-2 border-l border-gray-200 bg-gray-50"
                        style={{ minWidth: '220px' }}
                      >
                        {trekCategories[hoveredTrekCategory].map((trek) => {
                          const trekSlug = trek.toLowerCase().replace(/\s+/g, '-')
                          const trekRoute = `/trek-${trekSlug}`
                          return (
                            <button
                              key={trek}
                              type="button"
                              onClick={() => navigate(trekRoute)}
                              className="block w-full text-left px-6 py-3 text-gray-800 hover:bg-white hover:text-himalaya-green transition-colors duration-200"
                            >
                              {trek}
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
            <Link to="/chardham" className="text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300">Chardham Yatra</Link>
            <Link to="/contact" className="text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300">Contact</Link>
            <Link to="/blogs" className="text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300">Blogs</Link>
          </nav>
          
          {/* CALL NOW Button - Rightmost */}
          <div className="hidden lg:flex flex-shrink-0">
            <button 
              onClick={handleCallNow}
              className="flex items-center gap-2 px-6 py-2.5 bg-himalaya-green-dark hover:bg-himalaya-green rounded-md text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL NOW
            </button>
          </div>

          {/* Mobile Menu Button and CALL NOW - Right side */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <button 
              onClick={handleCallNow}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-himalaya-green-dark hover:bg-himalaya-green rounded-md text-white font-bold text-[10px] sm:text-xs transition-all duration-300 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden min-[375px]:inline">CALL NOW</span>
              <span className="min-[375px]:hidden">CALL</span>
            </button>
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 gap-4">
                <a href="#home" className="text-himalaya-green font-semibold">Home</a>
                <Link to="/about-us" className="text-gray-800 font-medium">About Us</Link>
                <div>
                  <button
                    onClick={() => setIsTreksDropdownOpen(!isTreksDropdownOpen)}
                    className="text-gray-800 font-medium flex items-center justify-between w-full"
                  >
                    <span>Treks</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isTreksDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isTreksDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {Object.keys(trekCategories).map((category) => (
                        <div key={category} className="space-y-1">
                          <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 font-medium block">
                            {category}
                          </a>
                          {trekCategories[category].length > 0 && (
                            <div className="pl-4 space-y-1">
                              {trekCategories[category].map((trek) => {
                                const trekSlug = trek.toLowerCase().replace(/\s+/g, '-')
                                const trekRoute = `/trek-${trekSlug}`
                                return (
                                  <button
                                    key={trek}
                                    type="button"
                                    onClick={() => {
                                      navigate(trekRoute)
                                      setIsTreksDropdownOpen(false)
                                      setIsMenuOpen(false)
                                    }}
                                    className="text-gray-600 text-sm block text-left w-full"
                                  >
                                    {trek}
                                  </button>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
                <Link to="/chardham" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>Chardham Yatra</Link>
                <Link to="/contact" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/blogs" className="text-gray-800 font-medium" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Slider */}
      <div className="relative w-full h-full" ref={heroRef} style={{ willChange: 'transform' }}>
        <AnimatePresence mode="wait" initial={false}>
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null
            return (
              <motion.div
                key={`slide-${slide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 3, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 2 }
                }}
                style={{ 
                  y: smoothY,
                  opacity: smoothOpacity,
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
                className="absolute inset-0 w-full h-full"
              >
                <motion.div 
                  className="relative w-full h-full overflow-hidden"
                  initial={{ scale: 1.01 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 3, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <motion.img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    style={{ 
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "loop"
                    }}
                  />
                  <div className="absolute inset-0 overlay-gradient"></div>
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Hero Content - Dynamic text based on current slide */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-20 sm:pt-24 md:pt-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center px-4 sm:px-6 md:px-8 max-w-4xl w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 text-shadow leading-tight px-2"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 inline-block max-w-full mx-2"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-shadow">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>

              <Link to="/contact">
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-himalaya-green-dark hover:bg-himalaya-green text-white font-bold text-base sm:text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
                >
                  Contact Now
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-10 h-2 sm:h-3 bg-white'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
