import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: '#1f2937',
        secondary: '#f97316',
        accent: '#38bdf8'
      }
    }
  },
  plugins: []
};

export default config;
