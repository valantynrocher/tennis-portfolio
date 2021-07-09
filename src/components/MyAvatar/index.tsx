import clsx from "clsx";
import { useState } from "react";
import { useStyles } from "./styles";

const MyAvatar = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={classes.avatar}
    >
      <div
        className={clsx(classes.spinner, {
          [classes.animateSpinner]: hover,
        })}
      />
      <div
        className={clsx(classes.imageOverlay, {
          [classes.hideOverlay]: hover,
        })}
      />
      <img
        className={classes.image}
        src="/images/valentin-rocher.jpg"
        alt="Valentin Rocher"
      />
    </div>
  );
};

export default MyAvatar;
