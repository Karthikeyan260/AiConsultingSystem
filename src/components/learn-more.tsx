'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, BookOpenCheck, Rocket } from 'lucide-react'

export default function LearnMore() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-950 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Discover the Power of AI-Driven Consulting
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          Our AI consulting system isn’t just a tool — it's a smart companion that helps you navigate the complexities of modern decision-making.
          From strategic insights to predictive analytics, learn how artificial intelligence is reshaping industries, boosting efficiency,
          and unlocking opportunities for innovation.
        </p>

        {/* Animated Color Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              Icon: BrainCircuit,
              title: 'Smart Intelligence',
              desc: 'Our system uses natural language processing, deep learning, and real-time analysis to deliver sharp, actionable insights — faster than ever.',
              color: 'from-pink-400 to-red-500'
            },
            {
              Icon: Rocket,
              title: 'Accelerated Growth',
              desc: 'Leverage AI to automate your workflow, streamline operations, and focus your team’s time on what truly matters — growing your impact.',
              color: 'from-yellow-400 to-orange-500'
            },
            {
              Icon: BookOpenCheck,
              title: 'Data-Backed Decisions',
              desc: 'Every recommendation is backed by solid data. Gain full transparency with interactive dashboards and explainable AI support.',
              color: 'from-green-400 to-teal-500'
            }
          ].map(({ Icon, title, desc, color }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className={`bg-gradient-to-br ${color} text-white p-6 rounded-2xl shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-7 h-7 text-white" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-sm opacity-90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
