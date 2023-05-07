import { GuessBody } from "@/components/GuessBody";

export default function Guess() {

  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-between p-24">
      <div className="relative z-10 h-full w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <GuessBody />
      </div>
    </main>
  );
}
