import Slide from "@material-ui/core/Slide";
import { useStyles } from "./styles";

const Works = () => {
  const classes = useStyles();
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>Réalisations</div>
    </Slide>
  );
};

export default Works;
