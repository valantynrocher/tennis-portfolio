import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      paper: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
        minWidth: 700,
        height: "100%",
      },
    }),
  {
    name: "QuizDialogStyles",
  }
);
