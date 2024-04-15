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
      'fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    // 过渡动画
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsible-down': 'collapsible-down 0.2s ease-in-out',
      'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      'translate-down': 'translate-down 0.2s cubic-bezier(0.37, 0.7, 0.31, 0.92)',
      'slide-up': 'slide-up 0.8s cubic-bezier(0.37, 0.7, 0.31, 0.9)',
      'fade-in-up': 'fade-in-up 0.5s ease-out',
    },
    // 过渡时间
    transitionDuration: {
      1200: '1200ms',
      1800: '1800ms',
      2400: '2400ms',
      3200: '3200ms',
    },
    // 颜色
    colors: {
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
      black: '#000',
      white: '#fff',
      brand: '#4299e1',
      correct: '#48bb78',
      error: '#f56565',
      blue: {
        50: '#ebf8ff',
        100: '#bee3f8',
        200: '#90cdf4',
        300: '#63b3ed',
        400: '#4299e1',
        500: '#3182ce',
        600: '#2b6cb0',
        700: '#2c5282',
        800: '#2a4365',
        900: '#1a365d',
      },
      cyan: {
        50: '#edfdfd',
        100: '#c4f1f9',
        200: '#9decf9',
        300: '#76e4f7',
        400: '#0bc5ea',
        500: '#00b5d8',
        600: '#00a3c4',
        700: '#0987a0',
        800: '#086f83',
        900: '#065666',
      },
      gray: {
        50: '#f7fafc',
        100: '#edf2f7',
        200: '#e2e8f9',
        300: '#cbd5e0',
        400: '#a0aec0',
        500: '#718096',
        600: '#4a5568',
        700: '#2d3748',
        800: '#1a202c',
        900: '#171923',
      },
      green: {
        50: '#f0fff4',
        100: '#c6f6d5',
        200: '#9ae6b4',
        300: '#68d391',
        400: '#48bb78',
        500: '#38a169',
        600: '#25855a',
        700: '#276749',
        800: '#22543d',
        900: '#1c4532',
      },
      orange: {
        50: '#fffaf0',
        100: '#feebcb',
        200: '#fbd38d',
        300: '#f6ad55',
        400: '#ed8936',
        500: '#dd6b20',
        600: '#c05621',
        700: '#9c4221',
        800: '#7b341e',
        900: '#652b19',
      },
      pink: {
        50: '#fff5f7',
        100: '#fed7e2',
        200: '#fbb6ce',
        300: '#e687b3',
        400: '#ed64a6',
        500: '#d53f8c',
        600: '#b83280',
        700: '#97266d',
        800: '#702459',
        900: '#521b41',
      },
      purple: {
        50: '#faf5ff',
        100: '#e9d8fd',
        200: '#d6bcfa',
        300: '#b794f4',
        400: '#9f7aea',
        500: '#805ad5',
        600: '#6b46c1',
        700: '#553c9a',
        800: '#44337a',
        900: '#322659',
      },
      red: {
        50: '#fff5f5',
        100: '#fed7d7',
        200: '#feb2b2',
        300: '#fc8181',
        400: '#f56565',
        500: '#e53e3e',
        600: '#c53030',
        700: '#9b2c2c',
        800: '#822727',
        900: '#63171b',
      },
      teal: {
        50: '#e6fffa',
        100: '#b2f5ea',
        200: '#81e6d9',
        300: '#4fd1c5',
        400: '#38b2ac',
        500: '#319795',
        600: '#2c7a7b',
        700: '#285e61',
        800: '#234e52',
        900: '#1d4044',
      },
      yellow: {
        50: '#fffff0',
        100: '#fefcbf',
        200: '#faf089',
        300: '#f6e05e',
        400: '#ecc94b',
        500: '#d69e2e',
        600: '#b7791f',
        700: '#975a16',
        800: '#744210',
        900: '#5f370e',
      },
    },
    // 透明度
    opacity: {
      transparent: '0',
      0: '0',
      4: '0.04',
      6: '0.06',
      8: '0.08',
      16: '0.16',
      24: '0.24',
      36: '0.36',
      48: '0.48',
      64: '0.64',
      80: '0.8',
      92: '0.92',
    },
    // 圆角
    borderRadius: {
      none: '0rem',
      sm: '0.125rem',
      base: '0.25rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    // 字体大小
    fontSize: {
      '4xl': ['36px', '44px'],
      '3xl': ['32px', '40px'],
      '2xl': ['28px', '30px'],
      xl: ['24px', '32px'],
      lg: ['20px', '28px'],
      md: ['18px', '26px'],
      base: ['16px', '24px'],
      sm: ['14px', '20px'],
      xs: ['12px', '18px'],
    },
    // 屏幕尺寸
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // 阴影
    boxShadow: {
      xs: '0px 0px 0px 1px rgba(0, 0, 0, 0.05);',
      sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05);',
      base: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);',
      md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);',
      lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);',
      '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25);',
      inner: '0px 0px 0px 3px rgba(63, 153, 225, 0.6);',
      outline: 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06);',
      'dark-lg': '0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px 0px rgba(0, 0, 0, 0.2), 0px 15px 40px 0px rgba(0, 0, 0, 0.4);',
    },
  },
}

export const plugins = [
  animate,
  // Iconify plugin
  // custom icon import, need to install package (pnpm i @iconify-json/mdi -D). See https://github.com/egoist/tailwindcss-icons
  addDynamicIconSelectors(),
]
