import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solana: '#9945FF',
        success: '#14F195',
        twitter: '#1DA1F2',
        dark: '#0A0B0D',
        'dark-light': '#1A1B1F',
        'dark-lighter': '#2A2B2F',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #9945FF, 0 0 10px #9945FF' },
          '100%': { boxShadow: '0 0 10px #9945FF, 0 0 20px #9945FF, 0 0 30px #9945FF' },
        }
      }
    },
  },
  plugins: [],
}
export default config