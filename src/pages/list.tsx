import { Heading1 } from "@/components/Heading1";
import InputSearch from "@/components/InputSearch";
import { TopBar } from "@/components/TopBar";
import clsx from "clsx";

export default function List() {
  return (
    <main className="h-screen">
      <TopBar>
        <Heading1
          style={{ textShadow: "1px 4px 4px #000000" }}
          className="font-[fortnite] text-2xl sm:text-4xl p-4"
        >
          Glosario
        </Heading1>
      </TopBar>
      <div className="mt-2">
        <InputSearch />
      </div>
      <div
        className={clsx(
          "flex h-[calc(100vh-102px)] overflow-hidden flex-col",
          "items-center justify-between p-6 sm:p-20 pt-1 sm:pt-10"
        )}
      >
        <div className="relative z-10 h-full w-full max-w-5xl items-center justify-between text-sm lg:flex mt-4">
        </div>
      </div>
    </main>
  );
}
