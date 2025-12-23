/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated, contemporary color palette
        primary: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d1c9bb',
          400: '#b3a692',
          500: '#8f7d66',
          600: '#6b5d4f',
          700: '#4a3f35',
          800: '#2d2520',
          900: '#1a1512',
        },
        accent: {
          gold: '#c9a961',
          sage: '#8a9a8e',
          terracotta: '#d4735e',
          slate: '#5c6370',
          cream: '#f7f5f2',
        },
        // Refined neutrals
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontSize: {
        // Magazine-style typography scale
        'display-lg': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'title-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600', textTransform: 'uppercase' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'strong': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'editorial': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'glow-gold': '0 0 24px rgba(201, 169, 97, 0.2)',
        'glow-sage': '0 0 24px rgba(138, 154, 142, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      letterSpacing: {
        'tightest': '-0.02em',
        'magazine': '-0.01em',
      },
      lineHeight: {
        'magazine': '1.6',
        'tight-magazine': '1.3',
      },
    },
  },
  plugins: [],
}
