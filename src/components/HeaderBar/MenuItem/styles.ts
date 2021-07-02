import yellow from "@material-ui/core/colors/yellow";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: 45,
        margin: theme.spacing(0, 1.5),
        "&:last-child": {
          marginRight: "0 !important",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          display: "block",
          width: "100%",
          height: 3,
          transition: theme.transitions.create("transform"),
          transform: "scaleX(0)",
          bottom: -4,
          backgroundColor: theme.palette.info.contrastText,
        },
      },
      hover: {
        cursor: "pointer",
        "&::after": {
          transform: "scaleX(1)",
        },
      },
      icon: {
        margin: theme.spacing(0, 1),
        display: "block",
        color: yellow[500],
        width: 24,
        height: 24,
        position: "relative",
        boxSizing: "border-box",
        "& > *": {
          display: "inline-block",
          float: "none",
          backgroundColor: "currentColor",
          border: "0 solid currentColor",
          position: "absolute",
          left: 0,
        },
      },
      ball: {
        top: "-25%",
        zIndex: 1,
        height: "100%",
        borderRadius: "50%",
        position: "relative",
        boxSizing: "border-box",
        width: 24,
        animation: "$ball-animate 0.6s -0.1s linear infinite",
      },
      shadow: {
        bottom: "-25%",
        height: 3,
        background: "#000",
        borderRadius: "50%",
        opacity: 0.2,
        width: "100%",
        animation: "$shadow-animate 0.6s -0.1s linear infinite",
      },
      link: {
        textDecoration: "none",
        color: theme.palette.info.contrastText,
      },
      text: {
        fontWeight: 600,
        textTransform: "uppercase",
        padding: theme.spacing(0, 1),
      },
      /**
       * Animations
       */
      "@keyframes ball-animate": {
        "25%": {
          transform: "translateY(25%) rotate(22.5deg)",
        },
        "50%": {
          transform: "translateY(50%) scale(1, 0.75)",
        },
        "75%": {
          transform: "translateY(25%)",
        },
        "100%": {
          transform: "translateY(0) rotate(90deg)",
        },
      },
      "@keyframes shadow-animate": {
        "50%": {
          transform: "scale(0.2, 0.2)",
        },
      },
    }),
  {
    name: "SidebarMenuItemStyles",
  }
);
