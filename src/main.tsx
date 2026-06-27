import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { applyTheme, defaultTheme, isValidTheme } from './themes'
import App from './App.tsx'

const saved = localStorage.getItem('portfolio-theme')
applyTheme(saved && isValidTheme(saved) ? saved : defaultTheme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
