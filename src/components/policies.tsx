'use client'

import { motion } from 'framer-motion'

export default function Policy() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-indigo-100 dark:from-gray-900 dark:to-gray-950 py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">
          Our Policies
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
          Transparency, trust, and user data protection are core to our mission. Here's how we handle your privacy, terms, and cookies.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 text-left">
          {/* Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Privacy Policy</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
              <li>🔒 Your data is safe with us — no sharing or selling.</li>
              <li>📧 We only collect essential info, with your consent.</li>
              <li>🗑️ You can request deletion of your data anytime.</li>
              <li>🔍 We use your data only to improve our services.</li>
            </ul>
          </motion.div>

          {/* Terms of Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Terms of Service</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
              <li>✅ Use our services responsibly and lawfully.</li>
              <li>⚠️ Unauthorized use or access is prohibited.</li>
              <li>🚫 We may restrict access for policy violations.</li>
              <li>🧠 All shared content remains your property.</li>
            </ul>
          </motion.div>

          {/* Cookie Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Cookie Policy</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
              <li>🍪 We use cookies to improve site experience.</li>
              <li>📊 Analytics cookies help us serve you better.</li>
              <li>🎯 Marketing cookies personalize your journey.</li>
              <li>⚙️ You can manage preferences anytime.</li>
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-sm text-gray-600 dark:text-gray-400"
        >
          Questions or concerns? Email us at <span className="text-blue-600 dark:text-blue-400 font-medium">kartji005@gmail.com</span>
        </motion.p>
      </motion.div>
    </section>
  )
}
