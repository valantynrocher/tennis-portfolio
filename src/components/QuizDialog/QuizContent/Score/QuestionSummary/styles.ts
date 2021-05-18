import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        margin: theme.spacing(1, 0),
        backgroundColor: "transparent",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.common.white,
        color: theme.palette.info.contrastText,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(),
      },
      question: {
        padding: theme.spacing(0, 1),
      },
      answer: {
        padding: theme.spacing(0, 1),
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
      },
      answerItem: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(1),
      },
      icon: {
        width: 15,
        height: 15,
        marginRight: theme.spacing(0.5),
      },
      iconSuccess: {
        color: yellow.A200,
      },
      iconError: {
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
