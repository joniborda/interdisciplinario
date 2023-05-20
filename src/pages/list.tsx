import { Heading1 } from "@/components/Heading1";
import InputSearch from "@/components/InputSearch";
import { TopBar } from "@/components/TopBar";
import clsx from "clsx";
import data from "@/data/guessing.json";
import { useState } from "react";

export default function List() {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState(data);
  const onChangeSearch = (e: any) => {
    const newSearch = e.target.value;
    const newData = data.filter((item) => {
      if (newSearch === "") return true;
      const newItemWithoutAccent = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (newItemWithoutAccent.toLowerCase().includes(newSearch.toLowerCase())) return true;
    });
    setSearch(newSearch);
    setFilteredData(newData);
  };
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
        <InputSearch onChange={onChangeSearch} />
      </div>
      <div
        className={clsx(
          "grid overflow-hidden grid-cols-3 gap-2",
          "items-center justify-between p-6 sm:p-20 pt-1 sm:pt-10"
        )}
      >
        {filteredData.map((item) => (
          <div className="shadow-2xl bg-slate-800 rounded-lg p-3 h-40" key={item.title}>
            <h2 className="text-center text-lg font-[fortnite] tracking-widest">{item.title}</h2>
            <p className="max-h-[50px] overflow-hidden text-ellipsis">{item.riddle}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
