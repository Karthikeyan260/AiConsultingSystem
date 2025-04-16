'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Career() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-pink-100 dark:from-gray-900 dark:to-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Join Our Team and Shape the Future!
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We’re looking for passionate individuals to help us build amazing products and drive innovation.
        </p>

        {/* Current Openings Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: 'Software Engineer',
              desc: 'Develop and optimize cutting-edge technologies. Passion for software design required.',
              link: '/career/software-engineer',
            },
            {
              title: 'UI/UX Designer',
              desc: 'Craft user-centered designs that improve experiences across platforms.',
              link: '/career/ui-ux-designer',
            },
            {
              title: 'Product Manager',
              desc: 'Drive product strategy and vision. Excellent leadership and problem-solving skills needed.',
              link: '/career/product-manager',
            },
          ].map((role, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">{role.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{role.desc}</p>
              </div>
              <Link href={role.link} passHref>
                <Button className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white">
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </motion.div>

        {/* Why Join Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 p-10 sm:p-12 rounded-2xl mb-16 text-white text-left max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Why Join Us?</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Innovative and Dynamic Work Environment</li>
            <li>Opportunities for Personal and Professional Growth</li>
            <li>Collaborative Culture and Work-life Balance</li>
            <li>Competitive Salary and Benefits</li>
            <li>Impactful Work that Shapes the Future</li>
          </ul>
        </motion.div>

        {/* How to Apply Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto text-left mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">How to Apply</h3>
          <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Explore our open positions above.</li>
            <li>Click the "View Details" button to read more.</li>
            <li>Submit your resume and cover letter through our portal.</li>
            <li>Our HR team will reach out if there's a match.</li>
          </ol>
        </motion.div>

        {/* Apply Button */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          <Link href="https://forms.gle/F2KPz6Pgg8EfHtrw6" target="_blank" rel="noopener noreferrer">
            <Button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg">
              Apply Now
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
