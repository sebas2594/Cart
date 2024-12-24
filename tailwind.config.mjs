/** @type {import('tailwindcss').Config} */

const { nextui, colors } = require("@nextui-org/react");

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // Cambiado aquí
  ],
  safelist: [
    {
      pattern: /data-\[loaded\]/, // Incluye todas las clases con este patrón
    }
  ],
  plugins: [nextui({
    themes: {
      light:{
        colors:{
          // foreground:"#71717A",
        }
      },
      dark:{}
    },
  })],
};
