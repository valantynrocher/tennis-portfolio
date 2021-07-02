import { makeStyles, createStyles } from "@material-ui/core/styles";

export interface DimensionsStyleProps {
  width: number;
  height: number;
  angle: number;
  lineWidth: number;
}

interface StyleProps extends DimensionsStyleProps {
  isLondon: boolean;
}

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: (props: StyleProps) => ({
        position: "relative",
        width: "100%",
        height: "100%",
        background: props.isLondon
          ? `repeating-linear-gradient(
          ${90 + props.angle}deg,
          ${theme.palette.primary.main},
          ${theme.palette.primary.main},
          200px,
          ${theme.palette.secondary.main} 200px,
          ${theme.palette.secondary.main} 400px)`
          : theme.palette.primary.main,
        overflow: "hidden",
      }),
      innerCourt: (props: StyleProps) => ({
        position: "absolute",
        top: 0,
        left: 0,
        borderBottom: `${props.height}px solid ${
          props.isLondon ? "transparent" : theme.palette.secondary.main
        }`,
        borderRight: `${props.width}px solid transparent`,
        zIndex: 0,
      }),
      lines: (props: StyleProps) => ({
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        transform: `rotate(${props.angle}deg)`,
        transformOrigin: "center",
        "&::before, &::after": {
          content: "''",
          position: "absolute",
        },
        "&::before": {
          top: "calc(50%)",
          left: "50%",
          width: 12,
          height: 25,
          background: theme.palette.common.white,
        },
        "&::after": {
          top: "calc(50% - 6px)",
          left: "-50%",
          width: props.lineWidth,
          height: 12,
          background: theme.palette.common.white,
        },
      }),
    }),
  {
    name: "HomeViewStyles",
  }
);
