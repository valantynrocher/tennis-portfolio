import React, { useContext } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";

import { ThemeOptionButtonProps } from "./props";
import { useStyles } from "./styles";
import { getThemeByName } from "../../themes";
import { AppContext } from "../../context/AppContext";
import Typography from "@material-ui/core/Typography";

const ThemeOptionButton = (props: ThemeOptionButtonProps) => {
  const { name } = props;
  const classes = useStyles();
  const { setThemeName } = useContext(AppContext);
  const currentTheme = getThemeByName(name);
  const { primary, secondary } = currentTheme.palette;

  return (
    <ButtonBase
      focusRipple
      className={classes.root}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: "100%",
        background: `repeating-linear-gradient(${
          name === "London" ? 90 : 180
        }deg,${primary.main},${primary.main} 50%,${secondary.main} 50%,${
          secondary.main
        })`,
        backgroundSize: `${name === "London" ? "100px" : "100%"}`,
        color: currentTheme.palette.info.contrastText,
      }}
      onClick={() => setThemeName(name)}
    >
      <span className={classes.backdrop} />
      <span className={classes.content}>
        <Typography
          component="span"
          variant="h6"
          color="inherit"
          className={classes.title}
        >
          {name}
        </Typography>
      </span>
      <span className={classes.line} />
      <span className={classes.t} />
    </ButtonBase>
  );
};

export default ThemeOptionButton;
