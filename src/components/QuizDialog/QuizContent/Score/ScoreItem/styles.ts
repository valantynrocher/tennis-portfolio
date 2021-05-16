import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
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
    name: "ScoreItemStyles",
  }
);
