/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0B0F14",
          1: "#11161C",
          2: "#151B22",
          3: "#202833",
          4: "#2B3542"
        },
        textc: {
          DEFAULT: "#E5E7EB",
          dim: "#A6ADBB",
          mute: "#7B8494"
        },
        brand: {
          accent: "#22D3EE",  // основной акцент (cyan)
          accent2: "#F59E0B"  // редкие маркеры (amber), используй по желанию
        }
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      fontFamily: {
        ui: ['"Noto Sans"', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};
