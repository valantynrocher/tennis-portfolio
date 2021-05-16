import { useTheme } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import React, { useContext, useEffect, useState } from "react";
import QuizDialog from "./components/QuizDialog";
import ThemeDrawer from "./components/ThemeDrawer";
import { AppContext } from "./context/AppContext";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const { themeName, setDrawerOpen, setQuizOpen } = useContext(AppContext);
  const theme = useTheme();
  const { height, width } = useWindowDimensions();
  const [style, setStyle] = useState({
    height,
    maxHeight: height,
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  useEffect(() => {
    if (themeName === "London") {
      setStyle((value: any) => ({
        ...value,
        background: `linear-gradient(to bottom,${theme.palette.primary.main},${theme.palette.primary.main} 50%,${theme.palette.secondary.main} 50%,${theme.palette.secondary.main})`,
        backgroundSize: "100% 100px",
      }));
    } else
      setStyle({
        height,
        maxHeight: height,
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      });
  }, [
    height,
    theme.palette.primary.main,
    theme.palette.secondary.main,
    themeName,
  ]);

  return (
    <React.Fragment>
      <ThemeDrawer />
      <QuizDialog />
      <div style={style}>
        <div
          style={{
            position: "absolute",
            top: theme.spacing(2),
            right: theme.spacing(2),
          }}
        >
          <Fab
            style={{
              backgroundColor: theme.palette.info.main,
            }}
            size="large"
            onClick={() => setQuizOpen(true)}
          >
            <SportsEsportsIcon
              style={{
                color: theme.palette.info.contrastText,
              }}
            />
          </Fab>
          <Fab
            style={{
              backgroundColor: theme.palette.info.main,
            }}
            size="large"
            onClick={() => setDrawerOpen(true)}
          >
            <ColorLensIcon
              style={{
                color: theme.palette.info.contrastText,
              }}
            />
          </Fab>
        </div>

        <div
          style={{
            margin: theme.spacing(5, 0),
            padding: theme.spacing(5),
            width: width,
            borderWidth: 0,
            borderStyle: "solid",
            borderColor: "#fff",
            backgroundColor:
              themeName === "London"
                ? "transparent"
                : theme.palette.secondary.main,
            display: "flex",
            justifyContent: "space-between",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default App;
