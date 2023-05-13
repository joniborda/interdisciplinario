import React from "react";

import { data } from "../data";
export const useCardFlip = () => {
  const [changing, setChanging] = React.useState(false);
  const [dataRandom, setDataRandom] = React.useState(data);
  const [currentProblem, setCurrentProblem] = React.useState(dataRandom[dataRandom.length - 1]);
  const handleClick = () => {
    setChanging(true);
    dataRandom.pop();
    setCurrentProblem(dataRandom[dataRandom.length - 1]);
    setDataRandom([...dataRandom]);
  };

  React.useEffect(() => {
    if (changing) {
      setTimeout(() => {
        setChanging(false);
      }, 1000);
    }
  }, [changing]);

  React.useEffect(() => {
    setDataRandom(dataRandom.sort(() => Math.random() - 0.5));
    setCurrentProblem(dataRandom[dataRandom.length - 1]);
  }, []);

  return { changing, handleClick, currentProblem };
};
