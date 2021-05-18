import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        paddingRight: theme.spacing(3),
      },
      container: {
        height: 20,
        borderRadius: 50,
        backgroundColor: fade(theme.palette.common.white, 0.1),
      },
      filler: {
        height: "100%",
        borderRadius: "inherit",
        backgroundColor: theme.palette.primary.main,
      },
    }),
  {
    name: "QuizProgressStyles",
  }
);
