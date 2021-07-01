import clsx from "clsx";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { getThemeByName, themeInfos } from "../../../themes";
import { ThemeOptionButtonProps } from "./props";
import { useStyles } from "./styles";

const ThemeOptionButton = (props: ThemeOptionButtonProps) => {
  const { name } = props;
  const { setThemeName } = useContext(AppContext);
  const currentTheme = getThemeByName(name);
  const { primary, secondary } = currentTheme.palette;
  const classes = useStyles({
    primary: primary.main,
    secondary: secondary.main,
  });

  return (
    <ButtonBase
      focusRipple
      className={clsx(classes.root, {
        [classes.baseBackground]: name !== "London",
        [classes.londonBackground]: name === "London",
      })}
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
