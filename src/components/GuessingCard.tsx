"use client";
import { useGuessingCard } from "./GuessingCardHook";
import { Heading1 } from "./Heading1";

export const GuessingCard = ({
  data,
  handleLikeCard: handleLikeCard,
  handleDislikeCard: handleDislikeCard,
}: {
  data: any;
  handleLikeCard: any;
  handleDislikeCard: any;
}) => {
  const { refCard } = useGuessingCard({ handleLikeCard, handleDislikeCard });
  return (
    <div
      className="absolute flex flex-col items-center justify-center w-full h-full bg-[#222e35] rounded-3xl p-10"
      ref={refCard}
      draggable
    >
      <Heading1>{data.riddle}</Heading1>
    </div>
  );
};
