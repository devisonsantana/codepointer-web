export const Button = ({ children, style = "primary" }: Button) => {
  if (style === "primary") {
    return (
      <button className="cursor-pointer rounded-lg bg-[#6366F1] px-4 py-2">
        {children}
      </button>
    );
  }
  return (
    <button className="cursor-pointer rounded-lg border border-[#1E293B] px-4 py-2">
      {children}
    </button>
  );
};

type Button = {
  children: React.ReactNode;
  style?: "primary" | "secondary";
};
