import animate from 'tailwindcss-animate'
import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const safelist = ['dark']
export const prefix = ''
export const content = ['./pages/**/*.{ts,tsx,vue}', './components/**/*.{ts,tsx,vue}', './app/**/*.{ts,tsx,vue}', './src/**/*.{ts,tsx,vue}']
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    // 字体
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    // 颜色
    colors: {
      brand: '#1E90FF',
      primary: {
        DEFAULT: '#171717',
        dark: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#999999',
        dark: '#aaaaaa',
      },
      foreground: {
        DEFAULT: '#FFFFFF',
        dark: '#272727',
      },
    },
    // 过渡·动画相关
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      'collapsible-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-collapsible-content-height)' },
      },
      'collapsible-up': {
        from: { height: 'var(--radix-collapsible-content-height)' },
        to: { height: 0 },
      },
      'translate-down': {
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' },
      },
      'slide-up': {
        from: { transform: 'translateY(40px)', opacity: 0 },
        '20%': { opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsible-down': 'collapsible-down 0.2s ease-in-out',
      'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      'translate-down': 'translate-down 0.2s cubic-bezier(0.37, 0.7, 0.31, 0.92)',
      'slide-up': 'slide-up 0.8s cubic-bezier(0.37, 0.7, 0.31, 0.9)',
    },
    transitionDuration: {
      1200: '1200ms',
      1800: '1800ms',
      2400: '2400ms',
      3200: '3200ms',
    },
  },
}
export const plugins = [
  animate,
  // Iconify plugin
  // custom icon import, need to install package (pnpm i @iconify-json/mdi -D). See https://github.com/egoist/tailwindcss-icons
  addDynamicIconSelectors(),
]
