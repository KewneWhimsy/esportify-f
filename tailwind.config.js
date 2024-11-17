/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.astro',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F191D",
        text: "#FFFFEF",
        heading: "#FF6F47",
        link: "#FF4D4D",
        linkHover: "#FF0000",
      },
      fontFamily: {
        body: ["system-ui", "sans-serif", "Arial"],
        heading: ["Tahoma", "Verdana", "sans-serif", "Arial"],
      },
    },
  },
  plugins: [],
}

