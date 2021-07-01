import Slide from "@material-ui/core/Slide";
import { useStyles } from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>A propos</div>
    </Slide>
  );
};

export default About;
