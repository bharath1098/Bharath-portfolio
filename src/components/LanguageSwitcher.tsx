import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
]

function matchesLang(current: string, code: string) {
  return current === code || current.startsWith(`${code}-`)
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find((l) => matchesLang(i18n.language, l.code)) ?? languages[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-ag-sage/40 bg-white/10 backdrop-blur-sm text-sm font-medium text-ag-foreground hover:bg-ag-gold/20 transition-colors"
        aria-label="Change language"
      >
        <Globe size={16} className="text-ag-sage" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 end-0 ag-card overflow-hidden z-50 min-w-[140px] shadow-lg"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-ag-secondary transition-colors ${
                  matchesLang(i18n.language, lang.code)
                    ? 'bg-ag-gold/15 text-ag-emerald font-semibold'
                    : 'text-ag-forest'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
