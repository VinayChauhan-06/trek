import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Section 1: Company Logo and Contact Information */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                {/* Mountain Logo */}
                <svg 
                  className="w-12 h-12 text-white" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M30 180 L100 60 L170 180 Z" 
                    fill="currentColor" 
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-bold text-white">HIMALAYA TRIBE</h3>
                  <p className="text-xs text-himalaya-green">Guided By Locals</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-himalaya-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm">
                  <p>Lane No.7, Kargi Rd, Near Doon Palm</p>
                  <p>City, Narayan Vihar, Brahmanwala,</p>
                  <p>Dehradun, Uttarakhand 248001</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-himalaya-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info.himalayatribe@gmail.com" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  info.himalayatribe@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-himalaya-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917248708755" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  +91 7248708755
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Useful Links and Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Useful Links</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="#home" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#chardham" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Chardham Yatra
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#blogs" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Cancellation Policy
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Section 3: Treks */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Treks</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Bali Pass Trek
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Chopta trek
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Dayara Bugyal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Gaumukh Tapovan Trek
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-himalaya-green transition-colors duration-300">
                  Kedarkantha Trek
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Our Location */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Location</h4>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.293465787123!2d78.0461!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b6f2b2b8b9%3A0x8a8b8b8b8b8b8b8b!2sHimalaya%20Tribe!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Himalaya Tribe Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900 py-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            Copyright@2025 Himalaya Tribe, All Right Reserved – Powered by{' '}
            <span className="text-himalaya-green">SAAR ASIA</span>
          </div>

          {/* Scroll to Top Button and Additional Links */}
          <div className="flex items-center gap-4">
            {/* Additional Links */}
            <a href="#" className="text-sm text-gray-400 hover:text-himalaya-green transition-colors duration-300 hidden md:block">
              Cancellation Policy and Terms and Conditions
            </a>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                aria-label="Scroll to top"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            )}
          </div>
        </div>

        {/* Website URL */}
        <div className="max-w-7xl mx-auto mt-2 px-4 md:px-8 lg:px-16">
          <a href="https://himalayatribe.com" className="text-xs text-gray-500 hover:text-himalaya-green transition-colors duration-300">
            https://himalayatribe.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

