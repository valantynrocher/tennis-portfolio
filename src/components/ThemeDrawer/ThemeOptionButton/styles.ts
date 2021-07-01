import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export interface StylesProps {
  primary: string;
  secondary: string;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      height: 125,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: 100,
      },
      width: "100%",
      margin: theme.spacing(2, 0),
      color: theme.palette.info.contrastText,
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $backdrop": {
          opacity: 0.15,
        },
      },
    },
    baseBackground: (props: StylesProps) => ({
      background: `repeating-linear-gradient(180deg,${props.primary},${props.primary} 50%,${props.secondary} 50%,${props.secondary})`,
      backgroundSize: "100%",
    }),
    londonBackground: (props: StylesProps) => ({
      background: `repeating-linear-gradient(90deg,${props.primary},${props.primary} 50%,${props.secondary} 50%,${props.secondary})`,
      backgroundSize: "100px",
    }),
    content: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      color: theme.palette.common.white,
      zIndex: 3,
    },
    backdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.45,
      transition: theme.transitions.create("opacity"),
      zIndex: 2,
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
      zIndex: 1,
    },
    t: {
      height: 20,
      width: 8,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      zIndex: 1,
    },
  })
);
