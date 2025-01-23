/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,astro,html}', // Astro
    './server/**/*.{html,js}', // Express
  ],
  theme: {
    extend: { // rajout de classes supplémentaires
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.9)', // ombre noire texte
      },
      colors: {
        background: "#1F191D", // fond noir teinté de couleur rouge/rose
        text: "#FFFFEF", // blanc cassé vers le jaune
        heading: "#FF6F47", // orange lisible
        link: "#FF4D4D", // rouge vif mais non agressif
        linkHover: "#FF0000", // rouge plus sombre
      },
      fontFamily: {
        body: ["system-ui", "sans-serif", "Arial"], // police de base des appareils ou autre police lisible et universel
        heading: ["sans-serif", "Tahoma", "Verdana", "system-ui", "Arial"], // police pour les titres
        hero: [ "Audiowide","sans-serif", "system-ui"], // police de la page d'acceuil
      },
    },
  },
  variants: {
    extend: {
      textShadow: ['responsive'],
    },
  },
  safelist: [
    'bg-[#26232A]', // Force la conservation de cette classe
    'hover:scale-105', // Et toute autre classe dynamique
    'mt-4', 'px-4', 'py-2', 'text-2xl', 'font-bold', 'mb-4', 
    'font-heading', 'text-heading', 'border', 
    'p-6', 'rounded-lg', 'shadow-lg', 'h-full', 'w-full', 'text-sm', 
    'text-gray-400', 'text-lg', 'leading-tight', 'mb-2', 
    'justify-between', 'border-[#E5E7EB]', 'p-4', 'bg-red-800', 
    'w-64', 'shadow-md', 'transition-transform', 'scale-105', 
    'cursor-pointer', 'flex-shrink-0', 'gap-0.5', 'hidden', 'bg-blue-500', 'hover:bg-blue-600', 'rounded', 'bg-opacity-80',
     'bg-red-600', 'text-red-500', 'hover:bg-red-700', 'mt-10', 'border-gray-300', 'ml-auto', 'text-green-500',
  ],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.9)',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}

