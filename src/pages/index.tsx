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
          className="font-[fortnite] text-2xl sm:text-4xl py-4 px-2 sm:p-4"
        >
          ¿Qué disciplinas intervienen?
        </Heading1>
      </TopBar>
      <div
        className={clsx(
          "flex h-[calc(100vh-102px)] overflow-hidden flex-col",
          "items-center justify-between p-6 sm:p-20 pt-1 sm:pt-10"
        )}
      >
        <div className="z-10 h-full w-full max-w-5xl items-center flex-col justify-between text-sm lg:flex">
          <CareersInvolvedBody />
        </div>
      </div>
    </main>
  );
}
