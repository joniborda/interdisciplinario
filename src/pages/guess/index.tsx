import { GuessingCard } from "@/components/GuessingCard";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([
    {
      title: "Software Engineer",
    },
    {
      title: "Psychologist",
    },
  ]);

  const handleLikeCard = () => {
    removeCard();
  };

  const handleDislikeCard = () => {
    removeCard();
  };

  const removeCard = () => {
    data.pop();
    setData([...data]);
  };

  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-between p-24">
      <div className="relative z-10 h-full w-full max-w-5xl items-center justify-between text-sm lg:flex">
        {data.map((item) => (
          <GuessingCard
            key={item.title}
            data={item}
            handleLikeCard={handleLikeCard}
            handleDislikeCard={handleDislikeCard}
          />
        ))}
      </div>
    </main>
  );
}
