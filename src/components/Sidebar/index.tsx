import IconButton from "@material-ui/core/IconButton";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useStyles } from "./styles";

const Sidebar = () => {
  const { setDrawerOpen, setQuizOpen } = useContext(AppContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <IconButton className={classes.button}>
          <MailIcon />
        </IconButton>
        <IconButton className={classes.button}>
          <LinkedInIcon />
        </IconButton>
        <IconButton className={classes.button}>
          <TwitterIcon />
        </IconButton>
        <IconButton
          onClick={() => setDrawerOpen(true)}
          className={classes.button}
        >
          <ColorLensIcon />
        </IconButton>
        <IconButton
          onClick={() => setQuizOpen(true)}
          className={classes.button}
        >
          <SportsEsportsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
