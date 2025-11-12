import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const Blogs = () => {
  const [expandedBlog, setExpandedBlog] = useState(null)
  const blogs = [
    {
      id: 1,
      title: 'Best Time to Visit Kedarkantha Trek: Month-by-Month Weather & Season Guide 2025',
      date: 'October 31, 2025',
      author: 'Remote Trek',
      category: 'Trekking Guide',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      excerpt: 'Kedarkantha is one of the most popular winter treks in India, offering stunning snow-covered landscapes and 360-degree views of the Himalayas. Planning your trek at the right time is crucial for the best experience.',
      content: `
        <h2>Introduction to Kedarkantha Trek</h2>
        <p>Kedarkantha Trek, located in the Govind Wildlife Sanctuary of Uttarakhand, is a perfect winter trekking destination. Standing at 12,500 feet, this trek offers breathtaking views of snow-clad peaks including Swargarohini, Bandarpoonch, and Black Peak.</p>
        
        <h2>Best Time to Visit Kedarkantha</h2>
        <h3>December to March - Peak Winter Season</h3>
        <p>This is the ideal time for snow lovers. The entire trail is covered in pristine white snow, creating a magical winter wonderland. Temperatures range from -5°C to 10°C during the day and can drop to -15°C at night.</p>
        
        <h3>December - January</h3>
        <p>Heavy snowfall makes this period perfect for snow trekking. The trail is challenging but incredibly beautiful. Expect 2-3 feet of snow on the trail.</p>
        
        <h3>February - March</h3>
        <p>Moderate snowfall with clearer skies. This period offers the best balance between snow experience and visibility. Perfect for photography enthusiasts.</p>
        
        <h2>Weather Conditions</h2>
        <p>During winter months, you'll experience:</p>
        <ul>
          <li>Daytime temperature: 5°C to 10°C</li>
          <li>Nighttime temperature: -5°C to -15°C</li>
          <li>Snow depth: 2-4 feet</li>
          <li>Clear skies in the morning, occasional snowfall in the afternoon</li>
        </ul>
        
        <h2>What to Expect</h2>
        <p>The trek takes you through dense pine forests, frozen lakes (Juda Ka Talab), and snow-covered meadows. The summit climb is challenging but rewarding with panoramic views of the Garhwal Himalayas.</p>
        
        <h2>Preparation Tips</h2>
        <ul>
          <li>Carry proper winter gear including thermal wear, waterproof jackets, and snow boots</li>
          <li>Acclimatize properly before the trek</li>
          <li>Stay hydrated and carry energy bars</li>
          <li>Follow your guide's instructions carefully</li>
        </ul>
      `
    },
    {
      id: 2,
      title: 'Kedarkantha Summit Guide: Height, Altitude, Temperature, and Sunrise Views',
      date: 'October 27, 2025',
      author: 'Remote Trek',
      category: 'Trekking Guide',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
      excerpt: 'Reaching the Kedarkantha summit at 12,500 feet is a dream for many trekkers. This comprehensive guide covers everything you need to know about the summit experience, including altitude, temperature, and the spectacular sunrise views.',
      content: `
        <h2>Kedarkantha Summit Overview</h2>
        <p>The Kedarkantha summit stands at an impressive altitude of 12,500 feet (3,810 meters) above sea level. Located in the Uttarkashi district of Uttarakhand, this peak offers one of the most accessible summit experiences in the Indian Himalayas.</p>
        
        <h2>Altitude and Height Details</h2>
        <ul>
          <li><strong>Base Camp (Sankri):</strong> 6,400 feet</li>
          <li><strong>Juda Ka Talab:</strong> 9,100 feet</li>
          <li><strong>Kedarkantha Base Camp:</strong> 11,250 feet</li>
          <li><strong>Kedarkantha Summit:</strong> 12,500 feet</li>
        </ul>
        
        <h2>Temperature at Summit</h2>
        <p>During winter months (December to March):</p>
        <ul>
          <li><strong>Daytime:</strong> 0°C to 5°C (with wind chill, feels like -5°C)</li>
          <li><strong>Nighttime:</strong> -10°C to -20°C</li>
          <li><strong>Early Morning (Summit Time):</strong> -5°C to -15°C</li>
        </ul>
        
        <h2>The Summit Climb</h2>
        <p>The summit climb typically starts at 3:00 AM from the base camp. The 4-5 hour climb takes you through:</p>
        <ol>
          <li>Steep snow-covered slopes</li>
          <li>Ridge walk with stunning views</li>
          <li>Final ascent to the summit</li>
        </ol>
        
        <h2>Sunrise Views from Summit</h2>
        <p>The sunrise from Kedarkantha summit is absolutely magical. As the sun rises, you'll witness:</p>
        <ul>
          <li>360-degree panoramic views of the Himalayas</li>
          <li>Peaks including Swargarohini (6,250m), Bandarpoonch (6,316m), and Black Peak (6,387m)</li>
          <li>Golden hour lighting on snow-covered peaks</li>
          <li>Stunning cloud formations in the valleys below</li>
        </ul>
        
        <h2>Best Time for Summit</h2>
        <p>Reach the summit by 6:00 AM to catch the sunrise. The golden hour (6:00 AM - 7:00 AM) offers the best lighting for photography.</p>
        
        <h2>Safety Tips</h2>
        <ul>
          <li>Start the climb early to avoid afternoon weather changes</li>
          <li>Carry headlamps and extra batteries</li>
          <li>Wear proper crampons for snow trekking</li>
          <li>Stay with your group and guide</li>
          <li>Monitor for altitude sickness symptoms</li>
        </ul>
      `
    },
    {
      id: 3,
      title: 'Best Winter Treks in Uttarakhand: A Complete Guide for 2025',
      date: 'October 17, 2025',
      author: 'Remote Trek',
      category: 'Trekking Guide',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
      excerpt: 'Uttarakhand offers some of the most spectacular winter trekking experiences in India. From snow-covered trails to frozen lakes, discover the best winter treks that will leave you spellbound.',
      content: `
        <h2>Why Winter Trekking in Uttarakhand?</h2>
        <p>Uttarakhand transforms into a winter wonderland from December to March. The snow-covered trails, frozen lakes, and clear blue skies create an unforgettable trekking experience. Winter treks here are perfect for both beginners and experienced trekkers.</p>
        
        <h2>Top Winter Treks in Uttarakhand</h2>
        
        <h3>1. Kedarkantha Trek</h3>
        <p><strong>Duration:</strong> 5 Days | <strong>Altitude:</strong> 12,500 ft | <strong>Difficulty:</strong> Moderate</p>
        <p>One of the most popular winter treks, Kedarkantha offers stunning 360-degree views and a perfect summit experience. The trail passes through dense pine forests and snow-covered meadows.</p>
        
        <h3>2. Dayara Bugyal Trek</h3>
        <p><strong>Duration:</strong> 6 Days | <strong>Altitude:</strong> 12,000 ft | <strong>Difficulty:</strong> Moderate</p>
        <p>Known for its vast alpine meadows covered in snow, Dayara Bugyal is a paradise for nature lovers. The trek offers breathtaking views of the Bandarpoonch and Srikanth peaks.</p>
        
        <h3>3. Chopta Tungnath Trek</h3>
        <p><strong>Duration:</strong> 3 Days | <strong>Altitude:</strong> 12,073 ft | <strong>Difficulty:</strong> Easy</p>
        <p>Perfect for beginners, this trek takes you to the highest Shiva temple in the world. The winter snow makes it even more beautiful and accessible.</p>
        
        <h3>4. Nag Tibba Trek</h3>
        <p><strong>Duration:</strong> 2 Days | <strong>Altitude:</strong> 9,915 ft | <strong>Difficulty:</strong> Easy</p>
        <p>The shortest winter trek near Mussoorie, Nag Tibba is perfect for weekend getaways. It offers stunning views of the snow-clad Himalayas.</p>
        
        <h2>What Makes Winter Treks Special?</h2>
        <ul>
          <li><strong>Snow-covered landscapes:</strong> Experience pristine white snow throughout the trail</li>
          <li><strong>Clear skies:</strong> Better visibility and stunning sunrise/sunset views</li>
          <li><strong>Fewer crowds:</strong> More peaceful and intimate trekking experience</li>
          <li><strong>Photography:</strong> Perfect lighting and dramatic landscapes</li>
        </ul>
        
        <h2>Essential Winter Trekking Gear</h2>
        <ul>
          <li>Layered clothing (thermal wear, fleece, waterproof jacket)</li>
          <li>Waterproof trekking boots with good grip</li>
          <li>Woolen socks and gloves</li>
          <li>Headlamp with extra batteries</li>
          <li>Trekking poles</li>
          <li>Sleeping bag rated for -10°C</li>
        </ul>
        
        <h2>Safety Considerations</h2>
        <p>Winter trekking requires extra precautions:</p>
        <ul>
          <li>Always trek with experienced guides</li>
          <li>Check weather forecasts before starting</li>
          <li>Carry emergency supplies and first aid kit</li>
          <li>Stay hydrated and eat energy-rich foods</li>
          <li>Inform someone about your trekking plans</li>
        </ul>
      `
    },
    {
      id: 4,
      title: 'Valley of Flowers: A UNESCO World Heritage Site in Uttarakhand',
      date: 'September 15, 2025',
      author: 'Remote Trek',
      category: 'Destination Guide',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80',
      excerpt: 'Discover the magical Valley of Flowers, a UNESCO World Heritage Site that blooms with over 500 species of alpine flowers during monsoon. This natural wonder in Uttarakhand is a paradise for nature enthusiasts and photographers.',
      content: `
        <h2>Introduction to Valley of Flowers</h2>
        <p>The Valley of Flowers National Park, located in the Chamoli district of Uttarakhand, is a UNESCO World Heritage Site known for its stunning alpine meadows and diverse flora. Spread over 87.5 square kilometers, this valley comes alive with vibrant colors during the monsoon season.</p>
        
        <h2>Best Time to Visit</h2>
        <p>The valley is accessible from June to October, but the best time to witness the flowers in full bloom is:</p>
        <ul>
          <li><strong>July:</strong> Early bloomers start appearing</li>
          <li><strong>August:</strong> Peak blooming season with maximum variety</li>
          <li><strong>September:</strong> Late bloomers and seed formation</li>
        </ul>
        
        <h2>Flora and Fauna</h2>
        <h3>Flowers</h3>
        <p>The valley is home to over 500 species of flowers including:</p>
        <ul>
          <li>Brahma Kamal (Saussurea obvallata) - the state flower of Uttarakhand</li>
          <li>Blue Poppy (Meconopsis aculeata)</li>
          <li>Himalayan Cobra Lily</li>
          <li>Primulas, Anemones, and many more</li>
        </ul>
        
        <h3>Wildlife</h3>
        <p>The park is also home to various wildlife including:</p>
        <ul>
          <li>Snow Leopard</li>
          <li>Himalayan Black Bear</li>
          <li>Musk Deer</li>
          <li>Various species of birds</li>
        </ul>
        
        <h2>Trekking Route</h2>
        <p>The trek to Valley of Flowers starts from Govindghat:</p>
        <ol>
          <li><strong>Govindghat to Ghangaria:</strong> 14 km (6-7 hours)</li>
          <li><strong>Ghangaria to Valley of Flowers:</strong> 5 km (3-4 hours)</li>
          <li><strong>Explore the valley:</strong> Full day exploration</li>
        </ol>
        
        <h2>Combined with Hemkund Sahib</h2>
        <p>Most trekkers combine the Valley of Flowers trek with a visit to Hemkund Sahib, a sacred Sikh pilgrimage site located at 14,400 feet. The lake and gurudwara offer a spiritual experience along with stunning mountain views.</p>
        
        <h2>Photography Tips</h2>
        <ul>
          <li>Visit early morning for best lighting</li>
          <li>Carry macro lens for flower close-ups</li>
          <li>Respect the environment - don't pluck flowers</li>
          <li>Capture the valley from different angles</li>
        </ul>
        
        <h2>Conservation Efforts</h2>
        <p>The Valley of Flowers is a protected area. Visitors must:</p>
        <ul>
          <li>Obtain permits from the Forest Department</li>
          <li>Follow designated trails only</li>
          <li>Carry back all waste</li>
          <li>Respect the fragile ecosystem</li>
        </ul>
        
        <h2>What to Carry</h2>
        <ul>
          <li>Rain gear (monsoon season)</li>
          <li>Good trekking shoes</li>
          <li>Camera and extra batteries</li>
          <li>Water and snacks</li>
          <li>First aid kit</li>
        </ul>
      `
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
            alt="Blogs"
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
                Our Blogs
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Discover expert guides, trekking tips, and stories from the Himalayas. Learn about the best times to visit, what to expect, and how to prepare for your next adventure in Uttarakhand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="cursor-pointer"
                  onClick={() => setExpandedBlog(expandedBlog === blog.id ? null : blog.id)}
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-himalaya-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{blog.author}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-himalaya-green transition-colors duration-300">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center text-himalaya-green font-bold hover:text-himalaya-green-dark transition-colors duration-300">
                      <span>{expandedBlog === blog.id ? 'Read Less' : 'Read More'}</span>
                      <svg 
                        className={`w-5 h-5 ml-2 transition-transform duration-300 ${expandedBlog === blog.id ? 'rotate-90' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedBlog === blog.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div 
                        className="px-6 pb-6 text-gray-700 leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ 
                          __html: blog.content
                            .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-4">')
                            .replace(/<h3>/g, '<h3 class="text-xl font-bold text-gray-900 mt-5 mb-3">')
                            .replace(/<p>/g, '<p class="mb-4">')
                            .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
                            .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 space-y-2">')
                            .replace(/<li>/g, '<li class="ml-4">')
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-himalaya-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Explore our trekking packages and start planning your Himalayan journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore-treks"
              className="px-8 py-4 bg-white text-himalaya-green font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Treks
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Blogs

