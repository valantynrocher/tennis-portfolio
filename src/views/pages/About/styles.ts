import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        padding: theme.spacing(3),
      },
    }),
  {
    name: "AboutViewStyles",
  }
);
