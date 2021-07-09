import { RouteComponentProps } from "react-router-dom";

export interface MenuItemProps extends RouteComponentProps {
  text: string;
  to: string;
}
