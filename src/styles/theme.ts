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
  grayTwo: "rgba(0, 0, 0, 0.05)",
  gray: "rgba(0, 0, 0, 0.6)",
  transparent: "transparent",
};

export const theme = {
  colors,
  fontFamily: {
    primary: "Inter",
    secondary: "Lobster",
    tertiary: "Eudoxus sign",
  },
  radii: {
    br30: "1.875rem",
    br50: "1.875rem",
  },
  zIndices: {
    base: 0,
    upperElement: 1,
    moda: 10,
    loader: 11,
  },
  fontSizes: {
    fs14: "0.875rem",
    fs16: "1rem",
    fs18: "1.125rem",
    fs32: "2rem",
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
    auto: "auto",
    auto0: "auto 0",
    s0: "0",
    s16: "0.375rem",
    s20: "1.25rem",
    s30: "1.875rem",
    s40: "2.5rem",
    s35: "2.1875rem",
    s50: "3.125rem",
    s70: "4.375rem",
    s80: "5rem",
    s90: "5.625rem",
    s100: "6.25rem",
    s120: "7.5rem",
    s160: "10rem",
    s370: "23.125rem",
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontSizeMobile: "2.5rem",
      lineHeight: "4.8125rem",
      lineHeightMobile: "5.25rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
      fontSizeMobile: "2.5rem",
      lineHeight: "4.8125rem",
      lineHeightMobile: "5.25rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontSizeMobile: "2.5rem",
      lineHeight: "2rem",
      lineHeightMobile: "3.25rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "3rem",
      fontSizeMobile: "2rem",
      lineHeightMobile: "1.375rem",
      lineHeight: "3.9375rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "2.5rem",
      fontSizeMobile: "1.625rem",
      lineHeightMobile: "2.125rem",
      lineHeight: "3.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "2rem",
      fontSizeMobile: "1.5rem",
      lineHeightMobile: "2rem",
      lineHeight: "2.625rem",
      fontWeight: 600,
    },
    p: {
      fontSize: "1rem",
      fontSizeMobile: "0.875rem",
      lineHeightMobile: "1.375rem",
      lineHeight: "1.75rem",
      fontWeight: 400,
    },
    body16: {
      fontSize: "0.875rem",
      fontSizeMobile: "0.875rem",
      lineHeightMobile: "1.375rem",
      lineHeight: "1.0625rem",
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
