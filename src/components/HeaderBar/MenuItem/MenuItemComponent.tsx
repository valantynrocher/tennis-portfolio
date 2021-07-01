import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import React, { useState } from "react";
import { MenuItemProps } from "./props";
import { useStyles } from "./styles";

const MenuItemComponent = (props: MenuItemProps) => {
  const { text, to } = props;
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const toggleHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.hover]: hover,
      })}
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

      <NavLink to={to || text} className={classes.link}>
        <Typography variant="h6" className={classes.text}>
          {text}
        </Typography>
      </NavLink>
    </div>
  );
};

export default MenuItemComponent;
