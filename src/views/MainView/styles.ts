import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const BAR_SIZE = 150;

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: theme.palette.info.main,
      },
      main: {
        display: "flex",
        flex: "1 1 100%",
        overflow: "auto",
      },
      header: {
        display: "flex",
        alignItems: "center",
        flex: `0 0 ${BAR_SIZE}px`,
        color: theme.palette.info.contrastText,
        padding: theme.spacing(3),
      },
      sidebar: {
        width: BAR_SIZE,
        minWidth: BAR_SIZE,
      },
      content: {
        flexGrow: 1,
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: theme.palette.grey[300],
        // borderTopLeftRadius: 10,
      },
    }),
  {
    name: "MainViewStyles",
  }
);

// export const useStyles = makeStyles(
//   (theme: Theme) =>
//     createStyles({
//       wrapper: {
//         display: "flex",
//         height: "100%",
//         backgroundColor: theme.palette.info.main,
//       },
//       sidebar: (props: StyleProps) => ({
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//         overflow: "hidden",
//         width: 250,
//         minWidth: 250,
//         background: props.isLondon
//           ? `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.primary.main} 50%,${theme.palette.secondary.main} 50%,${theme.palette.secondary.main})`
//           : theme.palette.primary.main,
//         backgroundSize: props.isLondon ? "40%" : "initial",
//         boxShadow: `5px 0 12px -2px ${theme.palette.grey[600]}`,
//         zIndex: theme.zIndex.drawer,
//       }),
//       main: {
//         height: "100%",
//         flexGrow: 1,
//         overflow: "auto",
//         padding: theme.spacing(3),
//       },
//     }),
//   {
//     name: "MainViewStyles",
//   }
// );
