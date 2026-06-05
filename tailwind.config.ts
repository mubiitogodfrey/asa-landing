import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: 'var(--cyber-blue)',
          purple: 'var(--cyber-purple)',
          green: 'var(--cyber-green)',
          gold: 'var(--cyber-gold)',
          black: '#050505',
          surface: '#0B0F17',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        'dark-surface': 'var(--surface)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 184, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(122, 0, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 210, 106, 0.3)',
        'glow-gold': '0 0 20px rgba(255, 196, 0, 0.3)',
        'neon-blue': '0 0 30px rgba(0, 184, 255, 0.5), inset 0 0 20px rgba(0, 184, 255, 0.1)',
      },
      borderColor: {
        'neon-blue': 'rgba(0, 184, 255, 0.3)',
        'neon-purple': 'rgba(122, 0, 255, 0.3)',
        'neon-green': 'rgba(0, 210, 106, 0.3)',
        'neon-gold': 'rgba(255, 196, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-pulse': 'grid-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
