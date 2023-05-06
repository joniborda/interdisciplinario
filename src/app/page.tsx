import { CardFlip } from "@/components/CardFlip";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-between p-24">
      <div className="z-10 h-full w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <CardFlip className="h-full w-full p-10">
          <div className="flex flex-col justify-center content-center h-full">
            <h1 className="text-4xl font-bold">
              Se quiere diseñar un edificio sustentable y amigable con el medio ambiente
            </h1>
            <div className="flex">
              <div>

              <button className="rounded-xl bg-slate-950 !h-auto !w-auto">
                <div className="p-10">Arquitectura</div>
              </button>
              </div>
              <div>

              <button className="rounded-xl bg-slate-950 !h-auto !w-auto">
                <div className="p-10">Arquitectura</div>
              </button>
              </div>
            </div>
          </div>
        </CardFlip>
      </div>
    </main>
  );
}
