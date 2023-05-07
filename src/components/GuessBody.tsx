"use client";
import { GuessingCard } from "@/components/GuessingCard";
import { useEffect, useState } from "react";
import guessing from "@/data/guessing.json";

export const GuessBody = () => {
  const [data, setData] = useState([] as any[]);

  const handleLikeCard = () => {
    removeCard();
  };

  const handleDislikeCard = () => {
    removeCard();
  };

  const removeCard = () => {
    data.pop();
    setData([...data]);
  };

  useEffect(() => {
    setData(guessing.sort(() => Math.random() - 0.5));

  }, [data]);

  return (
    <>
      {data.map((item) => (
        <GuessingCard
          key={item.title}
          data={item}
          handleLikeCard={handleLikeCard}
          handleDislikeCard={handleDislikeCard}
        />
      ))}
    </>
  );
};
