import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const getActivePage = () => {
    if (location.pathname === '/about-us') return 'about'
    if (location.pathname === '/contact') return 'contact'
    if (location.pathname === '/chardham') return 'chardham'
    if (location.pathname === '/blogs') return 'blogs'
    if (location.pathname === '/explore-treks') return 'trek'
    if (location.pathname.startsWith('/trek-')) return 'trek'
    return 'home'
  }
  const activePage = getActivePage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTreksDropdownOpen, setIsTreksDropdownOpen] = useState(false)
  const [hoveredTrekCategory, setHoveredTrekCategory] = useState(null)
  const [showTopBar, setShowTopBar] = useState(true)
  const closeTimeoutRef = useRef(null)

  // Hide top bar on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowTopBar(false)
          } else if (currentScrollY < lastScrollY) {
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
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
    window.location.href = 'tel:+917248708755'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-white">
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
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <svg 
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M30 180 L100 60 L170 180 Z" 
              fill="black" 
            />
            <g transform="translate(130, 100)">
              <rect x="5" y="15" width="12" height="20" rx="2" fill="black"/>
              <ellipse cx="11" cy="30" rx="8" ry="12" fill="black"/>
              <circle cx="11" cy="8" r="6" fill="black"/>
              <line x1="20" y1="15" x2="22" y2="50" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="22" cy="50" r="2" fill="black"/>
              <path d="M11 42 L5 55" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M11 42 L17 55" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </g>
          </svg>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black uppercase tracking-tight" style={{ fontFamily: 'sans-serif', lineHeight: '1.1' }}>
              REMOTE
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-normal text-black uppercase tracking-wide -mt-0.5 sm:-mt-1 flex items-center gap-1" style={{ fontFamily: 'sans-serif' }}>
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              TREK
            </p>
            <p className="text-[10px] sm:text-xs text-himalaya-green hidden sm:block">Guided By Locals</p>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className={activePage === 'home' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>Home</Link>
          <Link to="/about-us" className={activePage === 'about' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>About Us</Link>
          <div 
            className="relative"
            onMouseEnter={() => {
              // Clear any pending close timeout
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
                closeTimeoutRef.current = null
              }
              setIsTreksDropdownOpen(true)
            }}
            onMouseLeave={() => {
              // Add delay before closing to allow smooth navigation
              closeTimeoutRef.current = setTimeout(() => {
                setIsTreksDropdownOpen(false)
                setHoveredTrekCategory(null)
              }, 300) // 300ms delay for smooth transition
            }}
          >
            <a 
              href="#treks" 
              onClick={(e) => {
                e.preventDefault()
                const targetElement = document.getElementById('treks')
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                } else {
                  window.location.href = '#treks'
                }
              }}
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
            <AnimatePresence>
              {isTreksDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  style={{ minWidth: '200px' }}
                  onMouseEnter={() => {
                    // Clear any pending close timeout when mouse enters dropdown
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current)
                      closeTimeoutRef.current = null
                    }
                    setIsTreksDropdownOpen(true)
                  }}
                  onMouseLeave={() => {
                    // Add delay before closing when mouse leaves dropdown
                    closeTimeoutRef.current = setTimeout(() => {
                      setIsTreksDropdownOpen(false)
                      setHoveredTrekCategory(null)
                    }, 300)
                  }}
                >
                <div className="flex">
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
                  
                  {hoveredTrekCategory && trekCategories[hoveredTrekCategory].length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ 
                        duration: 0.25,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="py-2 border-l border-gray-200 bg-gray-50"
                      style={{ minWidth: '220px' }}
                      onMouseEnter={() => {
                        // Clear any pending close timeout
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current)
                          closeTimeoutRef.current = null
                        }
                        setIsTreksDropdownOpen(true)
                      }}
                    >
                      {trekCategories[hoveredTrekCategory].map((trek) => {
                        const trekSlug = trek.toLowerCase().replace(/\s+/g, '-')
                        const trekRoute = `/trek-${trekSlug}`
                        return (
                          <button
                            type="button"
                            key={trek}
                            onClick={() => {
                              navigate(trekRoute)
                              setTimeout(() => {
                                setIsTreksDropdownOpen(false)
                                setHoveredTrekCategory(null)
                              }, 300)
                            }}
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
            </AnimatePresence>
          </div>
          <Link 
            to="/chardham"
            className={activePage === 'chardham' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}
          >
            Chardham Yatra
          </Link>
          <Link to="/contact" className={activePage === 'contact' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>Contact</Link>
          <Link to="/blogs" className={activePage === 'blogs' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>Blogs</Link>
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
              <Link to="/" className={activePage === 'home' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium'}>Home</Link>
              <Link to="/about-us" className={activePage === 'about' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium'}>About Us</Link>
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
                        <a 
                          href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={(e) => {
                            e.preventDefault()
                            const targetId = category.toLowerCase().replace(/\s+/g, '-')
                            const targetElement = document.getElementById(targetId)
                            if (targetElement) {
                              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            } else {
                              window.location.href = `#${targetId}`
                            }
                            // Keep dropdown open for category navigation
                          }}
                          className="text-gray-700 font-medium block"
                        >
                          {category}
                        </a>
                        {trekCategories[category].length > 0 && (
                          <div className="pl-4 space-y-1">
                            {trekCategories[category].map((trek) => {
                              const trekSlug = trek.toLowerCase().replace(/\s+/g, '-')
                              const trekRoute = `/trek-${trekSlug}`
                              return (
                                <button
                                  type="button"
                                  key={trek}
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
              <Link 
                to="/chardham"
                onClick={() => setIsMenuOpen(false)}
                className={activePage === 'chardham' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium'}
              >
                Chardham Yatra
              </Link>
              <Link to="/contact" className={activePage === 'contact' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium'}>Contact</Link>
              <Link to="/blogs" onClick={() => setIsMenuOpen(false)} className={activePage === 'blogs' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium'}>Blogs</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation

