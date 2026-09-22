import type { BadgeType } from "./BadgeType";

export const BadgeText = ({ ...props }: BadgeType) => {
  const { style, children } = props;
  return (
    <div style={style} className="rounded-xl px-4 py-1">
      <p className="text-xs font-semibold md:text-sm">{children}</p>
    </div>
  );
};
