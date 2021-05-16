import { Theme } from "@material-ui/core";
import Melbourne from "./melbourneTheme";
import Paris from "./parisTheme";
import London from "./londonTheme";
import NewYork from "./newYorkTheme";

export type ThemeNameType = "Paris" | "Melbourne" | "NewYork" | "London";

export interface ThemeInfos {
  tournament: string;
  country: string;
}

export const themeMap: { [key in ThemeNameType]: Theme } = {
  London,
  Melbourne,
  Paris,
  NewYork,
};

export const themeInfos: { [key in ThemeNameType]: ThemeInfos } = {
  London: {
    tournament: "Wimbledon",
    country: "Angleterre",
  },
  Melbourne: {
    tournament: "Australian Open",
    country: "Australie",
  },
  Paris: {
    tournament: "Roland Garros",
    country: "France",
  },
  NewYork: {
    tournament: "US Open",
    country: "États-Unis",
  },
};

export const getThemeByName = (theme: ThemeNameType): Theme => themeMap[theme];
