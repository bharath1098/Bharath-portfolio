import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import profile from '../data/profile.json'

export default function Hero() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const subtitle = t('hero.subtitle', {
    age: profile.age,
    profession: profile.profession,
    location: profile.location,
  })

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-ag-sidebar">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={profile.heroPhoto}
          alt={profile.name}
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ag-sidebar/90 via-ag-forest/80 to-ag-sidebar" />
      </motion.div>

      <div className="absolute inset-0 hero-pattern" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-ag-sage/60 text-ag-sage text-sm mb-6"
            >
              Marriage Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white mb-2"
            >
              <span className="whitespace-nowrap">{profile.name}</span>
            </motion.h1>
            {profile.nickname && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.48 }}
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-ag-sage mb-4"
              >
                ({profile.nickname})
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-ag-sage text-lg mb-4"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-ag-foreground/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="ag-btn-primary rounded-full"
              >
                {t('hero.viewProfile')}
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="ag-btn-outline rounded-full"
              >
                {t('hero.contactFamily')}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-ag-gold/25 blur-2xl" />
              <img
                src={profile.heroPhoto}
                alt={profile.name}
                className="relative w-80 h-96 object-cover rounded-xl border-2 border-ag-sage/50 shadow-2xl shadow-[#0a3c30]/30"
              />
              <div className="absolute -bottom-4 -right-4 bg-ag-gold text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#3ebb9e]/40">
                {profile.age} years
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ag-foreground/50 hover:text-ag-sage transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  )
}
