import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Heart, Users, TrendingUp, Wind, Shield, Briefcase,
  BookOpen, Plane, Dumbbell, Cpu, ChefHat, Camera,
} from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const traitIcons = {
  honest: Heart,
  family: Users,
  ambitious: TrendingUp,
  calm: Wind,
  respectful: Shield,
  career: Briefcase,
}

const hobbyIcons = {
  reading: BookOpen,
  travel: Plane,
  fitness: Dumbbell,
  technology: Cpu,
  cooking: ChefHat,
  photography: Camera,
}

export default function About() {
  const { t } = useTranslation()

  const traits = Object.keys(traitIcons) as (keyof typeof traitIcons)[]
  const hobbies = Object.keys(hobbyIcons) as (keyof typeof hobbyIcons)[]

  return (
    <SectionWrapper id="about" className="bg-ag-secondary">
      <SectionTitle eyebrow="Profile">{t('about.title')}</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="prose-text text-ag-forest/85 max-w-3xl mx-auto mb-16"
      >
        {t('about.description')}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ag-muted mb-6">
            {t('about.traitsTitle')}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const Icon = traitIcons[trait]
              return (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="card-shine ag-card ag-card-hover flex items-center gap-3 p-4 border-l-4 border-l-ag-gold"
                >
                  <div className="p-2.5 rounded-lg bg-ag-gold/15">
                    <Icon size={20} className="text-ag-emerald" />
                  </div>
                  <span className="font-medium text-ag-forest">{t(`about.traits.${trait}`)}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ag-muted mb-6">
            {t('about.hobbiesTitle')}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {hobbies.map((hobby, i) => {
              const Icon = hobbyIcons[hobby]
              return (
                <motion.div
                  key={hobby}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="card-shine ag-card ag-card-hover flex items-center gap-3 p-4 border-l-4 border-l-ag-emerald"
                >
                  <div className="p-2.5 rounded-lg bg-ag-sage/70">
                    <Icon size={20} className="text-ag-forest" />
                  </div>
                  <span className="font-medium text-ag-forest">{t(`about.hobbies.${hobby}`)}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
