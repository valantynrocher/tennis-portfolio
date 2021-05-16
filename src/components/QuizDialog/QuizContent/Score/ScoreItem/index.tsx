import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ThumbDownIcon from "../../../../Icons/ThumbDownIcon";
import ThumbUpIcon from "../../../../Icons/ThumbUpIcon";
import { ScoreItemProps } from "./props";
import { useStyles } from "./styles";

const ScoreItem = (props: ScoreItemProps) => {
  const { isCorrect, question, answer, userAnswer } = props;
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemAvatar>
        {isCorrect ? (
          <ThumbUpIcon className={classes.avatarSuccess} />
        ) : (
          <ThumbDownIcon className={classes.avatarError} />
        )}
      </ListItemAvatar>
      <ListItemText
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
      />
    </ListItem>
  );
};

export default ScoreItem;
