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
        'solColor_1': '#1EBB74',
        'solColor_2': '#7266FF',
        'solColor_3': '#FF3D3D',
        'solColor_4': '#2965F7',
        'solColor_5': '#32A9FB',
        'solColor_6': '#FF4090',
        'test-bg': '#111523',
        'custom_orange': "#F37649",
        'custom_green': '#01DDB9',
      },
    },
  },
  plugins: [],
}
export default config
