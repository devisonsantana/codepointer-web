export const LearningLevelCard = ({ ...props }: LearningLevelCardType) => {
  const { level, icon, title, description, topics } = props;
  return (
    <div className="min-h-65 w-full max-w-lg space-y-1 rounded-2xl border border-[#6366F1] bg-[#0F152481] p-4 shadow-xl">
      <div className="flex flex-row items-center justify-between">
        {level}
        {icon}
      </div>

      <div className="space-y-1.5 py-4">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-sm text-[#9CA3AF]">{description}</p>
      </div>

      <div className="space-y-2 text-xs text-[#9CA3AF]">
        {topics.map((item, idx) => (
          <div key={idx} className="rounded-xl bg-[#172033] px-4 py-2">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

type LearningLevelCardType = {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: React.ReactNode;
  topics: string[];
};
