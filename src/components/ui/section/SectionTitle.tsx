import type { SectionType } from "./SectionType";

export const SectionTitle = ({ children }: SectionType) => {
  return <h3 className="text-2xl font-semibold">{children}</h3>;
};
