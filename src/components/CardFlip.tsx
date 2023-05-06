"use client";
import React from "react";
import { useCardFlip } from "./CardFlipHook";
import clsx from "clsx";

type CardFlipProps = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};
export const CardFlip = ({ children, className }: CardFlipProps) => {
  const { changing, handleClick } = useCardFlip();

  return (
    <div className={clsx("flip-card w-full h-full", 
    // changing && "changing"
    )} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className={clsx("flip-card-front rounded-xl", className)}>{children}</div>
        <div className={clsx("flip-card-back rounded-xl", className)}>{children}</div>
      </div>
    </div>
  );
};
