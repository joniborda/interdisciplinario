import { CardFlip } from "@/components/CardFlip";
import { Button } from "./Button";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-between p-24">
      <div className="z-10 h-full w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <CardFlip className="h-full w-full p-10">
          <div className="flex flex-col justify-center content-center h-full bg-slate-800 rounded-3xl p-10">
            <h1 className="text-4xl font-bold">
              Se quiere diseñar un edificio sustentable y amigable con el medio ambiente
            </h1>
            <div className="flex justify-center gap-10 mt-10 items-start">
              <Button title="Arquitectura" body="En el diseño y construcción del edificio" />

              <Button
                title="Ingeniería civil"
                body="En la construcción del edificio y en la instalación de los sistemas de energía renovable"
              />
            </div>
          </div>
        </CardFlip>
      </div>
    </main>
  );
}
