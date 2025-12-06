/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌿 Palette personalizzata Nutrity
        "nutrity-green": "#3cb043",   // verde erba
        "nutrity-dark": "#2f6636",    // verde scuro
        "nutrity-blue": "#1e3a8a",    // blu principale
        "nutrity-lightblue": "#a9d6e5", // azzurro acqua
        "nutrity-gold": "#e5c100",    // giallo oro
        "nutrity-gray": "#6b7280",    // grigio testo
        "nutrity-bg": "#f8fafc",      // fondo chiaro
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.06)",
        deep: "0 8px 24px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        // 🌈 Gradienti pronti
        "nutrity-main": "linear-gradient(to bottom, #c7f9cc, #a9d6e5)",
        "nutrity-greenblue": "linear-gradient(to right, #3cb043, #1e3a8a)",
        "nutrity-goldgreen": "linear-gradient(to bottom right, #e5c100, #3cb043)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
