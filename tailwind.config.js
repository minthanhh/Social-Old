/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import aspectRatio from '@tailwindcss/aspect-ratio'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#f00751", 
        secondary: "888888"
      },
      fontFamily: {
        lemonada: ['Lemonada', 'cursive']
      },
      screens: {
        
      },
      backgroundColor: {
        primary: "#f00751", 
      }
    },
  },
  plugins: [daisyui, aspectRatio],
}

