import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { themeInfos } from "../../../themes";
import { QuizContext } from "../context/QuizContext";
import { useStyles } from "./styles";

const QuizTitle = () => {
  const classes = useStyles();
  const { themeName, setQuizOpen } = useContext(AppContext);
  const { resetQuiz } = useContext(QuizContext);

  const handleDialogClose = () => {
    setQuizOpen(false);
    resetQuiz();
  };

  return (
    <MuiDialogTitle className={classes.title} disableTypography>
      <Typography variant="h5">
        Quiz {themeInfos[themeName].tournament}
      </Typography>
      <IconButton
        onClick={handleDialogClose}
        aria-label="delete"
        color="primary"
      >
        <CancelIcon />
      </IconButton>
    </MuiDialogTitle>
  );
};

export default QuizTitle;
