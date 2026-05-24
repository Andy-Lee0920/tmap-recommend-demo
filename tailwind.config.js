/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xs":  ["11px", { lineHeight: "1.4" }],
        "xs":   ["13px", { lineHeight: "1.4" }],
        "sm":   ["15px", { lineHeight: "1.4" }],
        "base": ["16px", { lineHeight: "1.5" }],
        "md":   ["18px", { lineHeight: "1.4" }],
        "lg":   ["20px", { lineHeight: "1.3" }],
        "xl":   ["22px", { lineHeight: "1.3" }],
        "2xl":  ["25px", { lineHeight: "1.25" }],
        "3xl":  ["28px", { lineHeight: "1.2" }],
        "4xl":  ["36px", { lineHeight: "1.1" }],
        "5xl":  ["40px", { lineHeight: "1.1" }],
        "6xl":  ["46px", { lineHeight: "1" }],
        "7xl":  ["54px", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
