import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { QuizContext } from "../../context/QuizContext";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useStyles } from "./styles";

const QuizActions = () => {
  useStyles();
  const { answers, current, setCurrent } = useContext(QuizContext);

  return (
    <React.Fragment>
      <Button
        onClick={() => setCurrent(current + 1)}
        color="primary"
        autoFocus
        variant="contained"
        disabled={!answers[current]}
        endIcon={<NavigateNextIcon />}
      >
        Suivant
      </Button>
    </React.Fragment>
  );
};

export default QuizActions;
