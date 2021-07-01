import { yellow } from "@material-ui/core/colors";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        padding: theme.spacing(2, 0),
      },
      container: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        "&::before": {
          content: "''",
          position: "absolute",
          width: 1,
          height: "100%",
          left: "calc(50% - 0.5px)",
          bottom: -theme.spacing(2),
          backgroundColor: theme.palette.primary.main,
        },
      },
      button: {
        color: theme.palette.secondary.main,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        backgroundColor: theme.palette.info.main,
        margin: theme.spacing(2, 0),
        "&:hover": {
          color: yellow[500],
          backgroundColor: theme.palette.info.dark,
        },
      },
    }),
  {
    name: "SidebarStyles",
  }
);
