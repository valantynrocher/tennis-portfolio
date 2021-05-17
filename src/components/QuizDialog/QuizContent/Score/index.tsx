import React from "react";
import { useContext } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { QuizContext } from "../../context/QuizContext";
import QuestionSummary from "./QuestionSummary";
import { useStyles } from "./styles";

const Score = () => {
  const { count, score, questions, answers } = useContext(QuizContext);
  const classes = useStyles();

  return (
    <DialogContent>
      <Paper
        elevation={3}
        className={clsx(classes.paperRounded, classes.scoreboardPaper)}
      >
        <Paper
          elevation={0}
          className={clsx(classes.paperRounded, classes.scoreboardTitle)}
        >
          <Typography variant="button">Votre score</Typography>
        </Paper>
        <div className={classes.scoreboardContent}>
          <Paper
            elevation={0}
            className={clsx(classes.paperRounded, classes.numberPaper)}
          >
            <Typography
              variant="h2"
              className={clsx(classes.number, classes.score)}
              align="center"
            >
              {score}
            </Typography>
          </Paper>
          <Typography color="inherit" variant="h4" align="center">
            /
          </Typography>
          <Paper
            elevation={0}
            className={clsx(classes.paperRounded, classes.numberPaper)}
          >
            <Typography
              variant="h2"
              className={clsx(classes.number, classes.count)}
              align="center"
            >
              {count}
            </Typography>
          </Paper>
        </div>
      </Paper>

      <div className={classes.summary}>
        {Object.keys(questions).map((k: any, idx) => (
          <QuestionSummary
            key={`score-question-${k}`}
            isCorrect={questions[k].answer === answers[k]}
            question={questions[k].text}
            answer={questions[k].answer}
            userAnswer={answers[k]}
          />
        ))}
      </div>
    </DialogContent>
  );
};

export default Score;
