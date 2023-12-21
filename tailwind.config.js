/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightOne: '#7BD3EA',
      lightTwo: '#A1EEBD',
      lightThree: '#F6F7C4',
      lightFour: '#F6D6D6',
      darkOne: '#092635',
      darkTwo: '#1B4242',
      darkThree: '#5C8374',
      darkFour: '#9EC8B9',
    },
    fontFamily: {
      lora: ['Lora', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

