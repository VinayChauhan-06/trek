import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'What treks do you offer in Uttarakhand?',
      answer: 'We provide extensive treks such as Brahmatal, Kedarkantha, Nag Tibba, Phulara Ridge, Valley of Flowers, Dayara Bugyal & others.'
    },
    {
      id: 2,
      question: 'Do you organize Char Dham Yatra packages?',
      answer: 'Yes, we provide carefully crafted Char Dham Yatra packages to Yamunotri, Gangotri, Kedarnath & Badrinath, including transport, accommodations, meals & local guidance.'
    },
    {
      id: 3,
      question: 'Are your trek leaders certified & experienced?',
      answer: 'Yes! Our trek leaders are trained professionals with high-altitude experience & several years of on-ground trekking history in the Himalayas.'
    },
    {
      id: 4,
      question: 'Is prior trekking experience necessary?',
      answer: 'Absolutely not. Most of our treks are beginner-friendly.'
    },
    {
      id: 5,
      question: 'What\'s your cancellation or refund policy?',
      answer: 'Our policy is clear & flexible. Full or part refunds are issued based on the window of cancellation.'
    },
    {
      id: 6,
      question: 'Are your tours suitable for families & kids?',
      answer: 'Yes! We provide simple treks & Char Dham packages that are safe & fun for families, seniors, & children.'
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-12 md:mb-16"
        >
          FAQ
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 py-4 md:py-5 bg-white border-t border-gray-200">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

