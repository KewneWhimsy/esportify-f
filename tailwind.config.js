/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,astro,html}',
    './server/**/*.{html,js}',
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
  safelist: [
    'bg-[#26232A]', // Forcer la conservation de cette classe
    'hover:scale-105', // Et toute autre classe dynamique
    'mt-4', 'px-4', 'py-2', 'text-2xl', 'font-bold', 'mb-4', 
    'font-heading', 'text-heading', 'border', 
    'p-6', 'rounded-lg', 'shadow-lg', 'h-full', 'w-full', 'text-sm', 
    'text-gray-400', 'text-lg', 'leading-tight', 'mb-2', 
    'justify-between', 'border-[#E5E7EB]', 'p-4', 
    'w-64', 'shadow-md', 'transition-transform', 'scale-105', 
    'cursor-pointer', 'flex-shrink-0', 'gap-0.5'
  ],
  plugins: [],
}

