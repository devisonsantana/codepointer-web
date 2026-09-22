import type { SectionType } from "./SectionType";

export const SectionText = ({ children }: SectionType) => {
  return <p className="text-lg font-medium">{children}</p>;
};
