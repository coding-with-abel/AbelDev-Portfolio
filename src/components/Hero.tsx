import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const cards = [
  {
    style: 'bg-deep-900/50 border border-deep-700 overflow-hidden',
    initial: { opacity: 0, rotate: -6 },
    hover: { rotate: 0 },
    height: 'h-56 sm:h-64',
    image: '/images/jelegs-screenshot.png',
  },
  {
    style: 'bg-gradient-to-br from-primary/20 to-transparent border border-primary/30',
    initial: { opacity: 0, y: 32 },
    hover: { y: 16 },
    height: 'h-72 sm:h-80',
  },
  {
    style: 'bg-deep-900/50 border border-deep-700 overflow-hidden',
    initial: { opacity: 0, y: -16 },
    hover: { y: 0 },
    height: 'h-44 sm:h-48',
    image: '/images/food-delivery-screenshot.png',
  },
  {
    style: 'bg-deep-900/50 border border-deep-700 overflow-hidden',
    initial: { opacity: 0, rotate: 6 },
    hover: { rotate: 0 },
    height: 'h-56 sm:h-64',
    image: '/images/hotel-booking-screenshot.png',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="bg-deep-fade relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold font-display tracking-tight text-hero leading-[1.1]"
            >
              Crafting the{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                future
              </span>{' '}
              of web.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-hero-muted max-w-xl leading-relaxed"
            >
              A full-stack developer specializing in building high-performance
              applications with modern architecture and exceptional design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-deep-800/50 border border-deep-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-hero hover:bg-deep-800 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={card.initial}
                whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                viewport={{ once: true }}
                whileHover={card.hover}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`${card.height} rounded-2xl shadow-2xl backdrop-blur-sm transition-colors ${card.style}`}
              >
                {card.image ? (
                  <img
                    src={card.image}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}