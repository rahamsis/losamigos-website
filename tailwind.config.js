/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        crema: "#fff8e9",
        cremaOscuro: "#fff1d9",
        dorado: "#3d2e12",
        doradoOscuro: "#37280C",
        doradoClaro: "#eba823",
        guinda: "#92140c",
        guindaOscuro: "#762d2a",
        anaranjado: "#e58211"
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        boldCustomer: [400],
      },
      padding: {
        a: "19.2px 34.4px 40px 34px",
      },
      animation: {
        'animate-spin': 'spin 4s linear infinite',
        'animate-spin-reverse': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        "spin-reverse": {
          'to': { transform: 'rotate(-1turn)' },
        }
      }
    }, 
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: []
}

