import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bgcover': 'url(https://i.postimg.cc/J000HkBS/hero-Bg-cover.png)',
      },
      colors: {
        'light-grey': 'rgba(255, 255, 255, 0.60)',
        'nav-bg': 'rgba(136, 95, 245, 0.06)',
        'custom-blue': '#30578E',
      },
    },
  },
  plugins: [],
}
export default config
