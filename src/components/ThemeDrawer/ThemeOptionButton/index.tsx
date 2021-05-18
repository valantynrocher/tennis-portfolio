import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { getThemeByName, themeInfos } from "../../../themes";
import { ThemeOptionButtonProps } from "./props";
import { useStyles } from "./styles";

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
      style={{
        background: `repeating-linear-gradient(${
          name === "London" ? 90 : 180
        }deg,${primary.main},${primary.main} 50%,${secondary.main} 50%,${
          secondary.main
        })`,
        backgroundSize: `${name === "London" ? "100px" : "100%"}`,
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
          {themeInfos[name].tournament}
        </Typography>
        <Typography
          component="span"
          variant="overline"
          color="inherit"
          className={classes.title}
          style={{
            marginBottom: -8,
          }}
        >
          {themeInfos[name].city}
        </Typography>
      </span>
      <span className={classes.line} />
      <span className={classes.t} />
    </ButtonBase>
  );
};

export default ThemeOptionButton;
