import { yellow } from "@material-ui/core/colors";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

interface StyleProps {
  externLink: boolean;
}

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      button: (props: StyleProps) => ({
        color: theme.palette.secondary.main,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        backgroundColor: theme.palette.info.main,
        margin: theme.spacing(2, 0),
        "&:hover": {
          color: yellow[500],
          backgroundColor: theme.palette.info.dark,
          cursor: props.externLink
            ? "url('/svg/open_in_new_black_24dp.svg'), auto"
            : "pointer",
        },
      }),
      arrow: {
        color: yellow[500],
      },
      tooltip: {
        ...theme.typography.button,
        fontFamily: "Titillium Web",
        color: theme.palette.info.main,
        backgroundColor: yellow[500],
      },
    }),
  {
    name: "SidebarButtonStyles",
  }
);
