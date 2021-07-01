import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      },
      logo: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
        },
      },
      logoIcon: {
        marginRight: theme.spacing(2),
        fill: theme.palette.info.light,
      },
      text: {
        textAlignLast: "justify",
      },
      title: {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      },
      subtitle: {
        fontSize: theme.typography.h6.fontSize,
        color: yellow[300],
        fontWeight: 700,
        letterSpacing: "0.3em",
      },
      navigation: {
        display: "flex",
        padding: theme.spacing(2),
      },
    }),
  {
    name: "HeaderBarStyles",
  }
);
