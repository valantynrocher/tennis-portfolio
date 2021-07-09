import { makeStyles, createStyles } from "@material-ui/core/styles";
import { BAR_SIZE } from "../../MainView/styles";

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {},
      section: {
        backgroundColor: theme.palette.primary.main,
        "&:first-child": {
          minHeight: `calc(100vh - ${BAR_SIZE}px)`,
        },
      },
      sectionContent: {
        position: "relative",
        padding: theme.spacing(5),
      },
      title: {
        position: "absolute",
        top: 40,
        right: theme.spacing(5),
        fontWeight: 900,
        textTransform: "uppercase",
        color: theme.palette.info.dark,
        opacity: 0.15,
      },
      row: {
        display: "flex",
        alignItems: "center",
        "& > :first-child": {
          marginRight: theme.spacing(2),
        },
        "& > :last-child": {
          marginLeft: theme.spacing(2),
          flex: 1,
        },
      },
      contrastText: {
        color: theme.palette.primary.contrastText,
      },
      hello: {
        fontWeight: 600,
        color: theme.palette.info.main,
      },
      technologies: {
        display: "flex",
        alignItems: "flex-start",
      },
    }),
  {
    name: "AboutViewStyles",
  }
);
