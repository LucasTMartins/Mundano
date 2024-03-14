/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        rosewater: "var(--ctp-rosewater)",
        flamingo:  "var(--ctp-flamingo)", 
        pink:      "var(--ctp-pink)",
        mauve:     "var(--ctp-mauve)",  
        red:       "var(--ctp-red)",  
        maroon:    "var(--ctp-maroon)",  
        peach:     "var(--ctp-peach)", 
        yellow:    "var(--ctp-yellow)",  
        green:     "var(--ctp-green)",  
        teal:      "var(--ctp-teal)",  
        sky:       "var(--ctp-sky)",  
        sapphire:  "var(--ctp-sapphire)", 
        blue:      "var(--ctp-blue)",  
        lavender:  "var(--ctp-lavender)", 
        text:      "var(--ctp-text)",  
        subtext1:  "var(--ctp-subtext1)", 
        subtext0:  "var(--ctp-subtext0)", 
        overlay2:  "var(--ctp-overlay2)", 
        overlay1:  "var(--ctp-overlay1)", 
        overlay0:  "var(--ctp-overlay0)", 
        surface2:  "var(--ctp-surface2)", 
        surface1:  "var(--ctp-surface1)", 
        surface0:  "var(--ctp-surface0)", 
        base:      "var(--ctp-base)",  
        mantle:    "var(--ctp-mantle)",  
        crust:     "var(--ctp-crust)",  
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}