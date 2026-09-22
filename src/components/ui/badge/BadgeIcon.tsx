import type { BadgeType } from "./BadgeType";

export const BadgeIcon = ({ ...props }: BadgeType) => {
  const { style, children } = props;
  return (
    <div style={style} className="rounded-xl p-2 text-2xl">
      {children}
    </div>
  );
};
