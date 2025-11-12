import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden mt-[120px] md:mt-[140px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80"
            alt="Cancellation Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Cancellation Policy
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Clear and transparent policies for your peace of mind
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Cancellation Policy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-himalaya-green to-himalaya-green-dark text-white px-8 py-6">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold">Cancellation Policy</h2>
              </div>
            </div>
            
            <div className="p-8 md:p-10 space-y-10">
              {/* Initiating Cancellation */}
              <div className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-himalaya-green/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-himalaya-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Initiating Cancellation
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      To initiate a cancellation, please send an email to{' '}
                      <a 
                        href="mailto:info.himalayatribe@gmail.com" 
                        className="text-himalaya-green hover:text-himalaya-green-dark font-semibold underline transition-colors duration-300"
                      >
                        info.himalayatribe@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellations Due to Unexpected Circumstances */}
              <div className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Cancellations Due to Unexpected Circumstances
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      If Remote Trek cancels a trek due to natural disasters, floods, or political unrest, 
                      we will provide a voucher valid for one year from the date of cancellation. This voucher 
                      can be used for any of our trekking packages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellations Made for Personal Reasons */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Cancellations Made for Personal Reasons
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                      The refund policy for cancellations made for personal reasons is based on the number of 
                      days before the trek start date:
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border-l-4 border-green-500 pl-6 py-4 bg-gradient-to-r from-green-50 to-white rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h4 className="font-bold text-gray-900 text-lg">30 Days or More Before Trek</h4>
                    </div>
                    <p className="text-gray-700 font-semibold ml-6">Full Refund</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border-l-4 border-yellow-500 pl-6 py-4 bg-gradient-to-r from-yellow-50 to-white rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <h4 className="font-bold text-gray-900 text-lg">15 Days Before Trek</h4>
                    </div>
                    <p className="text-gray-700 font-semibold ml-6">20% of Total Trekking Fee deducted, remaining refunded</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border-l-4 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-50 to-white rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <h4 className="font-bold text-gray-900 text-lg">10 Days Before Trek</h4>
                    </div>
                    <p className="text-gray-700 font-semibold ml-6">40% of Total Trekking Fee deducted, remaining refunded</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border-l-4 border-red-500 pl-6 py-4 bg-gradient-to-r from-red-50 to-white rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <h4 className="font-bold text-gray-900 text-lg">5 Days Before Trek</h4>
                    </div>
                    <p className="text-gray-700 font-semibold ml-6">60% of Total Trekking Fee deducted, remaining refunded</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border-l-4 border-gray-800 pl-6 py-4 bg-gradient-to-r from-gray-100 to-white rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                      <h4 className="font-bold text-gray-900 text-lg">4 Days Before Trek</h4>
                    </div>
                    <p className="text-gray-700 font-semibold ml-6">No amount refunded</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terms & Conditions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-himalaya-green to-himalaya-green-dark text-white px-8 py-6">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold">Terms & Conditions</h2>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <ul className="space-y-6">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-himalaya-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 pt-1">
                    Trek will be booked only after the booking amount.
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-himalaya-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 pt-1">
                    Payment to be made by Bank Transfer/Cheque/DD in favor of Remote Trek.
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-himalaya-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 pt-1">
                    Payment for this trip will not be adjusted against any future trip.
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default CancellationPolicy

