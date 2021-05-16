import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { useStyles } from "./styles";

const QuizProgress = () => {
  const classes = useStyles();
  const { count, current } = useContext(QuizContext);
  return (
    <div className={classes.root}>
      <Typography
        gutterBottom
        component="div"
      >{`Question ${current}/${count}`}</Typography>
      <div className={classes.container}>
        <div
          className={classes.filler}
          style={{ width: `${(current / count) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgress;
