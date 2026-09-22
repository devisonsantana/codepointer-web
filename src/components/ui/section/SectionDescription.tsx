import type { SectionType } from "./SectionType";

export const SectionDescription = ({ children }: SectionType) => {
  return <p className="text-sm text-[#9CA3AF]">{children}</p>;
};
