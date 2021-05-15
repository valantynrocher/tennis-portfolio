import { useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import React, { useContext, useEffect, useState } from "react";
import ThemeOptionButton from "./components/ThemeOptionButton";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { themeMap } from "./themes";
import { ThemeContext } from "./themes/ThemeContext";

function App() {
  const { themeName } = useContext(ThemeContext);
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
  const [open, setOpen] = useState(false);

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
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            width: 250,
          }}
          onClick={() => setOpen(false)}
          role="presentation"
        >
          {Object.keys(themeMap).map((themeName: any) => (
            <ThemeOptionButton key={themeName} name={themeName} />
          ))}
        </div>
      </Drawer>
      <div style={style}>
        <Fab
          style={{
            backgroundColor: theme.palette.info.main,
            position: "absolute",
            top: theme.spacing(2),
            right: theme.spacing(2),
          }}
          size="large"
          onClick={() => setOpen(true)}
        >
          <ColorLensIcon
            style={{
              color: theme.palette.info.contrastText,
            }}
          />
        </Fab>
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
