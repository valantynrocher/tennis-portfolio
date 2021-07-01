import { Theme } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";

const FONTS = ["Amatic SC", "sans-serif"];

export type ThemeNameType = "Paris" | "Melbourne" | "NewYork" | "London";

export interface ThemeInfos {
  city: string;
  tournament: string;
  country: string;
  primary: string;
  secondary: string;
  info: string;
}

export const themeInfos: { [key in ThemeNameType]: ThemeInfos } = {
  London: {
    city: "Londres",
    tournament: "Wimbledon",
    country: "Angleterre",
    primary: "#86A775",
    secondary: "#99C086",
    info: "#014230",
  },
  Melbourne: {
    city: "Melbourne",
    tournament: "Australian Open",
    country: "Australie",
    primary: "#5A96D0",
    secondary: "#53759A",
    info: "#000",
  },
  Paris: {
    city: "Paris",
    tournament: "Roland Garros",
    country: "France",
    primary: "#CE5C1B",
    secondary: "#CE5C1B",
    info: "#004d40",
  },
  NewYork: {
    city: "New York",
    tournament: "US Open",
    country: "États-Unis",
    primary: "#86A775",
    secondary: "#53759A",
    info: "#2F4D74",
  },
};

const createCustomTheme = (infos: ThemeInfos) => {
  const { primary, secondary, info } = infos;
  return createMuiTheme({
    typography: {
      fontFamily: FONTS.join(","),
    },
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      info: {
        main: info,
      },
    },
  });
};

export const themeMap: { [key in ThemeNameType]: Theme } = {
  London: createCustomTheme(themeInfos["London"]),
  Melbourne: createCustomTheme(themeInfos["Melbourne"]),
  Paris: createCustomTheme(themeInfos["Paris"]),
  NewYork: createCustomTheme(themeInfos["NewYork"]),
};

export const getThemeByName = (theme: ThemeNameType): Theme => themeMap[theme];
