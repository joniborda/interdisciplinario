import { Heading1 } from "@/components/Heading1";
import { CareersInvolvedBody } from "@/components/CareersInvolvedBody";
import { TopBar } from "@/components/TopBar";

import clsx from "clsx";

export default function Home() {
  return (
    <main>
      <TopBar>
        <Heading1
          style={{ textShadow: "1px 4px 4px #000000" }}
          className="font-[fortnite] text-4xl"
        >
          ¿Qué disciplinas intervienen?
        </Heading1>
      </TopBar>
      <div
        className={clsx(
          "flex h-screen overflow-hidden flex-col items-center justify-between",
          "px-1 sm:px-2 md:px-1 pt-10 sm:pb-5"
        )}
      >
        <div className="z-10 h-full w-full max-w-5xl items-center flex-col justify-between text-sm lg:flex">
          <CareersInvolvedBody />
        </div>
      </div>
    </main>
  );
}
