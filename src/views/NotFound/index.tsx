import Slide from "@material-ui/core/Slide";
import { useStyles } from "./styles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>OUT ! Cette page n'existe pas.</div>
    </Slide>
  );
};

export default NotFound;
