"use client";
import { GuessingCard } from "@/components/GuessingCard";
import { useEffect, useState } from "react";
import guessing from "@/data/guessing.json";

export const GuessBody = () => {
  const [data, setData] = useState([] as any[]);
  const [changing, setChanging] = useState(false);
  const [frontSide, setFrontSide] = useState(true);

  const handleLikeCard = () => {
    removeCard();
  };

  const handleDislikeCard = () => {
    removeCard();
  };

  const removeCard = () => {
    data.pop();
    setData([...data]);
    setFrontSide(true);
  };

  const handleRevealRiddle = () => {
    if (!frontSide) return;
    setChanging(true);
    setFrontSide(!frontSide);
    setTimeout(() => {
      setChanging(false);
    }, 1000);
  };

  useEffect(() => {
    setData(guessing.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      {data.map((item) => (
        <GuessingCard
          key={item.title}
          data={item}
          handleLikeCard={handleLikeCard}
          handleDislikeCard={handleDislikeCard}
          handleRevealRiddle={handleRevealRiddle}
          changing={changing}
          frontSide={frontSide}
        />
      ))}
    </>
  );
};
