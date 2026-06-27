export type ThemeId =
  | 'teal'
  | 'blue'
  | 'gold'
  | 'earth'
  | 'rose'
  | 'lavender'
  | 'sunset'
  | 'midnight'
  | 'ruby'
  | 'sapphire'
  | 'emerald'
  | 'champagne'

export interface ThemeDefinition {
  id: ThemeId
  label: string
  swatch: string
  vars: Record<string, string>
}

function theme(
  id: ThemeId,
  label: string,
  swatch: string,
  colors: {
    bg: string
    forest: string
    emerald: string
    sage: string
    gold: string
    muted: string
    border: string
    secondary: string
    sidebar: string
    foreground: string
    gradientStart: string
    gradientMid: string
    gradientEnd: string
    glow1: string
    glow2: string
    shine: string
    btnShadow: string
    cardShadow: string
  }
): ThemeDefinition {
  return {
    id,
    label,
    swatch,
    vars: {
      '--app-bg': colors.bg,
      '--app-forest': colors.forest,
      '--app-emerald': colors.emerald,
      '--app-sage': colors.sage,
      '--app-gold': colors.gold,
      '--app-muted': colors.muted,
      '--app-border': colors.border,
      '--app-secondary': colors.secondary,
      '--app-card': '#ffffff',
      '--app-sidebar': colors.sidebar,
      '--app-foreground': colors.foreground,
      '--gradient-start': colors.gradientStart,
      '--gradient-mid': colors.gradientMid,
      '--gradient-end': colors.gradientEnd,
      '--hero-glow-1': colors.glow1,
      '--hero-glow-2': colors.glow2,
      '--shine-color': colors.shine,
      '--btn-shadow': colors.btnShadow,
      '--card-shadow': colors.cardShadow,
    },
  }
}

export const themes: ThemeDefinition[] = [
  theme('teal', 'Mint Teal', '#3EBB9E', {
    bg: '#f0fbf8',
    forest: '#00674f',
    emerald: '#00674f',
    sage: '#73e6cb',
    gold: '#3ebb9e',
    muted: '#4a7a6e',
    border: '#c5efe6',
    secondary: '#e6faf5',
    sidebar: '#0a3c30',
    foreground: '#e8faf6',
    gradientStart: '#73e6cb',
    gradientMid: '#3ebb9e',
    gradientEnd: '#00674f',
    glow1: 'rgba(62, 187, 158, 0.22)',
    glow2: 'rgba(0, 103, 79, 0.12)',
    shine: 'rgba(115, 230, 203, 0.18)',
    btnShadow: 'rgba(62, 187, 158, 0.4)',
    cardShadow: 'rgba(0, 103, 79, 0.12)',
  }),
  theme('rose', 'Blush Rose', '#E11D74', {
    bg: '#fff5f9',
    forest: '#881337',
    emerald: '#9f1239',
    sage: '#fbcfe8',
    gold: '#e11d74',
    muted: '#9d4b6a',
    border: '#f9d0e3',
    secondary: '#fce8f2',
    sidebar: '#4c0519',
    foreground: '#fff1f5',
    gradientStart: '#fbcfe8',
    gradientMid: '#f472b6',
    gradientEnd: '#881337',
    glow1: 'rgba(244, 114, 182, 0.22)',
    glow2: 'rgba(136, 19, 55, 0.12)',
    shine: 'rgba(251, 207, 232, 0.2)',
    btnShadow: 'rgba(225, 29, 116, 0.35)',
    cardShadow: 'rgba(136, 19, 55, 0.1)',
  }),
  theme('lavender', 'Royal Lavender', '#8B5CF6', {
    bg: '#f8f6ff',
    forest: '#4c1d95',
    emerald: '#6d28d9',
    sage: '#ddd6fe',
    gold: '#8b5cf6',
    muted: '#7c6b9e',
    border: '#e4deff',
    secondary: '#f0ecff',
    sidebar: '#2e1065',
    foreground: '#f3f0ff',
    gradientStart: '#ddd6fe',
    gradientMid: '#a78bfa',
    gradientEnd: '#4c1d95',
    glow1: 'rgba(167, 139, 250, 0.22)',
    glow2: 'rgba(76, 29, 149, 0.12)',
    shine: 'rgba(221, 214, 254, 0.2)',
    btnShadow: 'rgba(139, 92, 246, 0.35)',
    cardShadow: 'rgba(76, 29, 149, 0.1)',
  }),
  theme('sunset', 'Sunset Coral', '#F97316', {
    bg: '#fff8f3',
    forest: '#9a3412',
    emerald: '#c2410c',
    sage: '#fed7aa',
    gold: '#f97316',
    muted: '#a1624a',
    border: '#fde0c8',
    secondary: '#fff0e6',
    sidebar: '#431407',
    foreground: '#fff7ed',
    gradientStart: '#fed7aa',
    gradientMid: '#fb923c',
    gradientEnd: '#9a3412',
    glow1: 'rgba(251, 146, 60, 0.22)',
    glow2: 'rgba(154, 52, 18, 0.12)',
    shine: 'rgba(254, 215, 170, 0.2)',
    btnShadow: 'rgba(249, 115, 22, 0.35)',
    cardShadow: 'rgba(154, 52, 18, 0.1)',
  }),
  theme('ruby', 'Ruby Maroon', '#BE123C', {
    bg: '#fff5f7',
    forest: '#7f1d1d',
    emerald: '#991b1b',
    sage: '#fecaca',
    gold: '#be123c',
    muted: '#9f4a4a',
    border: '#f5d0d6',
    secondary: '#fce8ec',
    sidebar: '#450a0a',
    foreground: '#fef2f2',
    gradientStart: '#fecaca',
    gradientMid: '#f87171',
    gradientEnd: '#7f1d1d',
    glow1: 'rgba(248, 113, 113, 0.2)',
    glow2: 'rgba(127, 29, 29, 0.12)',
    shine: 'rgba(254, 202, 202, 0.18)',
    btnShadow: 'rgba(190, 18, 60, 0.35)',
    cardShadow: 'rgba(127, 29, 29, 0.1)',
  }),
  theme('sapphire', 'Sapphire Blue', '#2563EB', {
    bg: '#f0f6ff',
    forest: '#1e3a8a',
    emerald: '#1d4ed8',
    sage: '#bfdbfe',
    gold: '#2563eb',
    muted: '#5b6f9e',
    border: '#c7dcff',
    secondary: '#e8f1ff',
    sidebar: '#172554',
    foreground: '#eff6ff',
    gradientStart: '#bfdbfe',
    gradientMid: '#60a5fa',
    gradientEnd: '#1e3a8a',
    glow1: 'rgba(96, 165, 250, 0.22)',
    glow2: 'rgba(30, 58, 138, 0.12)',
    shine: 'rgba(191, 219, 254, 0.2)',
    btnShadow: 'rgba(37, 99, 235, 0.35)',
    cardShadow: 'rgba(30, 58, 138, 0.1)',
  }),
  theme('emerald', 'Jewel Emerald', '#059669', {
    bg: '#f0fdf7',
    forest: '#064e3b',
    emerald: '#047857',
    sage: '#a7f3d0',
    gold: '#10b981',
    muted: '#4a7a68',
    border: '#bbf7d8',
    secondary: '#e6faf2',
    sidebar: '#022c22',
    foreground: '#ecfdf5',
    gradientStart: '#a7f3d0',
    gradientMid: '#34d399',
    gradientEnd: '#064e3b',
    glow1: 'rgba(52, 211, 153, 0.22)',
    glow2: 'rgba(6, 78, 59, 0.12)',
    shine: 'rgba(167, 243, 208, 0.2)',
    btnShadow: 'rgba(16, 185, 129, 0.35)',
    cardShadow: 'rgba(6, 78, 59, 0.1)',
  }),
  theme('champagne', 'Champagne Gold', '#D4A574', {
    bg: '#fdfaf5',
    forest: '#5c4033',
    emerald: '#8b6914',
    sage: '#f5e6c8',
    gold: '#d4a574',
    muted: '#8a7560',
    border: '#efe0cc',
    secondary: '#faf3ea',
    sidebar: '#2c1810',
    foreground: '#faf6f0',
    gradientStart: '#f5e6c8',
    gradientMid: '#d4a574',
    gradientEnd: '#5c4033',
    glow1: 'rgba(212, 165, 116, 0.22)',
    glow2: 'rgba(92, 64, 51, 0.1)',
    shine: 'rgba(245, 230, 200, 0.2)',
    btnShadow: 'rgba(212, 165, 116, 0.4)',
    cardShadow: 'rgba(92, 64, 51, 0.1)',
  }),
  theme('midnight', 'Midnight Indigo', '#6366F1', {
    bg: '#f5f6ff',
    forest: '#312e81',
    emerald: '#4338ca',
    sage: '#c7d2fe',
    gold: '#6366f1',
    muted: '#6b6b9e',
    border: '#d8dcff',
    secondary: '#eceeff',
    sidebar: '#1e1b4b',
    foreground: '#eef2ff',
    gradientStart: '#c7d2fe',
    gradientMid: '#818cf8',
    gradientEnd: '#312e81',
    glow1: 'rgba(129, 140, 248, 0.22)',
    glow2: 'rgba(49, 46, 129, 0.12)',
    shine: 'rgba(199, 210, 254, 0.2)',
    btnShadow: 'rgba(99, 102, 241, 0.35)',
    cardShadow: 'rgba(49, 46, 129, 0.1)',
  }),
  theme('blue', 'Ocean Blue', '#4A90E2', {
    bg: '#f0f7ff',
    forest: '#1e3a5f',
    emerald: '#2563eb',
    sage: '#bfdbfe',
    gold: '#4a90e2',
    muted: '#5b7c9a',
    border: '#cce0f5',
    secondary: '#e8f2fc',
    sidebar: '#0f2442',
    foreground: '#e8f2ff',
    gradientStart: '#93c5fd',
    gradientMid: '#60a5fa',
    gradientEnd: '#1e3a5f',
    glow1: 'rgba(74, 144, 226, 0.2)',
    glow2: 'rgba(37, 99, 235, 0.12)',
    shine: 'rgba(147, 197, 253, 0.15)',
    btnShadow: 'rgba(74, 144, 226, 0.35)',
    cardShadow: 'rgba(30, 58, 95, 0.1)',
  }),
  theme('gold', 'Royal Gold', '#C9A227', {
    bg: '#faf7f2',
    forest: '#0f172a',
    emerald: '#0f172a',
    sage: '#e8c547',
    gold: '#c9a227',
    muted: '#64748b',
    border: '#e8e0d4',
    secondary: '#f5f0e8',
    sidebar: '#0f172a',
    foreground: '#f8fafc',
    gradientStart: '#e8c547',
    gradientMid: '#c9a227',
    gradientEnd: '#0f172a',
    glow1: 'rgba(201, 162, 39, 0.15)',
    glow2: 'rgba(15, 23, 42, 0.08)',
    shine: 'rgba(201, 162, 39, 0.1)',
    btnShadow: 'rgba(201, 162, 39, 0.35)',
    cardShadow: 'rgba(15, 23, 42, 0.08)',
  }),
  theme('earth', 'Warm Earth', '#CFB991', {
    bg: '#f6f4ef',
    forest: '#1a1a1a',
    emerald: '#8e6f3e',
    sage: '#ebd99f',
    gold: '#cfb991',
    muted: '#6b6258',
    border: '#e4e0d8',
    secondary: '#f0ede6',
    sidebar: '#0a0a0a',
    foreground: '#e8e4dc',
    gradientStart: '#ebd99f',
    gradientMid: '#cfb991',
    gradientEnd: '#8e6f3e',
    glow1: 'rgba(207, 185, 145, 0.15)',
    glow2: 'rgba(142, 111, 62, 0.1)',
    shine: 'rgba(207, 185, 145, 0.12)',
    btnShadow: 'rgba(207, 185, 145, 0.35)',
    cardShadow: 'rgba(26, 26, 26, 0.08)',
  }),
]

export const defaultTheme: ThemeId = 'gold'

export const themeMap = Object.fromEntries(themes.map((t) => [t.id, t])) as Record<
  ThemeId,
  ThemeDefinition
>

export const themeIds = themes.map((t) => t.id)

export function isValidTheme(id: string): id is ThemeId {
  return id in themeMap
}

export function applyTheme(id: ThemeId) {
  const theme = themeMap[id] ?? themeMap[defaultTheme]
  const root = document.documentElement
  root.dataset.theme = id
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}
