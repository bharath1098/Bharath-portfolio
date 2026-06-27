import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, GraduationCap, Heart, MapPin } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const cards = [
  { key: 'age', icon: Calendar, accent: 'border-l-ag-gold' },
  { key: 'education', icon: GraduationCap, accent: 'border-l-ag-emerald' },
  { key: 'values', icon: Heart, accent: 'border-l-ag-gold' },
  { key: 'location', icon: MapPin, accent: 'border-l-ag-emerald' },
] as const

export default function Preferences() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="preferences" dark className="bg-ag-sidebar">
      <SectionTitle eyebrow="Expectations" dark>
        {t('preferences.title')}
      </SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="prose-text text-ag-foreground/85 max-w-3xl mx-auto mb-12"
      >
        {t('preferences.description')}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ key, icon: Icon, accent }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`ag-card-hover rounded-xl border border-ag-border/20 bg-white/5 p-6 text-center border-l-4 ${accent}`}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-ag-gold/15 flex items-center justify-center">
              <Icon size={22} className="text-ag-gold" />
            </div>
            <p className="text-ag-foreground font-medium">{t(`preferences.cards.${key}`)}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
