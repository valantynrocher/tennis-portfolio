import Typography from "@material-ui/core/Typography";
import { useCallback } from "react";
import { useHistory } from "react-router";
import LogoIcon from "../../components/Icons/Logo";
import MenuItem from "./MenuItem";
import { useStyles } from "./styles";

const HeaderBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleAvatarClick = useCallback(() => {
    if (history.location.pathname !== "/accueil") history.push("/accueil");
  }, [history]);

  return (
    <div className={classes.root}>
      <div className={classes.logo} onClick={handleAvatarClick}>
        <LogoIcon width={63} height={63} className={classes.logoIcon} />
        <Typography className={classes.text} component="div">
          <Typography variant="h1" className={classes.title}>
            Valentin Rocher
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Développeur web
          </Typography>
        </Typography>
      </div>
      <nav className={classes.navigation}>
        <MenuItem to="a-propos" text="a propos" />
        <MenuItem to="realisations" text="réalisations" />
      </nav>
    </div>
  );
};

export default HeaderBar;
