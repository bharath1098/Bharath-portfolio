import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Clock,
  Users,
  CircleDot,
  Star,
  Sparkles,
  Heart,
  Languages,
  type LucideIcon,
} from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import profile from '../data/profile.json'

const highlightKeys = ['dob', 'height', 'nativePlace'] as const

const detailItems = [
  { key: 'birthTime', icon: Clock, accent: 'emerald' },
  { key: 'caste', icon: Users, accent: 'gold' },
  { key: 'kankana', icon: CircleDot, accent: 'emerald' },
  { key: 'rashi', icon: Star, accent: 'gold' },
  { key: 'nakshatra', icon: Sparkles, accent: 'emerald' },
  { key: 'maritalStatus', icon: Heart, accent: 'gold' },
  { key: 'languages', icon: Languages, accent: 'emerald' },
] as const

const accentBorder = {
  gold: 'border-l-ag-gold',
  emerald: 'border-l-ag-emerald',
} as const

const accentIcon = {
  gold: 'bg-ag-gold/15 text-ag-emerald',
  emerald: 'bg-ag-sage/60 text-ag-forest',
} as const

export default function PersonalDetails() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="details">
      <SectionTitle eyebrow="Biodata">{t('details.title')}</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 rounded-xl border border-ag-border bg-ag-sidebar p-6 md:p-8 shadow-lg shadow-[#0a3c30]/25"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {highlightKeys.map((key) => (
            <div key={key} className="text-center sm:text-start">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ag-sage/90 mb-1.5">
                {t(`details.${key}`)}
              </p>
              <p className="text-lg font-semibold text-white">{profile.details[key]}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {detailItems.map(({ key, icon: Icon, accent }, i) => (
          <DetailCard
            key={key}
            icon={Icon}
            label={t(`details.${key}`)}
            value={profile.details[key]}
            accent={accent}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

function DetailCard({
  icon: Icon,
  label,
  value,
  accent,
  index,
}: {
  icon: LucideIcon
  label: string
  value: string
  accent: 'gold' | 'emerald'
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className={`group ag-card ag-card-hover border-l-4 ${accentBorder[accent]}`}
    >
      <div className="p-5">
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${accentIcon[accent]} transition-colors group-hover:bg-ag-gold group-hover:text-white`}>
          <Icon size={18} strokeWidth={2} />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ag-muted mb-2">
          {label}
        </p>
        <p className="text-base font-semibold leading-snug text-ag-forest md:text-lg">
          {value}
        </p>
      </div>
    </motion.div>
  )
}
