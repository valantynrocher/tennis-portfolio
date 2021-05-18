import Dialog from "@material-ui/core/Dialog";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import QuizProvider from "./context/QuizProvider";
import QuizContent from "./QuizContent";
import QuizTitle from "./QuizTitle";
import { useStyles } from "./styles";

const QuizDialog = () => {
  const classes = useStyles();
  const { quizOpen } = useContext(AppContext);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={quizOpen}
      fullScreen={fullScreen}
      classes={{
        paper: classes.paper,
      }}
    >
      <QuizProvider>
        <QuizTitle />
        <QuizContent />
      </QuizProvider>
    </Dialog>
  );
};

export default QuizDialog;
