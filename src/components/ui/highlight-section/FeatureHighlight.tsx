export const FeatureHighlight = ({ ...props }: FeatureHighlightType) => {
  const { title, description, icon } = props;
  return (
    <div className="flex w-full flex-row items-center gap-4 sm:w-auto">
      {icon}
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
};
