import React, { useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName, ThemeNameType } from "../themes/index";
import { AppContext } from "./AppContext";

const AppProvider = (props: { children: React.ReactNode }) => {
  // State to hold the selected theme name
  const [themeName, setThemeName] = useState<ThemeNameType>(
    (localStorage.getItem("themeName") as ThemeNameType) || "Paris"
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
  }, [themeName]);

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName);

  return (
    <AppContext.Provider
      value={{
        themeName,
        setThemeName,
        drawerOpen,
        setDrawerOpen,
        quizOpen,
        setQuizOpen,
      }}
    >
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
