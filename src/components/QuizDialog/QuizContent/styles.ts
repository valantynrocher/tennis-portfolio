import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      actions: {
        padding: theme.spacing(2, 3),
        justifyContent: "space-between",
      },
    }),
  {
    name: "QuizContentStyles",
  }
);
