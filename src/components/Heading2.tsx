export const Heading2 = ({ className, children }: { className: string; children: string }) => {
  return (
    <h1 className={"text-6xl font-light text-[#e9edef] text-center " + className}>{children}</h1>
  );
};
