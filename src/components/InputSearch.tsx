import clsx from "clsx";
import { useState } from "react";

export default function InputSearch({ onChange }: { onChange: (e: any) => void }) {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="relative flex text-gray-600 focus-within:text-gray-400">
          <input
            type="search"
            name="q"
            onChange={onChange}
            className={clsx(
              "py-2 text-white bg-gray-800 rounded-full pl-4 pr-10",
              "focus:outline-none focus:bg-white focus:text-gray-800",
              "min-w-[300px]"
            )}
            placeholder="Buscar..."
            autoComplete="off"
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
          <button
            type="submit"
            className={clsx(
              "absolute right-2 p-1 pt-1.5 block rounded-r-full ",
              onFocus ? "bg-white text-gray-800" : "text-white bg-gray-800"
            )}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current stroke-none">
              <g>
                <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
