import React from "react";
import { ThemeNameType } from "../themes/index";

export interface ThemeContextProps {
  themeName: ThemeNameType;
  setThemeName: (themeName: ThemeNameType) => void;
  drawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
  quizOpen: boolean;
  setQuizOpen: (value: boolean) => void;
}

export const AppContext = React.createContext<ThemeContextProps>({
  themeName: "Paris",
  setThemeName: (themeName: ThemeNameType) => themeName,
  drawerOpen: false,
  setDrawerOpen: (value: boolean) => value,
  quizOpen: false,
  setQuizOpen: (value: boolean) => value,
});
