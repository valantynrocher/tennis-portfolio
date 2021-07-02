// https://labs.danielcardoso.net/load-awesome/animations/ball-clip-rotate-pulse.html
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ProgressBallProps, ProgressBallSizeType } from "./props";

interface StyleProps extends ProgressBallProps {}

interface StyleSize {
  width: number;
  height: number;
  borderWidth?: number;
}

interface StyleSizeGroup {
  firstChild: StyleSize;
  lastChild: StyleSize;
}

const SizeMap: {
  [key in ProgressBallSizeType]: StyleSizeGroup;
} = {
  sm: {
    firstChild: {
      width: 16,
      height: 16,
      borderWidth: 1,
    },
    lastChild: {
      width: 8,
      height: 8,
    },
  },
  md: {
    firstChild: {
      width: 32,
      height: 32,
      borderWidth: 2,
    },
    lastChild: {
      width: 16,
      height: 16,
    },
  },
  lg: {
    firstChild: {
      width: 64,
      height: 64,
      borderWidth: 4,
    },
    lastChild: {
      width: 32,
      height: 32,
    },
  },
  xl: {
    firstChild: {
      width: 96,
      height: 96,
      borderWidth: 6,
    },
    lastChild: {
      width: 48,
      height: 48,
    },
  },
};

export const useStyles = (props: StyleProps) =>
  makeStyles(
    (theme) =>
      createStyles({
        root: {
          position: "relative",
          boxSizing: "border-box",
          color: theme.palette.common.white,
          width: SizeMap[props.size].firstChild.width,
          height: SizeMap[props.size].firstChild.height,
        },
        child: {
          borderSizing: "border-box",
          display: "inline-block",
          float: "none",
          borderStyle: "solid",
          borderWidth: 0,
          borderColor: theme.palette.common.white,
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius: "100%",
          "&:first-child": {
            width: SizeMap[props.size].firstChild.width,
            height: SizeMap[props.size].firstChild.height,
            borderStyle: "solid",
            borderWidth: SizeMap[props.size].firstChild.borderWidth!,
            borderRightColor: "transparent",
            borderLeftColor: "transparent",
            animation:
              "$ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09, .57, .49, .9) infinite",
          },
          "&:last-child": {
            width: SizeMap[props.size].lastChild.width,
            height: SizeMap[props.size].lastChild.height,
            backgroundColor: theme.palette.common.white,
            animation:
              "$ball-clip-rotate-pulse-scale 1s cubic-bezier(.09, .57, .49, .9) infinite",
          },
        },
        /**
         * ANIMATIONS
         */
        "@keyframes ball-clip-rotate-pulse-rotate": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
          },
          "50%": {
            transform: "translate(-50%, -50%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
        "@keyframes ball-clip-rotate-pulse-scale": {
          "0%, 100%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          "30%": {
            opacity: 0.3,
            transform: "translate(-50%, -50%) scale(.15)",
          },
        },
      }),
    {
      name: "ProgressBallStyles",
    }
  );
