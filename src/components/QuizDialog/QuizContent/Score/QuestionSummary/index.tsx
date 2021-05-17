import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
      <CardHeader
        className={classes.header}
        avatar={
          isCorrect ? (
            <ThumbUpIcon className={classes.avatarSuccess} />
          ) : (
            <ThumbDownIcon className={classes.avatarError} />
          )
        }
        title={question}
      />
      <CardContent></CardContent>
      {/* <ListItemAvatar>
        {}
      </ListItemAvatar> */}
      {/* <ListItemText
        classes={{
          primary: classes.primary,
        }}
        primary={question}
        secondary={
          <React.Fragment>
            <Typography
              style={{ color: "#fff" }}
              color="inherit"
              variant="body2"
            >
              {answer}
            </Typography>
            {!isCorrect ? (
              <Typography
                style={{ color: "#fff" }}
                color="inherit"
                variant="body2"
              >
                {userAnswer}
              </Typography>
            ) : null}
          </React.Fragment>
        }
      /> */}
    </Card>
  );
};

export default QuestionSummary;
