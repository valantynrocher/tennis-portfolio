import React, { useContext } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import { QuizContext } from "../../context/QuizContext";
import { useStyles } from "./styles";

const Question = () => {
  const classes = useStyles();
  const { questions, answers, setAnswers, score, setScore, current } =
    useContext(QuizContext);

  const handleAnswerClick = (
    event: React.MouseEvent<HTMLElement>,
    choice: string | null
  ) => {
    choice &&
      setAnswers({
        ...answers,
        [current]: choice || "",
      });

    if (choice === questions[current].answer && !answers[current])
      setScore(score + 1);
  };
  console.log(answers);

  return (
    <DialogContent classes={{ root: classes.content }}>
      <Typography className={classes.questionText} align="center" variant="h6">
        {questions[current].text}
      </Typography>
      <ToggleButtonGroup
        value={answers[current] || null}
        exclusive
        onChange={handleAnswerClick}
        classes={{
          root: classes.buttonGroup,
          groupedHorizontal: classes.groupedHorizontal,
        }}
      >
        {questions[current].choices.map((c) => (
          <ToggleButton
            classes={{ root: classes.toggleButton }}
            key={c}
            value={c}
          >
            <div className={classes.icon}>
              <SportsBaseballIcon />
            </div>

            <span>{c}</span>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </DialogContent>
  );
};

export default Question;
