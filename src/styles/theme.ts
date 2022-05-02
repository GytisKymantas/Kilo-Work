export type Colors = keyof typeof colors;

const colors = {
  primary: "#000000",
  secondary: "#E7FAFE",
  accent: "#708246",
  pink: "#CC261B",
  yellow: "F09E00",
  teal: "#E7F9FA",
  white: "#ffffff",
  orange: "#ff7b00",
  gray: "rgba(0, 0, 0, 0.6)",
};

export const theme = {
  colors,
  fontFamily: {
    primary: "Inter",
    secondary: "Lobster",
    tertiary: "Eudoxus sign",
  },
  fontSizes: {
    fs14: "0.875rem",
    fs16: "1rem",
    fs18: "1.125rem",
    fs24: "1.5rem",
    fs48: "3rem",
    fs64: "4rem",
  },
  fontWeights: {
    fw400: 400,
    fw500: 500,
    fw600: 600,
    fw700: 700,
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s16: 6,
    s40: 40,
    s30: 30,
    s50: 50,
    s70: 70,
    s80: 80,
    s90: 90,
    s100: 100,
    s120: 120,
    s160: 160,
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontSizeMobile: "3rem",
      lineHeight: "6.5rem",
      lineHeightMobile: "5.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "4.5rem",
      fontSizeMobile: "3.5rem",
      lineHeight: "5.875rem",
      lineHeightMobile: "4.5625rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "3.5rem",
      fontSizeMobile: "2.5rem",
      lineHeight: "4.5625rem",
      lineHeightMobile: "3.25rem",
      fontWeight: 600,
    },
  },
} as const;

export type Theme = typeof theme;

export const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T; // iki nurodyto kazkurio
  lmobile: T;
  ltablet: T;
  desktop: T;
};
