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
          'xl': "1240px",
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
      },
      boxShadow: {
        'custom-xl': "0px 4px 20px 0px #00000026",
      },
      backgroundImage: {
      },
      fontFamily: {
        'sunflower': "'sunflower', sans-serif",
      }
    },
  },
  plugins: [],
}


