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
  }, []);

  return (
    <>
      {data.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl sm:text-4xl font-[fortnite] text-white">¡Felicidades!</h1>
          <h2 className="text-xl sm:text-2xl font-[fortnite] text-white">
            Has completado el juego
          </h2>
        </div>
      )}
      {data.map((item, index) => (
        <GuessingCard
          key={item.title}
          data={item}
          handleLikeCard={handleLikeCard}
          handleDislikeCard={handleDislikeCard}
          isAhead={index >= data.length - 2}
          isLast={index === data.length - 1}
          isVisible={index > data.length - 5}
        />
      ))}
    </>
  );
};
