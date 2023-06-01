/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8dafbf",
        "primary-100": "#cedde4",
      },
      boxShadow: {
        keycap:
          "inset 0px 6px 4px #8CAFBF, inset 6px 0px 4px rgba(140, 175, 191, 0.65), inset -8px -9px 2px rgba(0, 0, 0, 0.25)",
        "keycap-hover":
          "inset 0px 6px 4px #8CAFBF, inset 6px 0px 4px rgba(140, 175, 191, 0.65), inset -8px -9px 12px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
