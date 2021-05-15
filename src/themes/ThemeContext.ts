import React from "react";
import { ThemeNameType } from "./index";

export interface ThemeContextProps {
  themeName: ThemeNameType;
  setThemeName: (themeName: ThemeNameType) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeName: "Paris",
  setThemeName: (themeName: ThemeNameType) => ({}),
});
