'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-pink-100 dark:from-gray-900 dark:to-gray-950 py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Get In Touch With Us!
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          We’re here to help! If you have any questions, feedback, or want to discuss an exciting opportunity, don’t hesitate to
          reach out. Fill out the contact form, and we’ll get back to you as soon as possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center mb-12"
        >
          <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 p-6 rounded-xl shadow-lg max-w-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">We Value Your Feedback</h3>
            <p className="text-sm sm:text-base text-white opacity-90">
              Your thoughts matter to us. Whether you're sharing your experience, asking for support, or just saying hello, we're
              all ears! Let us know how we can serve you better.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
        >
          We’re committed to providing you with excellent service, whether it’s assisting with a question, providing information
          about our services, or just connecting for collaboration. Let’s talk soon!
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mb-8"
        >
          <Link
            href="https://forms.gle/F2KPz6Pgg8EfHtrw6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-8 py-3 text-white text-lg bg-blue-600 hover:bg-blue-700 transition-all rounded-xl shadow-lg">
              Go to Contact Form
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-500 dark:text-gray-300"
        >
          <p className="text-sm sm:text-base">
            Or reach us directly at <span className="text-blue-600">kartji005@gmail.com</span> for more immediate inquiries.
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}
