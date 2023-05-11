import { use, useEffect, useRef } from "react";

export const useGuessingCard = ({ handleLikeCard, handleDislikeCard, frontSide }: any) => {
  const refCard = useRef<HTMLDivElement>(null);
  const maxDragToChangePage = 150;
  let dragXCurrent = 0;
  let initialDragX = 0;

  const dragStart = (e: DragEvent) => {
    const card = refCard.current;
    if (card) {
      card.style.transform = `translateX(0px)`;
      initialDragX = e.clientX;

      const img = new Image();
      e?.dataTransfer?.setDragImage(img, 0, 0);
    }
  };

  const dragStartMobile = (e: TouchEvent) => {
    //TODO: refactor this
    const card = refCard.current;
    if (card) {
      card.style.transform = `translateX(0px)`;
      initialDragX = e.touches[0].clientX;

      const img = new Image();
    }
  };

  const dragElement = (e: DragEvent) => {
    if (frontSide) return;

    const card = refCard.current;
    // stay default cursor
    if (e.dataTransfer) e.dataTransfer.dropEffect = "none";

    const x = e.clientX;
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

  const dragElementMobile = (e: TouchEvent) => {
    //TODO: refactor this
    if (frontSide) return;

    const card = refCard.current;
    // stay default cursor

    const x = e.touches[0].clientX;
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
      card.addEventListener("touchstart", dragStartMobile);
      card.addEventListener("touchmove", dragElementMobile);
      card.addEventListener("touchend", resetPosition);
    }
    return () => {
      if (card) {
        card.removeEventListener("dragstart", dragStart);
        card.removeEventListener("drag", dragElement);
        card.removeEventListener("dragend", resetPosition);
        card.removeEventListener("touchstart", dragStartMobile);
        card.removeEventListener("touchmove", dragElementMobile);
        card.removeEventListener("touchend", resetPosition);
      }
    };
  }, [refCard, initialDragX, frontSide]);

  return {
    refCard,
  };
};
