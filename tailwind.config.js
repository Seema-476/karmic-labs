/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-xl': "56px",
        'custom-2xl': "64px",
      },
      lineHeight: {
        'custom-xl': "19.44px",
        'custom-2xl': "21.74px",
        'custom-3xl': "24.3px",
        'custom-4xl': "25.52px",
        'custom-5xl': "28.8px",
        'custom-6xl': "60.86px",
        'custom-7xl': "69.56px",
      },
      colors: {
        'dusk-black': "#FFFFFF1A",
        'z-black': "#040404",
        'gray': "#4d4d4d",
        'off-white': "#FFFFFF4D",
      },
      boxShadow: {
        'custom-xl': "0px 4px 20px 0px #00000026",
        'custom-2xl': "0px 4px 16px 0px #FFFFFF1A",
      },
      backgroundImage: {
        'hero-bg-layer': "url('/public/assets/images/webp/hero-bg-layer.webp')",
        'projects-bg-white-layer': "url('/public/assets/images/webp/project-bg.webp')",
      },
      fontFamily: {
        'sunflower': "'sunflower', sans-serif",
      },
        backgroundSize: {
        'hero-bg-set': '100% 726px'
      },
    },
  },
  plugins: [],
}



