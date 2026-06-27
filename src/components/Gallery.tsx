import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import profile from '../data/profile.json'

export default function Gallery() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <SectionWrapper id="gallery" className="bg-ag-secondary">
      <SectionTitle eyebrow="Memories">{t('gallery.title')}</SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {profile.photos.map((photo, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setLightbox(i)}
            className="relative group aspect-[4/5] rounded-xl overflow-hidden cursor-pointer border border-ag-border shadow-sm"
          >
            <img src={photo} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-ag-forest/0 group-hover:bg-ag-forest/50 transition-colors flex items-center justify-center">
              <ZoomIn
                size={32}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-ag-sidebar/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 end-6 text-ag-foreground/80 hover:text-ag-gold p-2"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              src={profile.photos[lightbox]}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain border border-ag-gold/30"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
