import { CareersInvolvedBody } from "../app/CareersInvolvedBody";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-between p-24">
      <div className="z-10 h-full w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <CareersInvolvedBody />
      </div>
    </main>
  );
}
