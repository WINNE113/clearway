/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontFamily: {
        logo: "Rowdies, cursive;",
      },
      extend: {
        width: {
          main: "1200px",
        },
        backgroundColor: {
          "main-lime-2": "#789729",
          "main-lime-1": "#9FBD50",
          "main-lime-3": "#374C00",
          "main-lime-4": "#1F2A00",
          "main-lime": "#55710C",
          "main-yellow": "#FDC108",
          "main-orange": "#FBA211",
          "overlay-10": "rgba(0,0,0,0.1)",
          "overlay-20": "rgba(0,0,0,0.2)",
          "overlay-70": "rgba(0,0,0,0.7)",
        },
        colors: {
          "main-lime": "#789729",
          "main-yellow": "#FDC108",
          "main-orange": "#FBA211",
          "main-lime-200": "#789729",
          "main-lime-100": "#9FBD50",
          "main-lime-300": "#374C00",
          "main-lime-400": "#1F2A00",
        },
      },
      // keyframes: {
      //   'scale-up-center': {
      //     '0%': {
      //       '-webkit-transform': 'scale(0.2);',
      //       transform: 'scale(0.2);'
      //     },
      //     '100%': {
      //       '-webkit-transform': 'scale(1);',
      //       transform: 'scale(1);'
      //     }
      //   }
      // },
      // animation: {
      //   'scale-up-center': 'scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;',
      // }
    },
    plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
  }
  