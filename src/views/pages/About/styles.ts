import { makeStyles, createStyles } from "@material-ui/core/styles";
import { BAR_SIZE } from "../../MainView/styles";

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {},
      section: {
        backgroundColor: theme.palette.primary.main,
        height: `calc(100vh - ${BAR_SIZE}px)`,
      },
      sectionBis: {
        backgroundColor: theme.palette.grey[300],
        height: 300,
      },
    }),
  {
    name: "AboutViewStyles",
  }
);
