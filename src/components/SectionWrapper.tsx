import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export default function SectionWrapper({ id, children, className = '', dark = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`py-20 px-4 md:px-8 ${
        dark ? 'bg-ag-forest text-ag-foreground' : 'bg-ag-bg text-ag-forest'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}

export function SectionTitle({
  children,
  eyebrow,
  dark = false,
}: {
  children: ReactNode
  eyebrow?: string
  dark?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ag-muted mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl font-semibold mb-3 ${
          dark ? 'text-ag-foreground' : 'text-ag-forest'
        }`}
      >
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-ag-gold via-ag-sage to-ag-forest mx-auto rounded-full" />
    </motion.div>
  )
}

/** @deprecated Use SectionTitle with dark prop */
export function DarkSectionTitle({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) {
  return <SectionTitle eyebrow={eyebrow} dark>{children}</SectionTitle>
}
