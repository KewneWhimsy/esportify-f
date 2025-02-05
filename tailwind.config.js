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
    'hover:scale-105', // Et toute autre classe dynamique
    'mt-4', 'px-4', 'px-1', 'py-2', 'py-3', 'text-2xl', 'font-bold', 'mb-4',
    'font-heading', 'text-heading', 'border', 'bg-background', 'mx-4', 'mx-2', 'right-1',
    'p-6', 'rounded-lg', 'shadow-lg', 'h-full', 'w-full', 'text-sm','absolute', 'sm:p-2',
    'text-gray-400', 'text-lg', 'leading-tight', 'mb-2', 'bg-[#161215]', 'relative', 'hover:bg-red-800 ',
    'justify-between', 'border-[#E5E7EB]', 'p-4', 'bg-red-800', 'mr-auto',  'p-3', 'min-h-60', 'min-w-72',
    'w-64', 'shadow-md', 'transition-transform', 'scale-105', 'flex-grow', 'overflow-y-auto',
    'cursor-pointer', 'flex-shrink-0', 'gap-0.5', 'hidden', 'bg-blue-500', 'hover:bg-blue-600', 'rounded', 'bg-opacity-80',
    'bg-red-600', 'text-red-500', 'hover:bg-red-700', 'mt-10', 'border-gray-300', 'ml-auto', 'text-green-500',
    'px-3', 'py-1', 'bg-orange-600', 'hover:bg-orange-700', 'bg-green-600', 'hover:bg-green-700', 'bg-red-900',
    'gap-2', 'gap-4', 'text-yellow-600', 'text-green-600', 'bg-gray-500', 'hover:bg-gray-700' ,'transition-colors', 
    'bg-blue-900', 'hover:bg-yellow-600', 'text-myEvent', 'ml-1', 'hover:text-yellow-600', 'hover:bg-[#532447]', 'bg-[#642b56]',
    'max-w-2xl', 'p-2', 'self-end', 'mt-5', 'p-1', 'text-xl',
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

