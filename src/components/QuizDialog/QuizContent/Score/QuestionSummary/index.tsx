import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import ThumbDownIcon from "../../../../Icons/ThumbDownIcon";
import ThumbUpIcon from "../../../../Icons/ThumbUpIcon";
import { QuestionSummaryProps } from "./props";
import { useStyles } from "./styles";

const QuestionSummary = (props: QuestionSummaryProps) => {
  const { isCorrect, question, answer, userAnswer } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography className={classes.question} variant="subtitle2">
        {question}
      </Typography>
      <div className={classes.answer}>
        <React.Fragment>
          <Typography
            className={classes.answerItem}
            color="inherit"
            variant="body2"
          >
            <ThumbUpIcon className={clsx(classes.icon, classes.iconSuccess)} />
            {answer}
          </Typography>
          {!isCorrect ? (
            <Typography
              className={classes.answerItem}
              color="inherit"
              variant="body2"
            >
              <ThumbDownIcon
                className={clsx(classes.icon, classes.iconError)}
              />
              {userAnswer}
            </Typography>
          ) : null}
        </React.Fragment>
      </div>
    </Card>
  );
};

export default QuestionSummary;
