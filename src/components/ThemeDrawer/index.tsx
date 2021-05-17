import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { themeMap } from "../../themes";
import { useStyles } from "./styles";
import ThemeOptionButton from "./ThemeOptionButton";

const ThemeDrawer = () => {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen } = useContext(AppContext);

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <div
        className={classes.content}
        onClick={() => setDrawerOpen(false)}
        role="presentation"
      >
        <Typography align="center" variant="button" component="div">
          Sélectionnez un thème
        </Typography>
        <div className={classes.optionsContainer}>
          {Object.keys(themeMap).map((themeName: any) => (
            <ThemeOptionButton key={themeName} name={themeName} />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default ThemeDrawer;
