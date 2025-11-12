import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import { sendEmail } from '../utils/emailService'

const HarKiDunTrek = () => {
  const [selectedDay, setSelectedDay] = useState(1)
  const [expandedMonths, setExpandedMonths] = useState({ May: true })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus) setSubmitStatus(null)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendEmail(formData, {
        sourcePage: 'Har Ki Dun Trek Page',
        subject: `New Inquiry for Har Ki Dun Trek from ${formData.name}`
      })

      setSubmitStatus('success')
      alert('Thank you for your inquiry! We will get back to you soon.')
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at vinaychauhan1352002@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleMonth = (month) => {
    setExpandedMonths(prev => ({
      ...prev,
      [month]: !prev[month]
    }))
  }

  const itineraryData = [
    {
      day: 1,
      title: "Dehradun to Sankri",
      description: "Start your journey early morning from Dehradun. Enjoy a scenic drive through Mussoorie, Purola & Mori. Overnight stay in a guesthouse at Sankri with dinner included.",
      distance: "190 km",
      time: "8-9 hrs"
    },
    {
      day: 2,
      title: "Sankri to Taluka to Seema",
      description: "Early morning drive to Taluka. Begin your trek from Taluka to Seema. The trail passes through beautiful forests and meadows. Overnight stay at Seema.",
      distance: "Trek: 12 km",
      time: "5-6 hrs"
    },
    {
      day: 3,
      title: "Seema to Har Ki Dun",
      description: "Trek to the beautiful Har Ki Dun valley. The trail offers stunning views of the surrounding peaks and meadows. Overnight stay at Har Ki Dun.",
      distance: "11 km",
      time: "6-7 hrs"
    },
    {
      day: 4,
      title: "Explore Har Ki Dun and Jaundhar Glacier",
      description: "Spend the day exploring the Har Ki Dun valley and trek to Jaundhar Glacier. Enjoy panoramic views of the Himalayas. Overnight stay at Har Ki Dun.",
      distance: "8 km",
      time: "5-6 hrs"
    },
    {
      day: 5,
      title: "Har Ki Dun to Seema",
      description: "Retrace your steps back to Seema through the same beautiful trail. Overnight stay at Seema.",
      distance: "11 km",
      time: "5-6 hrs"
    },
    {
      day: 6,
      title: "Seema to Taluka to Sankri",
      description: "Trek back to Taluka and drive to Sankri. Celebrate the completion of your trek. Overnight stay at Sankri.",
      distance: "12 km trek & drive",
      time: "6-7 hrs"
    },
    {
      day: 7,
      title: "Drive back to Dehradun",
      description: "After breakfast, drive back to Dehradun. The journey takes you through beautiful mountain roads. Arrive at Dehradun by evening.",
      distance: "190 km",
      time: "7-8 hrs"
    }
  ]

  const months = ['May', 'June', 'September', 'October', 'November']

  const galleryImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden mt-[120px] md:mt-[140px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80"
            alt="Har Ki Dun Trek"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Best Har Ki Dun Trek Package
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Discover the ancient Har Ki Dun valley, a cradle-shaped valley surrounded by snow-capped peaks. Experience the rich culture of the region and enjoy stunning views of Swargarohini peaks. Book now for an unforgettable adventure!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trek Statistics Bar */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Region</p>
              <p className="text-base text-gray-800 font-medium">Uttarakhand, India</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Duration</p>
              <p className="text-base text-gray-800 font-medium">6 Night - 7 Days</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Max Altitude</p>
              <p className="text-base text-gray-800 font-medium">11,675 ft</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Trekking km</p>
              <p className="text-base text-gray-800 font-medium">54 KM</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Grade</p>
              <p className="text-base text-gray-800 font-medium">Moderate: Level 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Banner */}
      <section className="py-6 px-4 md:px-8 lg:px-16 bg-orange-500">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Trek Price : ₹11999/- (Dehradun to Dehradun)
          </p>
        </div>
      </section>

      {/* Fixed Departure Dates & Enquiry Form Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Fixed Departure Dates */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Fixed Departure Dates</h2>
              <div className="space-y-3">
                {months.map((month) => (
                  <div key={month} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleMonth(month)}
                      className="w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-between transition-colors duration-300"
                    >
                      <span>{month}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${expandedMonths[month] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedMonths[month] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 py-4 bg-white"
                      >
                        <p className="text-gray-700">Every Week</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Enquire Now
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-gray-700">For Any Queries</p>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-himalaya-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-base font-bold">+91 7248708755</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-himalaya-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base font-bold">info.himalayatribe@gmail.com</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md text-sm">
                    CANCELLATION POLICY
                  </button>
                  <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DOWNLOAD ITINERARY PDF
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-himalaya-green focus:outline-none focus:ring-2 focus:ring-himalaya-green/20"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="phone No"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-himalaya-green focus:outline-none focus:ring-2 focus:ring-himalaya-green/20"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-himalaya-green focus:outline-none focus:ring-2 focus:ring-himalaya-green/20"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-himalaya-green focus:outline-none focus:ring-2 focus:ring-himalaya-green/20 resize-y"
                  ></textarea>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" required className="w-4 h-4 rounded border-gray-300 text-himalaya-green focus:ring-himalaya-green" />
                    <span>I'm not a robot</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-himalaya-green hover:bg-himalaya-green-dark hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : submitStatus === 'success' ? (
                      'Message Sent! ✓'
                    ) : submitStatus === 'error' ? (
                      'Error - Try Again'
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Overview</h2>
          <div className="bg-white border-2 border-orange-500 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Trek Name</p>
                    <p className="text-gray-700">Har Ki Dun Trek</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Days</p>
                    <p className="text-gray-700">7</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Adventure Type</p>
                    <p className="text-gray-700">Trekking</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Altitude</p>
                    <p className="text-gray-700">11,675 Ft</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Season</p>
                    <p className="text-gray-700">Summer | Autumn</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Month</p>
                    <p className="text-gray-700">May | June | September | October | November</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Country</p>
                    <p className="text-gray-700">India</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Base Camp</p>
                    <p className="text-gray-700">Sankri</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Grade</p>
                    <p className="text-gray-700">Moderate</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Rail Head</p>
                    <p className="text-gray-700">Dehradun</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Food</p>
                    <p className="text-gray-700">Meals while on trek & Guest House (Veg & Eggs)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Stay</p>
                    <p className="text-gray-700">Guest House (Separate male & Female) & Camping (Twin Sharing)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">Uttarakhand</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Distance</p>
                    <p className="text-gray-700">54 Km</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Airport</p>
                    <p className="text-gray-700">Jolly Grant Airport, which is 28 km away from Dehradun</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-himalaya-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Trail Type</p>
                    <p className="text-gray-700">Valley trek with ancient cultural significance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-himalaya-green font-bold">{'>>'}</span>
                  <span>5% GST will be applicable on Trek Cost and Add-ons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-himalaya-green font-bold">{'>>'}</span>
                  <span>Reporting Time: 6:30 am</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-himalaya-green font-bold">{'>>'}</span>
                  <span>Services: Sankri to Sankri.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-himalaya-green font-bold">{'>>'}</span>
                  <span>Meeting Point: Pickup/Drop Point: Prince Chowk, Dehradun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-himalaya-green font-bold">{'>>'}</span>
                  <span>Drop Point: 6:30 pm to 7:30 pm (Timings are subject to change based on weather and road conditions).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-himalaya-green font-bold">{'>>'}</span>
                  <span>Please reach Dehradun a day before to avoid any delays.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Short Itinerary Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Short Itinerary</h2>
          <div className="space-y-4">
            {itineraryData.map((day, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm whitespace-nowrap">
                  Day {day.day}
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <svg className="w-5 h-5 text-himalaya-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-gray-800 font-medium">
                    {day.title} {day.distance && `(${day.distance})`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Itinerary Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Day Navigation */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
                {itineraryData.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-all duration-300 ${
                      selectedDay === day.day
                        ? 'bg-himalaya-green text-white shadow-md'
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Day {day.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Itinerary Details */}
            <div className="lg:col-span-3">
              {itineraryData
                .filter(day => day.day === selectedDay)
                .map((day) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border-2 border-orange-500 rounded-lg p-6 md:p-8"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      DAY {String(day.day).padStart(2, '0')} - {day.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{day.description}</p>
                    
                    {day.distance && (
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Distance:</span> {day.distance}
                      </p>
                    )}

                    {day.time && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Time:</span> {day.time}
                      </p>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default HarKiDunTrek

