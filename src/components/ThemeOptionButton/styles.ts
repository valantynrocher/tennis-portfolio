import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $backdrop": {
          opacity: 0.15,
        },
      },
    },
    focusVisible: {},
    content: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      padding: theme.spacing(2),
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    backdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    title: {
      position: "relative",
    },
    line: {
      height: 8,
      width: "100%",
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      top: "50%",
      left: 0,
    },
    t: {
      height: 20,
      width: 8,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      top: "50%",
      left: "50%",
    },
  })
);
