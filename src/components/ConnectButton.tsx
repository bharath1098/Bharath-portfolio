import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Images, Phone, X } from 'lucide-react'
import profile from '../data/profile.json'
import { WhatsAppIcon, InstagramIcon } from './SocialIcons'

type MenuItem = {
  id: string
  href: string
  labelKey: string
  className: string
  icon: ReactNode
  external?: boolean
}

const connectItems: MenuItem[] = [
  {
    id: 'whatsapp',
    href: `https://wa.me/${profile.whatsapp}`,
    external: true,
    labelKey: 'whatsapp.label',
    className: 'bg-[#25D366] text-white',
    icon: <WhatsAppIcon className="w-5 h-5" />,
  },
  {
    id: 'phone',
    href: `tel:${profile.phone}`,
    labelKey: 'connect.phone',
    className: 'bg-ag-emerald text-white',
    icon: <Phone size={20} />,
  },
  {
    id: 'instagram',
    href: `https://instagram.com/${profile.instagram}`,
    external: true,
    labelKey: 'instagram.label',
    className: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white',
    icon: <InstagramIcon className="w-5 h-5" />,
  },
]

export default function ConnectButton() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isOpen = open || hovered

  const closeMenu = () => {
    setOpen(false)
    setHovered(false)
  }

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
    setHovered(true)
  }

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => setHovered(false), 180)
  }

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="flex flex-col items-end gap-3"
          >
            {connectItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.05 }}
                aria-label={t(item.labelKey)}
                onClick={closeMenu}
                className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 ${item.className}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={isOpen ? t('connect.close') : t('connect.label')}
        aria-expanded={isOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ag-emerald text-white shadow-lg shadow-ag-emerald/30"
      >
        <motion.span
          animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          className="absolute"
        >
          <Globe size={24} />
        </motion.span>
        <motion.span
          animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          className="absolute"
        >
          <X size={24} />
        </motion.span>
      </motion.button>

      <motion.a
        href="#gallery"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('connect.gallery')}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-ag-gold text-white shadow-lg shadow-ag-gold/30"
      >
        <Images size={24} />
      </motion.a>
    </div>
  )
}
