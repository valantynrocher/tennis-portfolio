import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import FabGroup from "../../components/FabGroup";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/Sidebar";
import Routes from "../../routes/Routes";
import { useStyles } from "./styles";

const MainView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {/* <div className={classes.sidebar}>
        <SidebarHeader />
        <SidebarMenu />
        <SidebarSocial />
      </div> */}
      <div className={classes.header}>
        <HeaderBar />
      </div>

      <main className={classes.main}>
        {!mobile && (
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
        )}
        <div className={classes.content}>
          <Routes />
        </div>
      </main>
    </div>
  );
};

export default MainView;
