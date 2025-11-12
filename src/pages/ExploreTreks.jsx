import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const ExploreTreks = () => {
  const treks = [
    {
      id: 1,
      name: 'Bali Pass Trek',
      slug: 'bali-pass-trek',
      price: '₹16,999',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      duration: '9 Days',
      altitude: '16,200 ft',
      grade: 'Difficult',
      season: 'Summer | Autumn'
    },
    {
      id: 2,
      name: 'Phulara Ridge',
      slug: 'phulara-ridge',
      price: '₹12,999',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80',
      duration: '8 Days',
      altitude: '12,100 ft',
      grade: 'Moderate',
      season: 'Summer | Autumn'
    },
    {
      id: 3,
      name: 'Har Ki Dun Trek',
      slug: 'har-ki-dun-trek',
      price: '₹11,999',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      duration: '7 Days',
      altitude: '11,675 ft',
      grade: 'Moderate',
      season: 'Summer | Autumn'
    },
    {
      id: 4,
      name: 'Gaumukh Tapovan Trek',
      slug: 'gaumukh-tapovan-trek',
      price: '₹16,000',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      duration: '8 Days',
      altitude: '14,600 ft',
      grade: 'Difficult',
      season: 'Summer | Autumn'
    },
    {
      id: 5,
      name: 'Chopta Trek',
      slug: 'chopta-trek',
      price: '₹5,999',
      location: 'Rishikesh',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
      duration: '3 Days',
      altitude: '8,500 ft',
      grade: 'Easy',
      season: 'Winter'
    },
    {
      id: 6,
      name: 'Kedarkantha Trek',
      slug: 'kedarkantha-trek',
      price: '₹6,500',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
      duration: '5 Days',
      altitude: '12,500 ft',
      grade: 'Moderate',
      season: 'Winter'
    },
    {
      id: 7,
      name: 'Dayara Bugyal',
      slug: 'dayara-bugyal',
      price: '₹6,500',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      duration: '6 Days',
      altitude: '12,000 ft',
      grade: 'Moderate',
      season: 'Winter'
    },
    {
      id: 8,
      name: 'Nag Tibba Trek',
      slug: 'nag-tibba-trek',
      price: '₹3,400',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      duration: '2 Days',
      altitude: '9,915 ft',
      grade: 'Easy',
      season: 'Winter'
    },
    {
      id: 9,
      name: 'Valley of Flowers Trek',
      slug: 'valley-of-flowers-trek',
      price: '₹10,500',
      location: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80',
      duration: '6 Days',
      altitude: '14,400 ft',
      grade: 'Moderate',
      season: 'Monsoon'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden mt-[120px] md:mt-[140px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80"
            alt="Explore Treks"
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
                Explore All Treks
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Discover our complete collection of Himalayan trekking adventures. From easy weekend getaways to challenging high-altitude expeditions, find your perfect trekking experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treks Grid Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Remote Trek Treks for 2025
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of treks, each offering unique experiences and breathtaking views of the Himalayas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {treks.map((trek, index) => (
              <motion.div
                key={trek.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="block">
                  <Link to={`/trek-${trek.slug}`} className="block cursor-pointer">
                    <div className="relative h-64 overflow-hidden cursor-pointer">
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                      />
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Limited 20%
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{trek.name.toUpperCase()}</h3>
                        <p className="text-white/90 text-sm">Trek</p>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-himalaya-green">{trek.price}</p>
                        <p className="text-sm text-gray-500">Starting from</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-700">{trek.duration}</p>
                        <p className="text-xs text-gray-500">Duration</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Altitude</p>
                        <p className="text-sm font-semibold text-gray-800">{trek.altitude}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Grade</p>
                        <p className="text-sm font-semibold text-gray-800">{trek.grade}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{trek.location.toUpperCase()}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {trek.season}
                      </div>
                    </div>

                    <Link 
                      to={`/trek-${trek.slug}`}
                      className="block w-full bg-himalaya-green hover:bg-himalaya-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 text-center"
                    >
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-himalaya-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Have questions or need help choosing the perfect trek? Our team is here to help you plan your Himalayan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-himalaya-green font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="tel:+917248708755"
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            >
              Call Now: +91 7248708755
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default ExploreTreks

