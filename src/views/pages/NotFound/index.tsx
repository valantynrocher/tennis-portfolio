import { useStyles } from "./styles";

const NotFound = () => {
  const classes = useStyles();
  return <div className={classes.root}>OUT ! Cette page n'existe pas.</div>;
};

export default NotFound;
