"use client";
import clsx from "clsx";
import { CardFlip } from "./CardFlip";
import { useGuessingCard } from "./GuessingCardHook";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { useState } from "react";

export const GuessingCard = ({
  data,
  handleLikeCard,
  handleDislikeCard,
  isAhead,
}: {
  data: any;
  handleLikeCard: any;
  handleDislikeCard: any;
  isAhead: boolean;
}) => {
  const [changing, setChanging] = useState(false);
  const [frontSide, setFrontSide] = useState(true);
  const { refCard } = useGuessingCard({ handleLikeCard, handleDislikeCard, frontSide });

  const handleRevealRiddle = () => {
    if (!frontSide) return;
    setChanging(true);
    setFrontSide(!frontSide);
    setTimeout(() => {
      setChanging(false);
    }, 1000);
  };

  return (
    <div
      className={clsx(
        "absolute flex flex-col items-center justify-center w-full h-full z-10",
        Math.random() > 0.5 ? "rotate-2" : "-rotate-2",
        isAhead ? "rotate-0" : ""
      )}
      ref={refCard}
      draggable
    >
      <CardFlip className="h-full w-full p-10" changing={changing} handleClick={handleRevealRiddle}>
        <div className="flex flex-col items-center justify-evenly w-full h-full bg-[#222e35] rounded-3xl p-10 border border-[#1a242a] shadow-2xl">
          <Heading1>{data.riddle}</Heading1>
          <Heading2
            className={clsx(
              "uppercase mt-5 transition-all duration-1000 ease-linear",
              frontSide ? "opacity-0" : "opacity-100"
            )}
          >
            {data.title}
          </Heading2>
        </div>
      </CardFlip>
    </div>
  );
};
