import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { User, Users } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import profile from '../data/profile.json'

const accents = ['border-l-ag-gold', 'border-l-ag-emerald', 'border-l-ag-gold'] as const

export default function Family() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="family">
      <SectionTitle eyebrow="Background">{t('family.title')}</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="prose-text text-ag-forest/85 max-w-3xl mx-auto mb-12"
      >
        {t('family.description')}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {profile.family.members.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`card-shine ag-card ag-card-hover text-center p-8 border-l-4 ${accents[i % accents.length]}`}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-ag-gold/15 flex items-center justify-center">
              {member.id === 'father' || member.id === 'mother' ? (
                <User size={24} className="text-ag-emerald" />
              ) : (
                <Users size={24} className="text-ag-emerald" />
              )}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-ag-muted mb-2">
              {t(`family.labels.${member.id}`)}
            </p>
            <h4 className="font-serif text-lg font-semibold text-ag-forest mb-1">
              {member.name}
            </h4>
            {member.detail && (
              <p className="text-ag-muted text-sm mt-1">{member.detail}</p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
