import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Best trekking Company in Uttarakhand
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                At Remote Trek, we are proud to be known as one of the best trekking company in Dehradun. We have completed <strong>more than 300+ treks successfully</strong> with the people all over India and abroad in last 10 years. At Remote Trek, we believe that every trek is more than just a journey; it's an immersion in nature, culture & the self. We offer unforgettable Himalayan treks for beginners & experienced trekkers alike.
              </p>
              
              <p>
                From snow-covered peaks to peaceful valleys, our treks are guided by trained local guides who look after your safety, comfort & provides you a real mountain experience. With no hidden costs, small group size & one-to-one support, we make trekking accessible & enjoyable for everyone.
              </p>
              
              <p>
                So whether you're eyeing the iconic Valley of Flowers or planning for the Kedarkantha trek, we are your trusted adventure partner.
              </p>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Person trekking through a beautiful mountainous landscape"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

