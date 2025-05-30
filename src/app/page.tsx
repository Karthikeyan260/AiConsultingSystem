"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import {
  SectionIcon as Section,
  Heart,
  Currency,
  ShoppingCart,
  Star,
  Globe,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Logo from "@/components/logo"

import { AuthNav } from '@/components/auth-nav'


export default function Home() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      text: "AI Consulting System transformed our business with their AI solutions. The insights provided were game-changing for our strategy!",
      author: "John Doe",
      position: "CEO, TechInnovate",
    },
    {
      text: "Their expertise in AI consulting is unmatched. We saw immediate results and continue to benefit from their guidance.",
      author: "Jane Smith",
      position: "CTO, FutureTech",
    },
    {
      text: "The team at AI Consulting System is professional and delivers on their promises. Our ROI has increased by 40% since implementation.",
      author: "Mark Wilson",
      position: "CFO, GlobalFinance",
    },
  ]

  useEffect(() => {
    setIsMounted(true)

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: domainsRef, inView: domainsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  if (!isMounted) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Logo className="h-10 w-10" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              AI Consulting System
            </h1>
          </div>

          <AuthNav />

          <div className="space-x-4">
            <Button
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
              onClick={() => router.push("/sign-up")}
            >
              Sign Up
            </Button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-teal-400/20 animate-gradient-shift"></div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              <Sparkles className="mr-1 h-4 w-4" /> AI-Powered Solutions
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming Business <br className="hidden md:block" />
            With AI Consulting
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Empowering businesses with cutting-edge AI-driven consulting solutions that deliver measurable results and
            strategic advantages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
              onClick={() => router.push("/get-started")}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10"
              onClick={() => router.push("/learn-more")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20 bg-gradient-to-b from-background/50 to-background"
        variants={containerVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI consulting services are designed to give your business the competitive edge it needs in today's
              digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Our AI solutions are tailored for businesses worldwide, with expertise in regional markets and global
                trends.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Work with industry-leading AI experts who bring decades of combined experience to solve your business
                challenges.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-6">
                <Star className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Delivering measurable success for our clients with data-driven strategies and implementation support.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Domain Cards */}
      <motion.section
        ref={domainsRef}
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate={domainsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Explore Our Domains
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI consulting services across multiple industries to address your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants}>
              <Card
                className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer"
                onClick={() => router.push("/domains/education")}
              >
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                      <Section className="h-5 w-5" />
                    </div>
                    <CardTitle>Education</CardTitle>
                  </div>
                  <CardDescription>AI consulting for the education sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore innovative teaching methods, personalized learning platforms, and effective educational
                    strategies powered by AI.
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer"
                onClick={() => router.push("/domains/healthcare")}
              >
                <div className="h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 group-hover:bg-red-200 dark:group-hover:bg-red-800/40 transition-colors">
                      <Heart className="h-5 w-5" />
                    </div>
                    <CardTitle>Healthcare</CardTitle>
                  </div>
                  <CardDescription>AI consulting for the healthcare sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimize patient care, improve diagnostic accuracy, and explore advancements in medical treatments
                    through AI.
                  </p>
                  <div className="mt-4 flex items-center text-red-600 dark:text-red-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer"
                onClick={() => router.push("/domains/finance")}
              >
                <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-colors">
                      <Currency className="h-5 w-5" />
                    </div>
                    <CardTitle>Finance</CardTitle>
                  </div>
                  <CardDescription>AI consulting for the finance sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make informed investment decisions, detect fraud, and navigate complex financial landscapes with
                    AI-powered insights.
                  </p>
                  <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card
                className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer"
                onClick={() => router.push("/domains/retail")}
              >
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <CardTitle>Retail</CardTitle>
                  </div>
                  <CardDescription>AI consulting for the retail sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enhance customer experience, optimize inventory management, and streamline retail operations with AI
                    solutions.
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Author Info Section */}
      <section className="py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of AI experts brings years of experience and innovation to help your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Author 1 */}
            <div className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/140727545?v=4"
                alt="Author 1"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Karthikeyan</h3>
              <p className="text-sm text-muted-foreground mb-4">FullStack Developer</p>
              <p className="text-muted-foreground">
                Karthikeyan specializes in AI strategy and implementation, helping businesses achieve their goals with cutting-edge solutions.
              </p>
            </div>

            {/* Author 2 */}
            <div className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/142210572?v=4"
                alt="Author 2"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Gokul </h3>
              <p className="text-sm text-muted-foreground mb-4">Data Scientist</p>
              <p className="text-muted-foreground">
                Gokul has over a decade of experience in data analytics and machine learning, delivering actionable insights for clients.
              </p>
            </div>

            {/* Author 3 */}
            <div className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <img
                src="https://raw.githubusercontent.com/Karthikeyan260/memory-game/refs/heads/main/5.png"
                alt="Author 3"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-xl mb-2"> Murugadass</h3>
              <p className="text-sm text-muted-foreground mb-4">UI&UX Designer</p>
              <p className="text-muted-foreground">
                Murugadass designs and implements AI-driven solutions tailored to meet the unique needs of businesses across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Author Info Section */}
<section className="py-20 bg-gradient-to-b from-background/50 to-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Meet Our Team
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Our team of AI experts brings years of experience and innovation to help your business succeed.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Author 1 */}
      <div className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
        <img
          src="https://avatars.githubusercontent.com/u/140727545?v=4"
          alt="Author 1"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">Karthikeyan</h3>
        <p className="text-sm text-muted-foreground mb-4">FullStack Developer</p>
        <p className="text-muted-foreground">
          Karthikeyan specializes in AI strategy and implementation, helping businesses achieve their goals with cutting-edge solutions.
        </p>
      </div>

      {/* Author 2 */}
      <div className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
        <img
          src="https://avatars.githubusercontent.com/u/142210572?v=4"
          alt="Author 2"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">Gokul </h3>
        <p className="text-sm text-muted-foreground mb-4">Data Scientist</p>
        <p className="text-muted-foreground">
          Gokul has over a decade of experience in data analytics and machine learning, delivering actionable insights for clients.
        </p>
      </div>

      {/* Author 3 */}
      <div className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300">
        <img
          src="https://raw.githubusercontent.com/Karthikeyan260/memory-game/refs/heads/main/5.png"
          alt="Author 3"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="font-semibold text-xl mb-2"> Murugadass</h3>
        <p className="text-sm text-muted-foreground mb-4">UI&UX Designer</p>
        <p className="text-muted-foreground">
        Murugadass designs and implements AI-driven solutions tailored to meet the unique needs of businesses across industries.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our AI consulting services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg border border-border/50 p-8 md:p-12">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 blur-2xl"></div>

              <div className="relative">
                <div className="mb-6 text-4xl text-primary">"</div>

                <div className="min-h-[120px]">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: activeTestimonial === index ? 1 : 0,
                        x: activeTestimonial === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                      style={{ display: activeTestimonial === index ? "block" : "none" }}
                    >
                      <p className="text-lg md:text-xl italic text-foreground/90 mb-6">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        activeTestimonial === index ? "w-8 bg-primary" : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of businesses that have already revolutionized their operations with our AI consulting
                services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  onClick={() => router.push("/contact")}
                >
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => router.push("/case-studies")}
                >
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-background/80 to-background border-t border-border/50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo  className="h-8 w-8" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  AI Consulting System
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering businesses with AI-driven consulting solutions that deliver measurable results.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/15Bk7cXKRy/" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/karthikeyan-k-b41509258"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/Karthikeyan260"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="service" className="text-muted-foreground hover:text-primary transition-colors">
                    AI Strategy
                  </a>
                </li>
                <li>
                  <a href="service" className="text-muted-foreground hover:text-primary transition-colors">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a href="service" className="text-muted-foreground hover:text-primary transition-colors">
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a href="service" className="text-muted-foreground hover:text-primary transition-colors">
                    Process Automation
                  </a>
                </li>
                <li>
                  <a href="service" className="text-muted-foreground hover:text-primary transition-colors">
                    Natural Language Processing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/domains/education" className="text-muted-foreground hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="/domains/healthcare" className="text-muted-foreground hover:text-primary transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="/domains/finance" className="text-muted-foreground hover:text-primary transition-colors">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="/domains/retail" className="text-muted-foreground hover:text-primary transition-colors">
                    Retail
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Manufacturing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="contact" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="career" className="text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Consulting System. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="policies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
