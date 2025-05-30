'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Users, Quote, FileText } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CaseStudy() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AI-Driven Consulting System Case Study
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Discover how <span className="font-semibold text-blue-600 dark:text-blue-400">OptiCore Technologies</span> revolutionized their strategy operations using our intelligent AI platform — driving growth, reducing delays, and improving client engagement.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
          {[{
            Icon: Lightbulb,
            title: 'Smart Insights',
            desc: 'Real-time dashboards enabled instant access to performance metrics and trends.'
          }, {
            Icon: TrendingUp,
            title: 'Predictive Analytics',
            desc: 'ML-driven forecasting helped improve planning and reduce operational bottlenecks.'
          }, {
            Icon: Users,
            title: 'Enhanced Personalization',
            desc: 'AI suggested custom strategies per client profile, improving retention by 13%.'
          }].map(({ Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <Icon className="text-blue-600 dark:text-blue-400 mt-1 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg grid md:grid-cols-2 gap-6 text-left mb-16">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Before AI</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside leading-relaxed">
              <li>Manual data processing took 20+ hours per week</li>
              <li>Forecasting accuracy capped at 62%</li>
              <li>Delayed decision cycles (up to 5 days)</li>
              <li>Customer satisfaction at 78%</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">After AI</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside leading-relaxed">
              <li>90% reduction in reporting time</li>
              <li>Forecast accuracy reached 89%</li>
              <li>Real-time insights reduced decision time to 1 day</li>
              <li>Customer satisfaction rose to 91%</li>
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-blue-100 dark:bg-blue-900/20 text-gray-800 dark:text-gray-100 p-6 rounded-xl max-w-3xl mx-auto shadow-md relative mb-12"
        >
          <Quote className="absolute top-4 left-4 text-blue-500 dark:text-blue-400 w-6 h-6" />
          <p className="italic text-md mb-4 pl-10 leading-relaxed">
            “We didn’t just upgrade our tools — we upgraded our thinking. The AI system has been our secret weapon for proactive decision-making.”
          </p>
          <p className="font-semibold text-blue-700 dark:text-blue-400">— Ravi Prasad, COO, OptiCore Technologies</p>
        </motion.div>

        {/* CTA */}
        <Link href="/case-study-report" passHref>
          <Button className="px-8 py-3 text-white text-lg bg-blue-600 hover:bg-blue-700 transition rounded-xl inline-flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Read Full Report
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
