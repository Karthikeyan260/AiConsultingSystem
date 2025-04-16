'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-pink-100 dark:from-gray-900 dark:to-gray-950 py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
          Our Blog: Insights & Updates
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Stay updated with the latest trends, tips, and AI innovations. Our blog covers insights, strategies, and practical advice
          on leveraging artificial intelligence for businesses.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Blog Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">AI for Business Transformation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Discover how artificial intelligence can accelerate your business processes, streamline operations, and increase
              productivity. Learn how to integrate AI into your business strategy for long-term success.
            </p>
            <Link
              href="/blog/ai-for-business-transformation"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </motion.div>

          {/* Blog Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Data Analytics in 2025</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The future of data analytics in 2025 is poised for innovation. Explore the emerging tools and technologies reshaping
              the analytics landscape, and how your business can leverage them for actionable insights.
            </p>
            <Link
              href="/blog/data-analytics-in-2025"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </motion.div>

          {/* Blog Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">The Rise of Machine Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Machine Learning (ML) is revolutionizing various industries. In this blog, we dive deep into the latest advancements
              in ML and how they are reshaping automation, decision-making, and customer experience.
            </p>
            <Link
              href="/blog/rise-of-machine-learning"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </motion.div>

          {/* Blog Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">AI in Healthcare: A Revolution</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Learn how AI is transforming the healthcare sector — from improving diagnostic accuracy to enabling personalized
              treatments. This post outlines key trends in AI-driven healthcare advancements.
            </p>
            <Link
              href="/blog/ai-in-healthcare"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </motion.div>

          {/* Blog Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Natural Language Processing: Unlocking Human-AI Communication</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Natural Language Processing (NLP) is revolutionizing how humans interact with machines. This post explores how NLP
              enhances customer experience, chatbots, and content creation using AI.
            </p>
            <Link
              href="/blog/nlp-human-ai-communication"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </motion.div>

          {/* Blog Card 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Automating Business with AI</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Business automation through AI is rapidly changing the way companies operate. This post covers the benefits of
              automating business processes and how AI can increase efficiency and reduce costs.
            </p>
            <Link
              href="/blog/automating-business-with-ai"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-sm text-gray-600 dark:text-gray-400"
        >
          Want to stay updated? Subscribe to our newsletter for the latest blog posts and AI-related news.
        </motion.p>
      </motion.div>
    </section>
  )
}
