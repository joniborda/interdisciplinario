"use client";
import { Button } from "@/components/Button";
import { CardFlip } from "@/components/CardFlip";
import { useCardFlip } from "@/components/CardFlipHook";
import { Heading1 } from "@/components/Heading1";
import clsx from "clsx";

export const CareersInvolvedBody = () => {
  const { changing, handleClick, currentProblem } = useCardFlip();
  if (!currentProblem)
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl sm:text-4xl font-[fortnite] text-white">¡Felicidades!</h1>
        <h2 className="text-xl sm:text-2xl font-[fortnite] text-white">Has completado el juego</h2>
      </div>
    );
  return (
    <CardFlip className="h-full w-full p-1 sm:p-10" changing={changing}>
      <div className="flex flex-col h-full bg-[#222e35] rounded-3xl p-2 sm:p-10">
        <div className="flex flex-col justify-start content-center h-full">
          <div className="flex justify-between items-center h-full max-h-[50%]">
            <Heading1
              className={clsx(
                currentProblem.problem.length > 80
                  ? "md:text-2xl sm:text-xl text-lg "
                  : "md:text-3xl sm:text-2xl text-xl "
              )}
            >
              {currentProblem.problem}
            </Heading1>
          </div>
          {/* <div className="mt-10 text-2xl font-light text-[#e0e3e4]">
            Disciplinas que intervienen: 
          </div> */}
          <div
            className={clsx(
              "grid grid-flow-dense items-start justify-center mt-4",
              currentProblem.options.length > 6 ? "gap-y-2 gap-x-4" : "gap-y-4 gap-x-2 sm:gap-x-6",
              currentProblem.options.length === 1
                ? "grid-cols-1"
                : currentProblem.options.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3"
            )}
          >
            {currentProblem.options.map((option, index) => (
              <Button
                key={index}
                title={option.title}
                body={option.body}
                className="py-2 sm:px-2 px-0 text-base md:text-lg lg:text-xl xl:text-2xl"
              />
            ))}
          </div>
        </div>
        <button className="self-end" onClick={handleClick}>
          <svg
            className="w-14 h-14 text-slate-200 hover:text-white"
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496    C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="368.992,247.856 368.992,247.648 368.784,247.648 271.264,150.128 259.952,161.44 346.16,247.648 121.52,247.648     121.52,263.648 347.904,263.648 259.952,351.6 271.264,362.912 377.664,256.528   " />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </CardFlip>
  );
};
