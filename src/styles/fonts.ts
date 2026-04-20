export const fonts = {
  family: {
    primary: "'Nunito', sans-serif",
  },
  weight: {
    regular: 400,
    bold: 700,
  },
  size: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
  },
  lineHeight: '160%',
} as const

export type Fonts = typeof fonts