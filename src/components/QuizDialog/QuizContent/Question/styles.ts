import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      content: {
        padding: theme.spacing(0, 3),
      },
      questionText: {
        paddingBottom: theme.spacing(2),
      },
      buttonGroup: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
      groupedHorizontal: {
        borderLeft: "none",
        borderRadius: "50%",
        "&:not(:first-child)": {
          borderLeft: "none",
          marginLeft: 0,
          borderRadius: 30,
        },
        "&:not(:last-child)": {
          borderRadius: 30,
        },
      },
      toggleButton: {
        position: "relative",
        color: theme.palette.common.white,
        margin: theme.spacing(1, 0),
        paddingLeft: 55,
        borderColor: "rgba(255, 255, 255, 0.25)",
      },

      icon: {
        position: "absolute",
        left: 0,
        width: 46,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: yellow.A200,
        borderRadius: "50%",
        borderWidth: 1,
        borderStyle: "solid",
      },
      "@global": {
        ".MuiToggleButton-root.Mui-selected": {
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          backgroundColor: "initial",
        },
        ".MuiToggleButton-root:hover": {
          borderColor: theme.palette.primary.main,
          backgroundColor: "initial",
        },
      },
    }),
  {
    name: "QuizQuestionStyles",
  }
);
