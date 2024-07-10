/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
       animation: {
        scroll: 'scroll 10s linear infinite',
      },
      fontFamily: {
        montserrat: "var(--font-montserrat), monospace",
        bebasneue: "var(--font-bebasneue), monospace"
      },
      fontSize: {
        "5.5xl": "3.5rem"
      },
      colors:{
        'newblue':'#0D38B1',
      },
    },
  },
  plugins: [],
};
