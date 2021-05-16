import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      content: {
        width: 250,
        height: "100%",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[400],
      },
    }),
  {
    name: "ThemeDrawerStyles",
  }
);
