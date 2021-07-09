import RouteView from "../../../Layout/RouteView";
import { useStyles } from "./styles";

const Works = () => {
  const classes = useStyles();
  return (
    <RouteView>
      <div className={classes.root}>Réalisations</div>
    </RouteView>
  );
};

export default Works;
