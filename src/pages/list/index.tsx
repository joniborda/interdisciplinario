import { Heading1 } from "@/components/Heading1";
import InputSearch from "@/components/InputSearch";
import { TopBar } from "@/components/TopBar";
import clsx from "clsx";
import data from "@/data/guessing.json";
import { useState } from "react";
import Link from "next/link";

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
      <div className="mt-5">
        <InputSearch onChange={onChangeSearch} />
      </div>
      <div
        className={clsx(
          "grid overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-2",
          "items-center justify-between p-6 pt-5"
        )}
      >
        {filteredData.map((item) => (
          <Link href={`/list/${item.title}`} key={item.title}>
            <div className="shadow-2xl bg-slate-800 rounded-lg p-4 h-40" key={item.title}>
              <h2 className="text-center text-lg font-[fortnite] tracking-widest h-14">
                {item.title}
              </h2>
              <p className="max-h-[70px] overflow-hidden text-ellipsis text-center">
                {item.riddle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
