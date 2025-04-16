"use client";

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'AI Strategy',
      description:
        'Develop a comprehensive AI roadmap aligned with your business goals. From opportunity identification to implementation plans, we guide you every step of the way.',
      color: 'from-pink-400 via-red-500 to-yellow-500',
    },
    {
      title: 'Data Analytics',
      description:
        'Transform raw data into actionable insights. Our analytics services uncover trends, optimize performance, and support data-driven decisions.',
      color: 'from-blue-400 via-indigo-500 to-purple-600',
    },
    {
      title: 'Machine Learning',
      description:
        'Implement smart algorithms that learn from data to automate tasks and uncover patterns. From supervised learning to deep neural networks, we have you covered.',
      color: 'from-teal-400 via-cyan-500 to-blue-500',
    },
    {
      title: 'Process Automation',
      description:
        'Streamline operations using AI-powered automation. Boost efficiency and accuracy in repetitive business tasks, reducing costs and increasing speed.',
      color: 'from-green-400 via-lime-500 to-yellow-500',
    },
    {
      title: 'Natural Language Processing',
      description:
        'Enable your systems to understand and generate human language. Our NLP solutions enhance customer support, content analysis, and sentiment detection.',
      color: 'from-purple-500 via-pink-500 to-red-500',
    },
  ];

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text">
          Our AI Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          Discover how our specialized services can help your business harness the true power of AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-xl p-6 bg-gradient-to-br ${service.color} text-white hover:scale-105 transition-transform`}
          >
            <h3 className="text-2xl font-semibold mb-4 border-b border-white/30 pb-2">
              {service.title}
            </h3>
            <p className="text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
