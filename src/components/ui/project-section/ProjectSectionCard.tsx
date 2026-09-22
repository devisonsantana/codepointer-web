export const ProjectSectionCard = ({ ...props }: ProjectSectionCardType) => {
  const { level, title, description, icon } = props;
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#1E293B] bg-[#0d1220] px-4 py-6 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2">
      <div className="flex items-center justify-between gap-2">
        {icon}
        {level}
      </div>
      <div className="space-y-2">
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-[#9CA3AF]">{description}</p>
      </div>
    </div>
  );
};

type ProjectSectionCardType = {
  title: string;
  description: string;
  level: React.ReactNode;
  icon: React.ReactNode;
};
