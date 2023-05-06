import React from "react";

export const useCardFlip = () => {
  const [changing, setChanging] = React.useState(false);
  const handleClick = () => {
    setChanging(true);
  };

  React.useEffect(() => {
    if (changing) {
      setTimeout(() => {
        setChanging(false);
      }, 1000);
    }
  }, [changing]);

  return { changing, handleClick };
};
