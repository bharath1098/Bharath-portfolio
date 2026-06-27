import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'details', href: '#details' },
  { key: 'career', href: '#career' },
  { key: 'family', href: '#family' },
  { key: 'preferences', href: '#preferences' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-ag-sidebar/95 backdrop-blur-md shadow-sm border-ag-border/20 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="font-serif text-xl font-semibold text-white">
          <span className="gold-gradient">Portfolio</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-ag-foreground/80 hover:text-ag-sage transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-ag-sidebar/98 backdrop-blur-md border-t border-ag-border/20"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-ag-foreground/80 hover:text-ag-sage py-2 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
