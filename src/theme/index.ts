import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f9fafb",
      100: "#f0f2f5",
      200: "#d9e2ea",
      300: "#c1d2df",
      400: "#a9c1d4",
      500: "#90b1c9",
      600: "#7d96a5",
      700: "#6a7a81",
      800: "#576067",
      900: "#44464d",
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    accent: {
      50: "#f0faf9",
      100: "#dcf5f4",
      200: "#a7e6e1",
      300: "#65cdbf",
      400: "#3bbaa8",
      500: "#00a99f",
      600: "#009690",
      700: "#007b7b",
      800: "#006463",
      900: "#004d4f",
    },
    // Otros colores personalizados aquí
  },
});

export default theme;
