import React from "react";
import { ProgressBallProps } from "./props";
import { useStyles2 } from "./styles2";

const ProgressBall = (props: ProgressBallProps) => {
  //   const classes = useStyles(props)();
  const classes = useStyles2(props)();
  return (
    // https://labs.danielcardoso.net/load-awesome/animations/ball-clip-rotate-pulse.html
    // <div className={classes.root}>
    //   <div className={classes.child}></div>
    //   <div className={classes.child}></div>
    // </div>

    // https://labs.danielcardoso.net/load-awesome/animations/ball-running-dots.html
    <div className={classes.root}>
      <div className={classes.child}></div>
      <div className={classes.child}></div>
      <div className={classes.child}></div>
      <div className={classes.child}></div>
      <div className={classes.child}></div>
    </div>
  );
};

export default ProgressBall;
