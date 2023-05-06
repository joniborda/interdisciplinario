"use client";
import React from "react";
import clsx from "clsx";

const CloseIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type ButtonProps = {
  children?: JSX.Element | JSX.Element[] | string | string[] | (string | JSX.Element)[];
  title?: string;
  body?: string;
  className?: string;
};
export const Button = ({ children, title, body, className }: ButtonProps) => {
  const [reveal, setReveal] = React.useState(false);
  const handleClick = () => {
    setReveal(!reveal);
  };

  return (
    <>
      <button
        className={clsx("rounded-xl bg-slate-950 px-8 py-6 ", className)}
        onClick={handleClick}
      >
        {children}
        <h2 className="text-xl">{title}</h2>
      </button>
      <div
        className={clsx(
          reveal ? "h-96 p-10" : "h-0 p-0 border-0",
          "overflow-hidden transition-all duration-100",
          "fixed top-1/4 left-0 right-0 z-10 border-[#333333] border bg-black",
          "rounded-2xl "
        )}
      >
        <button
          className="absolute top-0 right-0 p-4"
          onClick={() => {
            setReveal(false);
          }}
        >
          <CloseIcon />
        </button>

        <div
          className={clsx(
            "flex h-full items-center justify-center",
            reveal ? "w-full" : "w-0",
            "transition-all duration-100 font-semibold"
          )}
        >
          <p
            className={clsx(
              "text-2xl",
              reveal ? "opacity-100" : "opacity-0",
              "transition-all duration-200 font-semibold"
            )}
          >
            {body}
          </p>
        </div>
      </div>
    </>
  );
};
