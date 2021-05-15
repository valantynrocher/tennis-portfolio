import { Theme } from "@material-ui/core";
import Melbourne from "./melbourneTheme";
import Paris from "./parisTheme";
import London from "./londonTheme";
import NewYork from "./newYorkTheme";

export type ThemeNameType = "Paris" | "Melbourne" | "NewYork" | "London";

export const themeMap: { [key in ThemeNameType]: Theme } = {
  London,
  Melbourne,
  Paris,
  NewYork,
};

export const getThemeByName = (theme: ThemeNameType): Theme => themeMap[theme];
