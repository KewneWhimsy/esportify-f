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
        myEvent: "#ac6a9a", // mauve clair
        popupEvent: "#5e3554", // mauve
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
    'motion-safe:hover:scale-105', // Et toute autre classe dynamique
    'scale-105', 'motion-safe:transition-transform', 'transition-colors', 'w-64', 'mr-2','px-1', 'right-2',
    'mt-4', 'mt-5', 'mt-10', 'px-4', 'px-3', 'px-1', 'py-2', 'py-3', 'font-bold', 'mb-4',
    'font-heading', 'text-heading', 'text-myEvent', 'border', 'bg-background', 'mx-4', 'mx-2', 'right-1',
    'p-6', 'p-4', 'p-2', 'p-1', 'rounded-lg', 'shadow-lg', 'h-full', 'w-full','absolute', 'sm:p-2',
    'text-sm','text-lg', 'text-xl', 'text-2xl', 'leading-tight', 'mb-2', 'bg-[#161215]', 'relative',
    'justify-between', 'border-[#E5E7EB]', 'mr-auto',  'p-3', 'min-h-60', 'min-w-72',
    'shadow-md', 'flex-grow', 'overflow-y-auto', 'gap-2', 'gap-4', 'max-h-screen',
    'cursor-pointer', 'flex-shrink-0', 'gap-0.5', 'hidden', 'rounded', 'bg-opacity-80',
    'bg-red-600', 'bg-red-800', 'bg-red-900', 'hover:bg-red-700', 'hover:bg-red-800 ', 'ml-auto',
    'py-1', 'bg-orange-600', 'hover:bg-orange-700', 'bg-green-600', 'hover:bg-green-700',  'border-gray-300', 'bg-gray-500', 'hover:bg-gray-700',
    'text-gray-400', 'hover:text-yellow-600', 'text-yellow-600', 'text-red-500', 'text-green-500', 'text-green-600', 
    'bg-blue-900', 'bg-blue-500', 'hover:bg-blue-600', 'hover:bg-yellow-600', 'ml-1', 'hover:bg-[#532447]', 'bg-[#642b56]',
    'max-w-2xl', 'self-end',
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

