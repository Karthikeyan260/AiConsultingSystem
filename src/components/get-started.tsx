'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get Started with Your AI Consultant
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Welcome to your intelligent partner in decision-making. Our AI Consultant system is designed to help businesses, professionals, and teams make smarter, faster decisions by providing automated insights, strategy recommendations, and predictive analytics — all powered by artificial intelligence.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
          Whether you're looking to optimize workflows, analyze complex data, or personalize your client interactions, our AI Consultant adapts to your goals and helps you succeed in the digital age. Easy to integrate, secure, and always learning to serve you better.
        </p>
        <Link href="/signup">
          <Button className="px-8 py-3 text-white text-lg bg-blue-600 hover:bg-blue-700 transition rounded-xl">
            Get Started
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
