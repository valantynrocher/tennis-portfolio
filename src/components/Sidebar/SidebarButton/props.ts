export interface SidebarButtonProps {
  title: string;
  externLink: boolean;
  onClick: (e: any) => void;
  Icon: (props: any) => JSX.Element;
}
