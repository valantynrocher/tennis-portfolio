import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "./styles";
import ProgressBall from "../ProgressBall";
import { LoadingBackdropProps } from "./props";

const LoadingBackdrop = (props: LoadingBackdropProps) => {
  const { isVisible } = props;
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={isVisible}>
      <ProgressBall size="lg" />
    </Backdrop>
  );
};

export default LoadingBackdrop;
