"use client";
import { Button } from "@/app/Button";
import { CardFlip } from "@/components/CardFlip";
import { useCardFlip } from "@/components/CardFlipHook";

export const Body = () => {
  const { changing, handleClick, currentProblem } = useCardFlip();
  return (
    <CardFlip className="h-full w-full p-10" changing={changing}>
      <div className="flex flex-col h-full bg-[#222e35] rounded-3xl p-10">
        <div className="flex flex-col justify-center content-center h-full">
          <h1 className="text-4xl font-light text-[#e9edef]">{currentProblem.problem}</h1>
          <div className="mt-6 text-2xl font-light text-[#e9edef]">Disciplinas que intervienen:</div>
          <div className="flex justify-center gap-10 mt-4 items-start">
            {currentProblem.options.map((option, index) => (
              <Button title={option.title} body={option.body} />
            ))}
          </div>
        </div>
        <button className="self-end" onClick={handleClick}>
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </CardFlip>
  );
};
