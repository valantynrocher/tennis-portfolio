import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    }),
  {
    name: "QuizTitleStyles",
  }
);
