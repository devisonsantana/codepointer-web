export const FeatureHighlight = ({ ...props }: FeatureHighlight) => {
  const { title, description, icon, iconColor, bgColor } = props;
  return (
    <div className="flex w-full flex-row items-center gap-4 sm:w-auto">
      <div className={`rounded-lg bg-[${bgColor}] p-2 text-[${iconColor}]`}>
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-[#9CA3AF]">{description}</p>
      </div>
    </div>
  );
};

type FeatureHighlight = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  bgColor: string;
};
