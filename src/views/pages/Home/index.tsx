import clsx from "clsx";
import isEqual from "lodash/isEqual";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import useResizeObserver from "../../../hooks/useResizeObserver";
import RouteView from "../../../Layout/RouteView";
import { DimensionsStyleProps, useStyles } from "./styles";

const Home = () => {
  const { themeName } = useContext(AppContext);
  const rootRef = useRef<HTMLElement>();
  const [styleProps, setStyleProps] = useState<DimensionsStyleProps>({
    height: 0,
    width: 0,
    angle: 0,
    lineWidth: 0,
  });
  const classes = useStyles({
    isLondon: themeName === "London",
    ...styleProps,
  });

  const resizeFn = () => {
    if (rootRef.current) {
      const { offsetHeight, offsetWidth } = rootRef.current;
      const hypotenuse = Math.sqrt(
        offsetHeight * offsetHeight + offsetWidth * offsetWidth
      );
      const sinOfAngle = offsetHeight / hypotenuse;
      const angle = (Math.asin(sinOfAngle) * 180) / Math.PI;
      const newDimensions: DimensionsStyleProps = {
        width: offsetWidth,
        height: offsetHeight,
        angle,
        lineWidth: hypotenuse * 2,
      };

      if (!isEqual(styleProps, newDimensions)) {
        setStyleProps(newDimensions);
      }
    }
  };

  useResizeObserver(rootRef, resizeFn);

  return (
    <RouteView>
      <div className={clsx(classes.root)} ref={rootRef as any}>
        <div>
          <div className={classes.innerCourt} />
          <div className={classes.lines} />
        </div>
      </div>
    </RouteView>
  );
};

export default Home;
