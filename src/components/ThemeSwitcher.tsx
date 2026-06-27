import { useState, useRef, useEffect } from 'react'
import { Palette, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { themes, type ThemeId } from '../themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = themes.find((t) => t.id === theme) ?? themes[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const pick = (id: ThemeId) => {
    setTheme(id)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-ag-sage/40 bg-white/10 backdrop-blur-sm text-sm font-medium text-ag-foreground hover:bg-ag-gold/20 transition-colors"
        aria-label="Change color theme"
      >
        <Palette size={16} className="text-ag-sage" />
        <span
          className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0"
          style={{ backgroundColor: current.swatch }}
        />
        <span className="hidden sm:inline">{current.label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 end-0 ag-card overflow-hidden z-50 min-w-[180px] max-h-72 overflow-y-auto shadow-lg"
          >
            <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-ag-muted sticky top-0 bg-ag-card">
              Color Theme
            </p>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => pick(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-ag-secondary transition-colors ${
                  theme === t.id ? 'bg-ag-gold/10 text-ag-forest font-semibold' : 'text-ag-forest'
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full border border-ag-border shrink-0"
                  style={{ backgroundColor: t.swatch }}
                />
                <span className="flex-1 text-start">{t.label}</span>
                {theme === t.id && <Check size={16} className="text-ag-gold shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
