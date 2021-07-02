import Slide from "@material-ui/core/Slide";
import RouteView from "../../../Layout/RouteView";
import { useStyles } from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <RouteView>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>A propos</div>
      </Slide>
    </RouteView>
  );
};

export default About;
