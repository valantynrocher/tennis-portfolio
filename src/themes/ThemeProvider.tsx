import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName, ThemeNameType } from "./index";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = (props: { children: React.ReactNode }) => {
  // State to hold the selected theme name
  const [themeName, setThemeName] = useState<ThemeNameType>("Paris");

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
