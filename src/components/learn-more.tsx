// filepath: c:\Users\Manish\Downloads\Ai-main - Copy\Ai-main\src\components\learn-more.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Learnmore() {
  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Your Smart AI Consultant
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Empower your business with real-time insights, predictive analytics, and AI-driven decisions tailored to your goals.
          </p>
          <Link href="/signup">
            <Button className="px-8 py-3 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-12"
        >
          <Image
            src="/images/ai-dashboard.png"
            alt="AI Dashboard"
            width={800}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </section>
    </main>
  );
}