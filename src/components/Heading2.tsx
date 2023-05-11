export const Heading2 = ({ className, children }: { className: string; children: string }) => {
  return (
    <h1
      className={
        "font-light text-[#e0e3e4] text-center tracking-wider overflow-hidden " + className
      }
      // style={{ textShadow: "1px 4px 4px #000000" }}
    >
      {children}
    </h1>
  );
};
