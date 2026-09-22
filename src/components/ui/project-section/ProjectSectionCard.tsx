export const ProjectSectionCard = ({ ...props }: ProjectSectionCardType) => {
  const { level, title, description, icon, color, bgColor } = props;
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#1E293B] bg-[#0d1220] px-4 py-6 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
      <div className="flex items-center justify-between gap-2">
        <div style={{ background: bgColor, color }} className="rounded-xl p-2">
          {icon}
        </div>
        <div
          style={{ background: bgColor, color }}
          className="rounded-xl px-4 py-1"
        >
          <p className="text-xs font-semibold md:text-sm">{level}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-[#9CA3AF]">{description}</p>
      </div>
    </div>
  );
};

type ProjectSectionCardType = {
  level: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
};
