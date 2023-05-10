type Haeding1Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading1 = ({ children, className, ...props }: Haeding1Props) => {
  return (
    <h1
      className={"text-4xl font-light text-[#e0e3e4] text-center tracking-wider overflow-hidden  " + className}
      {...props}
    >
      {children}
    </h1>
  );
};
