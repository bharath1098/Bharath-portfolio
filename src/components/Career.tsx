import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import profile from '../data/profile.json'

export default function Career() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="career" className="bg-ag-secondary">
      <SectionTitle eyebrow="Professional">{t('career.title')}</SectionTitle>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute start-6 top-0 bottom-0 w-0.5 bg-ag-gold/30" />
        {profile.timeline.map((item, i) => (
          <motion.div
            key={`${item.period}-${item.key}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative ps-16 pb-10 last:pb-0"
          >
            <div className="absolute start-3 top-1 w-6 h-6 rounded-full bg-ag-gold border-4 border-ag-secondary flex items-center justify-center">
              <GraduationCap size={12} className="text-ag-forest" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-ag-emerald">
              {item.period}
            </span>
            <p className="text-ag-forest font-medium text-lg mt-1">{t(`career.${item.key}`)}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
