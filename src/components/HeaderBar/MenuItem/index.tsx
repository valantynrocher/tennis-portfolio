import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItemProps } from "./props";
import { useStyles } from "./styles";

// const isCurrentPath = (path: string, current: string) => {
//   const splittedPath = path.split("/")[1];
//   console.log({ splittedPath, current, result: splittedPath === current });

//   return splittedPath === current;
// };

const MenuItemComponent = (props: MenuItemProps) => {
  const { text, to } = props;
  // const history = useHistory();
  const [hover, setHover] = useState(false);
  // const [selected, setSelected] = useState(
  //   isCurrentPath(history.location.pathname, to)
  // );
  // useEffect(() => {
  //   setSelected(isCurrentPath(history.location.pathname, to));
  // }, [history.location.pathname, to]);

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

      <NavLink to={to} className={classes.link}>
        <Typography variant="h6" className={classes.text}>
          {text}
        </Typography>
      </NavLink>
    </div>
  );
};

export default MenuItemComponent;
