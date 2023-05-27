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
      },
      boxShadow: {
        keycap:
          "inset 0px 6px 4px #8CAFBF, inset 6px 0px 4px rgba(140, 175, 191, 0.65), inset -8px -9px 2px rgba(0, 0, 0, 0.25)",
        "keycap-hover":
          "inset 0px 6px 4px #8CAFBF, inset 6px 0px 4px rgba(140, 175, 191, 0.65), inset -8px -9px 12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
