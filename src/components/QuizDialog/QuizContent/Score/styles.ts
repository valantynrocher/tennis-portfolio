import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      paperRounded: {
        borderRadius: 10,
      },
      scoreboardPaper: {
        position: "relative",
        maxWidth: 380,
        padding: theme.spacing(4.5, 4),
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(2, "auto"),
      },
      scoreboardTitle: {
        position: "absolute",
        height: 35,
        width: 150,
        left: "calc(50% - 75px)",
        top: -17.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
      },
      scoreboardContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.common.white,
        "& > :first-child": {
          marginRight: theme.spacing(2),
        },
        "& > :last-child": {
          marginLeft: theme.spacing(2),
        },
      },
      numberPaper: {
        width: 250,
        padding: theme.spacing(0.5, 0),
        backgroundColor: theme.palette.info.main,
      },
      number: {
        fontWeight: 900,
      },
      score: {
        color: yellow.A200,
      },
      count: {
        color: theme.palette.common.white,
      },
      summary: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > :first-child": {
          // marginRight: theme.spacing(),
        },
        "& > :last-child": {
          // marginLeft: theme.spacing(),
        },
        "& > *": {
          width: "calc(33% - 8px)",
        },
      },
    }),
  {
    name: "QuizContentStyles",
  }
);
