import React from "react";
import { useEffect, useState } from "react";
import LoadingBackdrop from "../../components/LoadingBackdrop";
import { RouteViewProps } from "./props";

const generateRandomTimeout = (min = 1000, max = 1500) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const RouteView = (props: RouteViewProps) => {
  const { children } = props;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const timeout = generateRandomTimeout();
      await new Promise((r) => setTimeout(r, timeout));
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  return (
    <React.Fragment>
      <LoadingBackdrop isVisible={isLoading} />
      {children}
    </React.Fragment>
  );
};

export default RouteView;
