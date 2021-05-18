import MuiDialogActions from "@material-ui/core/DialogActions";
import React, { useContext } from "react";
import QuizActions from "./QuizActions";
import { QuizContext } from "../context/QuizContext";
import Question from "./Question";
import Score from "./Score";
import QuizProgress from "./QuizProgress";
import { useStyles } from "./styles";

const QuizContent = () => {
  const { count, current } = useContext(QuizContext);
  const classes = useStyles();

  return (
    <React.Fragment>
      {current === count + 1 ? (
        <Score />
      ) : (
        <React.Fragment>
          <Question />
          <MuiDialogActions className={classes.actions}>
            <QuizProgress />
            <QuizActions />
          </MuiDialogActions>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default QuizContent;
