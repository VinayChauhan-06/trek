import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import { sendEmail } from '../utils/emailService'

const Chardham = () => {
  const [selectedDay, setSelectedDay] = useState(1)
  const [activeTab, setActiveTab] = useState('inclusion')
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
        sourcePage: 'Chardham Yatra Page',
        subject: `New Inquiry for Chardham Yatra from ${formData.name}`
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
      title: "Haridwar to Barkot (210kms/7-8hr)",
      height: "1352 MTS",
      description: "Drive to Barkot via Mussoorie, En route visit Mussoorie Lake and Kempty Fall (Suggestible to have your lunch at Kempty fall as further no good restaurants are available before Badkot). Later drive straight to Barkot, transfer to your Hotel. The rest of the day is free to relax and store your energy for the Pahad (hill) Yatra of Yamunotri the next day. Overnight stay at Barkot.",
      weather: "Generally pleasant in summer, the temperature ranges from 25-30 degree Celsius, Winter: The Days are pleasantly cool but the nights are cold,temp ranges from 10 deg to 05 deg.",
      distance: "210 Kms",
      time: "7-8 hrs"
    },
    {
      day: 2,
      title: "Barkot to Yamunotri to Barkot {36kms drive & 6kms Trek (one side)}",
      height: "3291 MTS",
      description: "Early morning, Drive to Jankichatti/Phoolchatti, trek start from here to Yamunotri (6kms). Either by walk or by horse or by Doli at own cost. The trek passes through lush green valley, a profusion of conifers, rhododendrons, cacti and several species of Himalayan shrubs. Arr. Yamunotri, One can cook rice by packing it in a cloth and dipping it in the hot water of the hot kund. Pilgrims take this cooked rice home as \"Prasad\". Here near the temple \"Pooja\" can be offered to Divya Shila, After taking bath in Jamunabai Kund's warn water and having \"Darshan\" of pious \"Yamunaji\" returning to Jankichatti. Return back to Barkot, Overnight stay.",
      details: [
        {
          title: "Yamunotri Temple",
          content: "Yamunotri Temple: Maharani Gularia of Jaipur built the temple in the 19th Century. It was destroyed twice in the present century and rebuilt again. At Yamunotri, One can cook rice by packing it in a cloth and dipping it in the hot water of the Tapt kund. Pilgrims take this cooked rice home as \"Prasad\". Here near the temple \"Pooja\" can be offered to Divya Shila."
        },
        {
          title: "Surya Kund",
          content: "There are a number of thermal springs in the vicinity of the temple, which flows into numerous pools. The most important of these is Surya Kund."
        }
      ],
      weather: "Summer: Maximum 18 degrees Celsius, Minimum 10 degrees Celsius. The days are pleasantly cool but the nights are cold.",
      distance: "36kms drive & 6kms Trek (one side)"
    },
    {
      day: 3,
      title: "Barkot to Uttarkashi (100kms/4hr)",
      height: "1352 MTS",
      description: "Morning after breakfast, drive to Uttarkashi. Check into the hotel arrival in Uttarkashi. Visit Kashi Vishwanath Temple in Uttarkashi. Overnight stay at Uttarkashi.",
      intro: "Uttarkashi is home to a number of ashrams, temples. The name of the town reflects its similarity to and location (as north of) the city of Kashi (Varanasi). Similar to Varanasi, the town of Uttarkashi is also situated on the banks of River Ganga.",
      details: [
        {
          title: "Vishwanath temple",
          content: "-Vishwanath temple is one of the oldest Shiva temples in Northern India. Re-constructed in 1857 by Maharani Khaneti Devi of Tehri State in the ancient architectural style. It is situated at the heart of the town. A massive iron trident, symbolic of divine mother's, is erected and worshiped from time immemorial at the temple complex. Ganeshji, Sakshi Gopal, Markandeya Rishi's small shrines are also part of the temple complex. Akhand Jyoti as well as Akhand Abhishek, special aarti in morning and evening are offered. As per Skanda Puran, Uttarkashi is known as 'Saumya Varanasi', the abode of Lord Shiva in Kaliyug, and counted as one of the twelve Jyotirlingas."
        },
        {
          title: "Shakti temple",
          content: "-Right in front of the Vishwanath temple is Shakti temple. It has a big 'Trishul' of about 6 meters in height and a circumference of 90 cms. at bottom. Though there are different views about the making of this, the upper part of it seems to be made up of iron and the lower one is of copper. As per the epics, this Shakti was thrown on the devils by the Goddess Durga(Shakti), hence it gets its name. Since then this Shakti is erected over here."
        }
      ],
      weather: "- Generally hot in summer, the temperature ranges from 30-35 degree Celsius but nights is pleasant, Cold in winters.",
      distance: "- 100 Kms",
      time: "- 4 hrs"
    },
    {
      day: 4,
      title: "Uttarkashi to Gangotri to Uttarkashi (100kms/3-4 each side)",
      height: "3048 MTS",
      description: "Early morning drive to Gangotri, en route at Gangnani take a holy dip in Garam Kund, further drive to Gangotri via beautiful Harsil valley. On arrival at Shree Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and also do Darshan, relax for some time in the lovely surroundings. Later drive back to Uttarkashi. Overnight stay at Uttarkashi.",
      distance: "100 Kms (3-4 hrs each side)",
      time: "3-4 hrs each side"
    },
    {
      day: 5,
      title: "Uttarkashi to Guptkashi (220kms/8-9hr)",
      height: "1319 MTS",
      description: "Early morning, drive straight to Guptkashi via Moolgarh & Lambgoan. On arrival, check into the hotel arrival in Guptkashi. Evening visit Ardh Narishwar Temple. Overnight stay at Guptkashi.",
      distance: "220 Kms",
      time: "8-9 hrs"
    },
    {
      day: 6,
      title: "Guptkashi to Kedarnath (30kms by road & 19kms Trek)",
      description: "Early morning, drive to Sonprayag, Trek start from Sonprayag to Kedarnath (3584 mts) on foot or on pony / Doli. Tour members should carry personal medicines, heavy woolen, toiletries and clothes for an overnight halt at Kedarnath. Check in Hotel. Later visit Kedarnath Temple. Overnight stay at Kedarnath.",
      distance: "30kms by road & 19kms Trek"
    },
    {
      day: 7,
      title: "Kedarnath to Guptkashi (19Kms down Trek & 30kms/1hr by road)",
      description: "Early morning, after Temple Darshan trek down to Sonprayag. Later drive to Guptkashi. Overnight stay at Guptkashi.",
      distance: "19Kms down Trek & 30kms/1hr by road"
    },
    {
      day: 8,
      title: "Guptkashi to Badrinath (215kms/7hr)",
      height: "3133 MTS",
      description: "Early morning, drive to Badrinath via Joshimath. Check into the hotel arrival in Badrinath. Pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are other interesting sightseeing spot like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund and the \"Mukh\" of the Saraswati River. Just within the three kms of Badrinathjee. Overnight stay at Badrinath.",
      distance: "215 Kms",
      time: "7 hrs"
    },
    {
      day: 9,
      title: "Badrinath to Joshimath to Rudraprayag (160kms)",
      description: "Early morning, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). There are other interesting sightseeing spot like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund and the \"Mukh\" of the Saraswati River. Just within the three kms of Badrinathjee. Later drive back to Joshimath. On the way visit Vishnuprayag. Later drive to Rudraprayag. Overnight stay at Rudraprayag.",
      distance: "160 Kms"
    },
    {
      day: 10,
      title: "Rudraprayag to Haridwar (165kms/5-6hr)",
      description: "Early morning, drive to Haridwar via Rishikesh. Rishikesh \"place of sages\" is a celebrated spiritual town on the bank of Ganga and is surrounded by Shivalik range of the Himalayas on three sides. It is said that when Raibhya Rishi did hard penances, God appeared by the name \"Hrishikesh\" and this area hence firth came to be known as Rishikesh. Later transfer to Haridwar Railway Station / Hotel. Tour end.",
      distance: "165 Kms",
      time: "5-6 hrs"
    }
  ]

  const inclusions = [
    "Hotel accommodation as per package same or similar hotels.",
    "Breakfast + Dinner",
    "Transfers and sightseeing as prepackage car",
    "All toll tax, parking, fuel and driver allowances",
    "All applicable hotel and transport taxes."
  ]

  const exclusions = [
    "Meals during your journey to and from the trek starting point",
    "Backpack offloading (available at extra cost; only specific bag types allowed)",
    "Stay before or after the trek, unless mentioned",
    "Any travel outside the planned itinerary",
    "Personal expenses like snacks, laundry, or phone use",
    "Emergency evacuation or early return costs",
    "Personal trekking gear, insurance, tips, or extra support like mules/porters"
  ]

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

  const months = ['May', 'June', 'July', 'August', 'September', 'October']

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mt-[120px] md:mt-[140px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80"
            alt="Kedarnath Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pb-12">
            <div className="w-16 h-1 bg-white mb-4"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Chardham Yatra Tour Packages</h1>
          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
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
              <p className="text-base text-gray-800 font-medium">9 Night - 10 Days</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Start</p>
              <p className="text-base text-gray-800 font-medium">Haridwar</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">End</p>
              <p className="text-base text-gray-800 font-medium">Haridwar</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-himalaya-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm text-himalaya-green font-semibold">Grade</p>
              <p className="text-base text-gray-800 font-medium">Moderate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Banner */}
      <section className="py-6 px-4 md:px-8 lg:px-16 bg-orange-500">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Trek Price: ₹30000/- (Haridwar To Haridwar)
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
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-himalaya-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-medium">+91 7248708755</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-himalaya-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">info.himalayatribe@gmail.com</span>
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

      {/* Short Itinerary Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
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
                    {day.title} {day.height && `HT : ${day.height}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Itinerary Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Day Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                {itineraryData.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`w-full px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-all duration-300 ${
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
                    className="bg-white rounded-lg shadow-md p-6 md:p-8"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      DAY {String(day.day).padStart(2, '0')} {day.title} {day.height && `HT : ${day.height}`}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{day.description}</p>
                    
                    {day.intro && (
                      <p className="text-gray-700 leading-relaxed mb-6">{day.intro}</p>
                    )}

                    {day.details && day.details.map((detail, idx) => (
                      <div key={idx} className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{detail.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{detail.content}</p>
                      </div>
                    ))}

                    {day.weather && (
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {day.day === 1 ? 'Barkot Weather' : day.day === 2 ? 'Yamunotri Weather' : day.day === 3 ? 'Uttarkashi Weather' : 'Weather'}
                        </h4>
                        <p className="text-gray-700">{day.weather}</p>
                      </div>
                    )}

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

      {/* Inclusion/Exclusion Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Inclusion/Exclusion Tabs */}
            <div>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('inclusion')}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                    activeTab === 'inclusion'
                      ? 'bg-himalaya-green text-white'
                      : 'bg-white border-2 border-himalaya-green text-himalaya-green'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inclusion
                </button>
                <button
                  onClick={() => setActiveTab('exclusion')}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                    activeTab === 'exclusion'
                      ? 'bg-himalaya-green text-white'
                      : 'bg-white border-2 border-himalaya-green text-himalaya-green'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Exclusion
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                {activeTab === 'inclusion' ? (
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    {exclusions.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ol>
                )}
              </div>
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

export default Chardham

