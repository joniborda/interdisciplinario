import { use, useEffect, useRef } from "react";

const getX = (e: DragEvent | TouchEvent) => {
  if ("clientX" in e) {
    return e.clientX;
  }
  return e.touches[0].clientX;
};
export const useGuessingCard = ({ handleLikeCard, handleDislikeCard, frontSide }: any) => {
  const refCard = useRef<HTMLDivElement>(null);
  const maxDragToChangePage = 150;
  let dragXCurrent = 0;
  let initialDragX = 0;

  const dragStart = (e: DragEvent | TouchEvent) => {
    const card = refCard.current;
    if (card) {
      card.style.transform = `translateX(0px)`;
      initialDragX = getX(e);

      if ("dataTransfer" in e) {
        const img = new Image();
        e?.dataTransfer?.setDragImage(img, 0, 0);
      }
    }
  };

  const dragElement = (e: DragEvent | TouchEvent) => {
    if (frontSide) return;

    const card = refCard.current;
    // stay default cursor
    if ("dataTransfer" in e && e.dataTransfer) {
      e.dataTransfer.dropEffect = "none";
    }

    const x = getX(e);
    if (card && x !== 0) {
      const dragX = x - initialDragX;
      dragXCurrent = dragX;
      card.style.transform = `rotate(${dragX / 50}deg) translateX(${dragX}px)`;

      card.style.opacity = "1";
      if (maxDragToChangePage < dragXCurrent || dragXCurrent < -maxDragToChangePage) {
        card.style.opacity = "0.8";
      }
    }
  };

  const resetPosition = () => {
    const card = refCard.current;
    if (card) {
      card.style.transform = `translateX(0px)`;
    }

    if (maxDragToChangePage < dragXCurrent) {
      handleLikeCard();
    }
    if (dragXCurrent < -maxDragToChangePage) {
      handleDislikeCard();
    }
  };

  useEffect(() => {
    const card = refCard.current;
    if (card) {
      card.addEventListener("dragstart", dragStart);
      card.addEventListener("drag", dragElement);
      card.addEventListener("dragend", resetPosition);
      card.addEventListener("touchstart", dragStart);
      card.addEventListener("touchmove", dragElement);
      card.addEventListener("touchend", resetPosition);
    }
    return () => {
      if (card) {
        card.removeEventListener("dragstart", dragStart);
        card.removeEventListener("drag", dragElement);
        card.removeEventListener("dragend", resetPosition);
        card.removeEventListener("touchstart", dragStart);
        card.removeEventListener("touchmove", dragElement);
        card.removeEventListener("touchend", resetPosition);
      }
    };
  }, [refCard, initialDragX, frontSide]);

  return {
    refCard,
  };
};
