"use client";
import { useGuessingCard } from "./GuessingCardHook";

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
      {data.title}
    </div>
  );
};
