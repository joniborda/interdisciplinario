import clsx from "clsx";
import { useWindowSize } from "@/components/useWindowSize";

type TopBarButton = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const TopBarButton = ({ isMenuOpen, setIsMenuOpen }: TopBarButton) => {
  const { width } = useWindowSize();
  return (
    <button
      className={clsx(
        "flex flex-col w-[2.8rem] h-12 border-0 bg-transparent gap-[0.75rem]",
        isMenuOpen && "group"
      )}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div
        className={clsx(
          "bg-white h-0.5 w-full rounded-[5px] transition-all ",
          (width || 0) < 640 && isMenuOpen ? "rotate-45" : "",
          "sm:group-hover:rotate-45"
        )}
        style={{ transformOrigin: "left" }}
      ></div>
      <div
        className={clsx(
          "bg-white h-0.5 w-full rounded-[5px] transition-all ",
          (width || 0) < 640 && isMenuOpen ? "opacity-0" : "",
          "sm:group-hover:opacity-0"
        )}
        style={{ transformOrigin: "left" }}
      ></div>
      <div
        className={clsx(
          "bg-white h-0.5 w-full rounded-[5px] transition-all ",
          (width || 0) < 640 && isMenuOpen ? "-rotate-45" : "",
          "sm:group-hover:-rotate-45"
        )}
        style={{ transformOrigin: "left" }}
      ></div>
    </button>
  );
};
