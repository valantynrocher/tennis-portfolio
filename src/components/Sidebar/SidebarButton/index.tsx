import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { SidebarButtonProps } from "./props";
import { useStyles } from "./styles";

const SidebarButton = (props: SidebarButtonProps) => {
  const { title, externLink = false, onClick, Icon } = props;
  const classes = useStyles({ externLink });

  return (
    <Tooltip
      title={title}
      placement="right"
      arrow
      classes={{
        arrow: classes.arrow,
        tooltip: classes.tooltip,
      }}
    >
      <IconButton onClick={onClick} className={classes.button}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default SidebarButton;
