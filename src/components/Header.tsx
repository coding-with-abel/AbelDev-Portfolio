import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace('#', ''))
      let current = sections[0]
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120) {
            current = id
          }
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-900/80 backdrop-blur-md border-b border-deep-700/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 sm:h-14 md:h-16 items-center justify-between gap-3">
            <a href="#home" className="flex items-center gap-2">
              <img src="/images/abel.png" alt="Abel logo" className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-tight text-hero">
                Abel<span className="text-primary">Dev</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-xs md:text-sm font-medium transition-colors relative ${
                    active === item.href.replace('#', '')
                      ? 'text-hero'
                      : 'text-hero-muted hover:text-hero'
                  }`}
                >
                  {item.label}
                  {active === item.href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                className="md:hidden grid h-9 w-9 place-items-center rounded-lg text-hero hover:bg-white/10 transition"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 md:hidden bg-black/30 backdrop-blur-md z-40 flex flex-col"
          >
            <div className="flex justify-end p-6">
              <motion.button
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-hero hover:text-primary transition"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center flex-1 gap-4"
            >
              <nav className="flex flex-col gap-4 text-center">
                {navItems.filter(item => item.href !== '#contact').map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                    className={`text-2xl font-bold font-display transition-colors ${
                      active === item.href.replace('#', '')
                        ? 'text-primary'
                        : 'text-hero hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition mt-2"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}