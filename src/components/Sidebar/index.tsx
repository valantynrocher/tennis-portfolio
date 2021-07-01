import ColorLensIcon from "@material-ui/icons/ColorLens";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SidebarButton from "./SidebarButton";
import { useStyles } from "./styles";

const Sidebar = () => {
  const { setDrawerOpen, setQuizOpen } = useContext(AppContext);
  const classes = useStyles();

  const handleLinkButtonClick = (link: string) => (e: any) => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <SidebarButton
          title="Me contacter"
          onClick={handleLinkButtonClick("mailto:valentinrocher@gmail.com")}
          Icon={MailIcon}
          externLink={true}
        />
        <SidebarButton
          title="Github"
          onClick={handleLinkButtonClick("https://github.com/valantynrocher")}
          Icon={GitHubIcon}
          externLink={true}
        />
        <SidebarButton
          title="Linkedin"
          onClick={handleLinkButtonClick(
            "https://www.linkedin.com/in/valentin-rocher/"
          )}
          Icon={LinkedInIcon}
          externLink={true}
        />
        <SidebarButton
          title="Twitter"
          onClick={handleLinkButtonClick("https://twitter.com/valantynrocher")}
          Icon={TwitterIcon}
          externLink={true}
        />
        <SidebarButton
          title="Personnaliser"
          onClick={() => setDrawerOpen(true)}
          Icon={ColorLensIcon}
          externLink={false}
        />
        <SidebarButton
          title="Jouer"
          onClick={() => setQuizOpen(true)}
          Icon={SportsEsportsIcon}
          externLink={false}
        />
      </div>
    </div>
  );
};

export default Sidebar;
