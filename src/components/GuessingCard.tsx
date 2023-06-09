"use client";
import clsx from "clsx";
import { CardFlip } from "./CardFlip";
import { useGuessingCard } from "./GuessingCardHook";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { useState } from "react";
import { LeftIcon } from "./Icons/LeftIcon";
import { RightIcon } from "./Icons/RightIcon";

export const GuessingCard = ({
  data,
  handleLikeCard,
  handleDislikeCard,
  isAhead,
  isLast,
  isVisible,
}: {
  data: any;
  handleLikeCard: any;
  handleDislikeCard: any;
  isAhead: boolean;
  isLast: boolean;
  isVisible: boolean;
}) => {
  const [changing, setChanging] = useState(false);
  const [frontSide, setFrontSide] = useState(true);
  const [clicked, setClicked] = useState(false);
  const { refCard } = useGuessingCard({ handleLikeCard, handleDislikeCard, frontSide });

  const handleRevealRiddle = () => {
    if (!frontSide) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 4000);
      return;
    }
    setChanging(true);
    setFrontSide(!frontSide);
    setTimeout(() => {
      setChanging(false);
    }, 1000);
  };

  return (
    <div
      className={clsx(
        "absolute flex flex-col items-center justify-center w-full h-full",
        isVisible ? "opacity-100" : "opacity-0",
        isAhead ? "rotate-0" : Math.random() > 0.5 ? "rotate-2" : "-rotate-2",
        isLast ? "z-20" : "z-0"
      )}
      ref={refCard}
      draggable
    >
      <CardFlip className="h-full w-full p-5 sm:p-10" changing={changing} handleClick={handleRevealRiddle}>
        <div
          className={clsx(
            "flex flex-col items-center justify-evenly w-full h-full ",
            "bg-[#222e35] rounded-3xl p-5 sm:p-10 border border-[#1a242a] shadow-2xl",
            "cursor-pointer z-10"
          )}
        >
          {isAhead && (
            <div className={clsx(clicked ? "animate-pulse" : "opacity-0")}>
              <div className="absolute top-1 left-1">
                <LeftIcon />
              </div>
              <div className="absolute top-1 right-1">
                <RightIcon />
              </div>
            </div>
          )}
          <Heading1
            className={clsx(
              "h-2/3 bg-[#0d1519a3] rounded-2xl flex items-center p-4",
              data.riddle.length > 80
                  ? "md:text-2xl sm:text-xl text-lg "
                  : "md:text-3xl sm:text-2xl text-xl "
            )}
          >
            {data.riddle}
          </Heading1>
          <Heading2
            className={clsx(
              "uppercase mt-5 transition-all duration-1000 ease-linear font-[fortnite]",
              frontSide ? "opacity-0" : "opacity-100",
              data.title.length > 20
                ? "text-2xl sm:text-4xl md:text-5xl"
                : "text-4xl sm:text-5xl md:text-6xl"
            )}
          >
            {data.title}
          </Heading2>
        </div>
      </CardFlip>
    </div>
  );
};
