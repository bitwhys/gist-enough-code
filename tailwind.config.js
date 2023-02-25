const defaultTheme = require("tailwindcss/defaultTheme");
const {
  formatRadixColorScaleForTailwind,
} = require("./theme/formatRadixColorScaleForTailwind");
const { mauveDark, limeDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.tsx", "components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        neutral: formatRadixColorScaleForTailwind(mauveDark),
        primary: formatRadixColorScaleForTailwind(limeDark),
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
