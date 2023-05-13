"use client";
import React from "react";
import clsx from "clsx";

import { LikeIcon } from "./Icons/LikeIcon";
import { DislikeIcon } from "./Icons/DislikeIcon";
import { CloseIcon } from "./Icons/CloseIcon";

type ButtonProps = {
  title?: string;
  body?: string;
  className?: string;
};
export const Button = ({ title, body, className }: ButtonProps) => {
  const [reveal, setReveal] = React.useState(false);
  const handleClick = () => {
    setReveal(!reveal);
  };

  return (
    <>
      <button
        className={clsx("rounded-xl bg-[#42CBA5] text-2xl text-black", className)}
        onClick={handleClick}
      >
        {title}
      </button>
      <div
        className={clsx(
          reveal ? "h-96 p-10" : "h-0 p-0 border-0",
          "overflow-hidden transition-all duration-100",
          "fixed top-1/4 left-0 right-0 z-10 border-[#222e35] border bg-[#2a3942]",
          "rounded-2xl "
        )}
      >
        <button
          className="absolute top-5 right-4 p-4"
          onClick={() => {
            setReveal(false);
          }}
        >
          <CloseIcon />
        </button>

        <h2 className="text-xl text-[#d1d7db] font-light">{title}</h2>
        <div
          className={clsx(
            "flex flex-col h-full items-center justify-between",
            reveal ? "w-full" : "w-0",
            "transition-all duration-100"
          )}
        >
          <p
            className={clsx(
              "text-3xl text-[#d1d7db] mt-10",
              reveal ? "opacity-100" : "opacity-0",
              "transition-all duration-200 font-light"
            )}
          >
            {body}
          </p>
          <div className="flex justify-self-end rounded-3xl bg-slate-500 px-6 py-3 gap-6 mb-10">
            <LikeIcon width={"24px"} color="#ffffff" />
            <DislikeIcon width={"24px"} color="#ffffff" />
          </div>
        </div>
      </div>
    </>
  );
};
