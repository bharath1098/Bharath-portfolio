import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import profile from '../data/profile.json'
import { WhatsAppIcon, InstagramIcon } from './SocialIcons'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <SectionWrapper id="contact">
      <SectionTitle eyebrow="Reach Out">{t('contact.title')}</SectionTitle>
      <p className="prose-text text-ag-forest/80 max-w-xl mx-auto mb-12 text-center sm:text-start">
        {t('contact.subtitle')}
      </p>

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ag-muted">
            {t('contact.directContact')}
          </h3>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-4 p-4 ag-card ag-card-hover border-l-4 border-l-ag-gold hover:bg-ag-gold/5 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-ag-gold/15 group-hover:bg-ag-gold transition-colors">
              <Phone size={20} className="text-ag-emerald group-hover:text-white" />
            </div>
            <span className="text-ag-forest font-medium">{profile.phone}</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 p-4 ag-card ag-card-hover border-l-4 border-l-ag-emerald hover:bg-ag-gold/5 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-ag-sage/40 group-hover:bg-ag-gold transition-colors">
              <Mail size={20} className="text-ag-forest" />
            </div>
            <span className="text-ag-forest font-medium break-all">{profile.email}</span>
          </a>
          <div className="flex gap-4 pt-2">
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('whatsapp.label')}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-md hover:scale-105 transition-transform"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a
              href={`https://instagram.com/${profile.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('instagram.label')}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md hover:scale-105 transition-transform"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-ag-muted italic pt-4">{t('contact.privacy')}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 ag-card p-8 border-l-4 border-l-ag-gold space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-ag-forest mb-2">{t('contact.name')}</label>
              <input required type="text" className="ag-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ag-forest mb-2">{t('contact.phone')}</label>
              <input required type="tel" className="ag-input" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-ag-forest mb-2">{t('contact.email')}</label>
            <input type="email" className="ag-input" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ag-forest mb-2">{t('contact.relation')}</label>
            <select className="ag-input">
              <option value="family">{t('contact.relations.family')}</option>
              <option value="friend">{t('contact.relations.friend')}</option>
              <option value="self">{t('contact.relations.self')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-ag-forest mb-2">{t('contact.message')}</label>
            <textarea required rows={4} className="ag-input resize-none" />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ag-btn-primary w-full rounded-lg py-4"
          >
            <Send size={18} />
            {t('contact.submit')}
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-3 p-4 bg-ag-sage/40 text-ag-forest rounded-lg border border-ag-gold/30"
              >
                <CheckCircle size={20} className="text-ag-emerald" />
                {t('contact.success')}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
