import React from "react";

import { data } from "../data";
export const useCardFlip = () => {
  const [changing, setChanging] = React.useState(false);
  const [currentProblem, setCurrentProblem] = React.useState(data[0]);
  const handleClick = () => {
    setChanging(true);
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentProblem(data[randomIndex]);
  };

  React.useEffect(() => {
    if (changing) {
      setTimeout(() => {
        setChanging(false);
      }, 1000);
    }
  }, [changing]);

  return { changing, handleClick,
    currentProblem };
};
