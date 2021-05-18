import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      "@global": {
        ".MuiButton-contained.Mui-disabled": {
          backgroundColor: theme.palette.primary.light,
        },
      },
    }),
  {
    name: "QuizActionsStyles",
  }
);
