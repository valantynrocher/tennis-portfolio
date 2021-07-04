import RouteView from "../../../Layout/RouteView";
import { useStyles } from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <RouteView>
      <div className={classes.root}>
        <div className={classes.section}></div>
        <div className={classes.sectionBis}></div>
      </div>
    </RouteView>
  );
};

export default About;
