import React from "react";

import { data } from "../data";
export const useCardFlip = () => {
  const [changing, setChanging] = React.useState(false);
  const dataRandom = data.sort(() => Math.random() - 0.5);
  const [currentProblem, setCurrentProblem] = React.useState(dataRandom[dataRandom.length - 1]);
  const handleClick = () => {
    setChanging(true);
    dataRandom.pop();
    setCurrentProblem(dataRandom[dataRandom.length - 1]);
  };

  React.useEffect(() => {
    if (changing) {
      setTimeout(() => {
        setChanging(false);
      }, 1000);
    }
  }, [changing]);

  return { changing, handleClick, currentProblem };
};
