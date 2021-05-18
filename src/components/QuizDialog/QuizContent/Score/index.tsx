import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import { QuizContext } from "../../context/QuizContext";
import QuestionSummary from "./QuestionSummary";
import { useStyles } from "./styles";

const Score = () => {
  const { count, score, questions, answers } = useContext(QuizContext);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleShowSummary = () => {
    setExpanded(!expanded);
  };

  return (
    <DialogContent className={classes.root}>
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

      <div className={classes.actions}>
        <Button
          className={classes.button}
          onClick={handleShowSummary}
          variant={expanded ? "contained" : "outlined"}
          color="primary"
          startIcon={
            <ExpandMoreIcon
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            />
          }
        >
          {expanded ? "Masquer le résumé" : "Voir le résumé"}
        </Button>
        {/* <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Fermer
        </Button> */}
      </div>

      {/* <div> */}
      <Collapse
        classes={{
          container: classes.summaryContainer,
          wrapperInner: classes.summaryInner,
        }}
        in={expanded}
        timeout="auto"
        // unmountOnExit
      >
        {Object.keys(questions).map((k: any, idx) => (
          <QuestionSummary
            key={`score-question-${k}`}
            isCorrect={questions[k].answer === answers[k]}
            question={`${idx + 1} - ${questions[k].text}`}
            answer={questions[k].answer}
            userAnswer={answers[k]}
          />
        ))}
      </Collapse>
      {/* </div> */}
    </DialogContent>
  );
};

export default Score;
