import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      avatar: {
        position: "relative",
        width: 250,
        height: 250,
        objectFit: "cover",
      },
      spinner: {
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        border: "4px solid transparent",
        borderTopColor: theme.palette.common.white,
        visibility: "hidden",
        zIndex: 100,
        "&::before, &::after": {
          content: "''",
          position: "absolute",
          borderRadius: "50%",
          border: "4px solid transparent",
        },
        "&::before": {
          top: 4,
          left: 4,
          right: 4,
          bottom: 4,
          borderTopColor: theme.palette.info.main,
        },
        "&::after": {
          top: 15,
          left: 15,
          right: 15,
          bottom: 15,
          borderTopColor: "#FFC107",
        },
      },
      animateSpinner: {
        animation: "$spin 2s linear infinite",
        animationDelay: "0.3s",
        "&::before": {
          animation: "$spin 3.5s linear infinite",
          animationDelay: "1s",
        },
        "&::after": {
          animation: "$spin 1.75s linear infinite",
          animationDelay: "1s",
        },
      },
      imageOverlay: {
        position: "absolute",
        top: theme.spacing(2),
        left: theme.spacing(2),
        width: `calc(100% - ${theme.spacing(4)}px)`,
        height: `calc(100% - ${theme.spacing(4)}px)`,
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5,
        zIndex: 75,
        borderRadius: "50%",
        transition: "opacity 0.3s",
      },
      hideOverlay: {
        opacity: 0,
      },
      image: {
        position: "relative",
        padding: theme.spacing(2),
        maxWidth: "100%",
        borderRadius: "50%",
        zIndex: 50,
      },
      /**
       * ANIMATIONS
       */
      "@keyframes spin": {
        from: {
          transform: "rotate(0deg)",
          visibility: "initial",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    }),
  {
    name: "MyAvatarStyles",
  }
);
