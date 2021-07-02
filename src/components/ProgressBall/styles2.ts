// https://labs.danielcardoso.net/load-awesome/animations/ball-running-dots.html
import { yellow } from "@material-ui/core/colors";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ProgressBallProps, ProgressBallSizeType } from "./props";

interface StyleProps extends ProgressBallProps {}

interface StyleSize {
  width: number;
  height: number;
  marginLeft?: number;
}

const SizeMap: {
  [key in ProgressBallSizeType]: StyleSize;
} = {
  sm: {
    width: 4,
    height: 4,
    marginLeft: -12,
  },
  md: {
    width: 10,
    height: 10,
    marginLeft: -25,
  },
  lg: {
    width: 20,
    height: 20,
    marginLeft: -50,
  },
  xl: {
    width: 30,
    height: 30,
    marginLeft: -75,
  },
};

export const useStyles2 = (props: StyleProps) =>
  makeStyles(
    (theme) =>
      createStyles({
        root: {
          position: "relative",
          boxSizing: "border-box",
          display: "block",
          color: theme.palette.common.white,
          width: SizeMap[props.size].width,
          height: SizeMap[props.size].height,
        },
        child: {
          position: "absolute",
          boxSizing: "border-box",
          display: "inline-block",
          backgroundColor: yellow[500],
          width: SizeMap[props.size].width,
          height: SizeMap[props.size].height,
          marginLeft: SizeMap[props.size].marginLeft,
          borderRadius: "100%",
          animation: "$ball-running-dots-animate 2s linear infinite",
          "&:nth-child(1)": {
            animationDelay: "0s",
          },
          "&:nth-child(2)": {
            animationDelay: "-0.4s",
          },
          "&:nth-child(3)": {
            animationDelay: "-0.8s",
          },
          "&:nth-child(4)": {
            animationDelay: "-1.2s",
          },
          "&:nth-child(5)": {
            animationDelay: "-1.6s",
          },
          "&:nth-child(6)": {
            animationDelay: "-2s",
          },
          "&:nth-child(7)": {
            animationDelay: "-2.4s",
          },
          "&:nth-child(8)": {
            animationDelay: "-2.8s",
          },
          "&:nth-child(9)": {
            animationDelay: "-3.2s",
          },
          "&:nth-child(10)": {
            animationDelay: "-3.6s",
          },
        },
        /**
         * ANIMATIONS
         */
        "@keyframes ball-running-dots-animate": {
          "0%, 100%": {
            width: "100%",
            height: "100%",
            transform: "translateY(0) translateX(500%)",
          },
          "80%": {
            transform: "translateY(0) translateX(0)",
          },
          "85%": {
            width: "100%",
            height: "100%",
            transform: "translateY(-125%) translateX(0)",
          },
          "90%": {
            width: "200%",
            height: "75%",
          },
          "95%": {
            width: "100%",
            height: "100%",
            transform: "translateY(-100%) translateX(500%)",
          },
        },
      }),
    {
      name: "ProgressBallStyles",
    }
  );
