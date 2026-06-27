import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import profile from '../data/profile.json'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ag-sidebar text-ag-foreground/60 py-12 px-4 md:px-8 border-t border-ag-border/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-start">
          <p className="font-serif text-xl text-ag-foreground mb-1">{profile.name}</p>
          <p className="text-sm">© {year} {t('footer.rights')}</p>
          <p className="text-xs mt-1 text-ag-muted">{t('footer.purpose')}</p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-4 text-sm">
            <a href="#home" className="hover:text-ag-sage transition-colors">{t('nav.home')}</a>
            <a href="#about" className="hover:text-ag-sage transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="hover:text-ag-sage transition-colors">{t('nav.contact')}</a>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
