import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { MenuItemProps } from "./props";
import { useStyles } from "./styles";

const isCurrentPath = (path: string, current: string) => {
  const splittedPath = path.split("/")[1];
  return splittedPath === current;
};

const MenuItemComponent = (props: MenuItemProps) => {
  const { text, to, location } = props;
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(
    isCurrentPath(location.pathname, to)
  );

  useEffect(() => {
    console.log("MenuItem > useEffect");
    setSelected(isCurrentPath(location.pathname, to));
  }, [location.pathname, to]);

  const classes = useStyles();

  const toggleHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <NavLink
      className={clsx(classes.root, classes.link, {
        [classes.hover]: hover,
      })}
      to={to}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className={classes.icon}>
        {hover && (
          <React.Fragment>
            <div className={clsx(classes.ball)} />
            <div className={clsx(classes.shadow)} />
          </React.Fragment>
        )}
      </div>

      <Typography
        variant="h6"
        className={clsx(classes.text, {
          [classes.selected]: selected,
        })}
      >
        {text}
      </Typography>
    </NavLink>
  );
};

export default withRouter(MenuItemComponent);
