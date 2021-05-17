import {
  Theme,
  makeStyles,
  createStyles,
  fade,
} from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        margin: theme.spacing(1, 0),
        backgroundColor: theme.palette.info.main,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.common.white,
      },
      header: {
        alignItems: "flex-start",
      },
      avatarSuccess: {
        color: theme.palette.success.dark,
      },
      avatarError: {
        color: theme.palette.error.dark,
      },
      primary: {
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: 600,
      },
    }),
  {
    name: "QuestionSummaryStyles",
  }
);
