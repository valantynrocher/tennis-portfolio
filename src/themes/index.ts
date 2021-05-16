import { Theme } from "@material-ui/core";
import Melbourne from "./melbourneTheme";
import Paris from "./parisTheme";
import London from "./londonTheme";
import NewYork from "./newYorkTheme";

export type ThemeNameType = "Paris" | "Melbourne" | "NewYork" | "London";

export interface ThemeInfos {
  city: string;
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
    city: "Londres",
    tournament: "Wimbledon",
    country: "Angleterre",
  },
  Melbourne: {
    city: "Melbourne",
    tournament: "Australian Open",
    country: "Australie",
  },
  Paris: {
    city: "Paris",
    tournament: "Roland Garros",
    country: "France",
  },
  NewYork: {
    city: "New York",
    tournament: "US Open",
    country: "États-Unis",
  },
};

export const getThemeByName = (theme: ThemeNameType): Theme => themeMap[theme];
