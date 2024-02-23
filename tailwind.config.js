/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary1':'#8868F9',
        'primaryM':'#553EFF',
        'primary2':'#A58DFB',
        'primary3':'#C3B5FB',
        'primary4':'#E0DAFD',
        'secondaryM':'#C5C5C5',
        'secondary1':'#D6D6D6',
        'secondary2':'#E0E0E0',
        'secondary3':'#EBEBEB',
        'secondary4':'#F5F5F5',
        'tertiaryM':'#04040A',
        'tertiary1':'#1B1B1F',
        'tertiary2':'#343438',
        'tertiary3':'#4E4E51',
        'tertiary4':'#67676A',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
