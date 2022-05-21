import { shade } from "polished";

export const defaultTheme = {
  colors: {
    white: "#E1E1E6",
    grey: shade(0.3, "#E1E1E6"),
    opaque: "#41414D",
    purple: "#6633cc",
    purpleDark: "#5A4B81",
    green: "#67e480",
    orange: "#E89E64",
    pink: "#FF79C6",
    cyan: "#78D1E1",
    red: "#E96379",
    yellow: "#e7de79",
  },
  backgrounds: {
    lightest: "#252131",
    lighter: "#201B2D",
    dark: "#191622",
    darker: "#15121E",
    darkest: "#13111B",
  },
  shadows: {
    lightest: "0px 5px 15px rgba(0, 0, 0, 0.08)",
    lighter: "rgba(0, 0, 0, 0.15)",
    dark: "rgba(0, 0, 0, 0.25)",
    darker: "rgba(0, 0, 0, 0.5)",
    darkest: "rgba(0, 0, 0, 1)",
  },
};
