'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-950 py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400 mb-6 animate-pulse">
          Kickstart Your Journey with AI-Driven Consulting
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Imagine having a partner that understands your business needs and delivers personalized insights and strategies. Our AI
          Consultant is designed to transform the way you work, offering solutions that accelerate growth, enhance decision-making, and
          streamline processes with ease.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:grid sm:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white py-6 px-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Smarter Decision-Making</h3>
            <p className="text-sm sm:text-base">
              Our AI Consultant analyzes complex data and generates insightful recommendations. With real-time predictive analytics,
              it empowers businesses to make data-backed decisions with confidence.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white py-6 px-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Boost Team Productivity</h3>
            <p className="text-sm sm:text-base">
              Optimize workflows and minimize inefficiencies. Our AI Consultant helps streamline processes, automate mundane tasks,
              and allow your team to focus on what really matters — creativity and innovation.
            </p>
          </div>
          <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-6 px-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Data-Driven Personalization</h3>
            <p className="text-sm sm:text-base">
              Deliver tailored experiences to your clients with AI-driven insights. From personalized content to customized strategies,
              our system learns from your data to make every interaction smarter.
            </p>
          </div>
        </motion.div>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Whether you're a startup looking to scale or a large organization aiming to stay ahead of the curve, our AI Consultant
          adapts to your goals, ensures seamless integration, and helps you thrive in the digital landscape.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="https://aiconsultingsystem.netlify.app/" >
            <Button className="px-8 py-3 text-white text-lg bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all rounded-xl shadow-lg">
              Get Started Now
            </Button>
          </Link>
        </motion.div>

        <p className="mt-10 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Still have questions? Reach out to us anytime! We're here to guide you every step of the way. Let's build a smarter
          future together.
        </p>
      </motion.div>
    </section>
  )
}
