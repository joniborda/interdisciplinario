import clsx from "clsx";

export const Heading2 = ({ className, children }: { className: string; children: string }) => {
  return (
    <h1
      className={clsx(
        "font-light text-[#e0e3e4] text-center tracking-wider overflow-hidden ",
        className,
      )}
    >
      {children}
    </h1>
  );
};
