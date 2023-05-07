"use client";
import { CardFlip } from "./CardFlip";
import { useGuessingCard } from "./GuessingCardHook";
import { Heading1 } from "./Heading1";

export const GuessingCard = ({
  data,
  handleLikeCard,
  handleDislikeCard,
  handleRevealRiddle,
  changing,
  frontSide,
}: {
  data: any;
  handleLikeCard: any;
  handleDislikeCard: any;
  handleRevealRiddle: any;
  changing: boolean;
  frontSide: boolean;
}) => {
  const { refCard } = useGuessingCard({ handleLikeCard, handleDislikeCard });
  return (
    <div className="absolute flex flex-col items-center justify-center w-full h-full">
      <CardFlip className="h-full w-full p-10" changing={changing} handleClick={handleRevealRiddle}>
        <div
          className="flex flex-col items-center justify-center w-full h-full bg-[#222e35] rounded-3xl p-10"
          ref={refCard}
          draggable
        >
          <Heading1>{data.riddle}</Heading1>
          {!frontSide && <Heading1>{data.title}</Heading1>}
        </div>
      </CardFlip>
    </div>
  );
};
