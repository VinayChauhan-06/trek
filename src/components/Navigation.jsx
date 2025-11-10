import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const location = useLocation()
  const getActivePage = () => {
    if (location.pathname === '/about-us') return 'about'
    if (location.pathname === '/contact') return 'contact'
    return 'home'
  }
  const activePage = getActivePage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTreksDropdownOpen, setIsTreksDropdownOpen] = useState(false)
  const [hoveredTrekCategory, setHoveredTrekCategory] = useState(null)
  const [showTopBar, setShowTopBar] = useState(true)

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
    'Monsoon Treks': []
  }

  const handleCallNow = () => {
    window.location.href = 'tel:+917248708755'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-white">
      {/* Top Contact Bar - Hidden on scroll down */}
      <motion.div 
        className="hidden md:block bg-himalaya-green-dark"
        initial={{ height: 'auto' }}
        animate={{ 
          height: showTopBar ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex items-center justify-end gap-6 px-4 py-2">
          <div className="flex items-center gap-2 text-white text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+91 7248708755</span>
          </div>
          <div className="flex items-center gap-2 text-white text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info.himalayatribe@gmail.com</span>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-white relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <svg 
            className="w-16 h-16 md:w-20 md:h-20" 
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
            <h1 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight" style={{ fontFamily: 'sans-serif' }}>
              HIMALAYA
            </h1>
            <p className="text-sm md:text-base font-normal text-black uppercase tracking-wide -mt-1 flex items-center gap-1" style={{ fontFamily: 'sans-serif' }}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              TRIBE
            </p>
            <p className="text-xs text-himalaya-green">Guided By Locals</p>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className={activePage === 'home' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>Home</Link>
          <Link to="/about-us" className={activePage === 'about' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>About Us</Link>
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
                      transition={{ duration: 0.2 }}
                      className="py-2 border-l border-gray-200 bg-gray-50"
                      style={{ minWidth: '220px' }}
                    >
                      {trekCategories[hoveredTrekCategory].map((trek) => (
                        <a
                          key={trek}
                          href={`#trek-${trek.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-6 py-3 text-gray-800 hover:bg-white hover:text-himalaya-green transition-colors duration-200"
                        >
                          {trek}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
          <a href="#chardham" className="text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300">Chardham Yatra</a>
          <Link to="/contact" className={activePage === 'contact' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300'}>Contact</Link>
          <a href="#blogs" className="text-gray-800 font-medium hover:text-himalaya-green transition-colors duration-300">Blogs</a>
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
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={handleCallNow}
            className="flex items-center gap-2 px-4 py-2 bg-himalaya-green-dark hover:bg-himalaya-green rounded-md text-white font-bold text-xs transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            CALL NOW
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
                        <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 font-medium block">
                          {category}
                        </a>
                        {trekCategories[category].length > 0 && (
                          <div className="pl-4 space-y-1">
                            {trekCategories[category].map((trek) => (
                              <a
                                key={trek}
                                href={`#trek-${trek.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-gray-600 text-sm block"
                              >
                                {trek}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              <a href="#chardham" className="text-gray-800 font-medium">Chardham Yatra</a>
              <Link to="/contact" className={activePage === 'contact' ? 'text-himalaya-green font-semibold' : 'text-gray-800 font-medium'}>Contact</Link>
              <a href="#blogs" className="text-gray-800 font-medium">Blogs</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation

