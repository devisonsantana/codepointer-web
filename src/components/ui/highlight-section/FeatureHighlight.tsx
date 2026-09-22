export const FeatureHighlight = ({ ...props }: FeatureHighlightType) => {
  const { title, description, icon, iconColor, bgColor } = props;
  return (
    <div className="flex w-full flex-row items-center gap-4 sm:w-auto">
      <div
        style={{ color: iconColor, background: bgColor }}
        className="rounded-lg p-2"
      >
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-[#9CA3AF]">{description}</p>
      </div>
    </div>
  );
};

type FeatureHighlightType = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  bgColor: string;
};
