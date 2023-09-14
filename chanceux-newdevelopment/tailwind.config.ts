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
        'solColor-1': '#1EBB74',
        'solColor-2': '#7266FF',
        'solColor-3': '#FF3D3D',
        'solColor-4': '#2965F7',
        'solColor-5': '#32A9FB',
        'solColor-6': '#FF4090',
        'test-bg': '#111523',
      },
    },
  },
  plugins: [],
}
export default config
