export const ProgressCardItem = ({ ...props }: ProgressCardItem) => {
  const { icon, title, status, color, bgColor, bgIcon, borderColor } = props;
  return (
    <div
      className={`flex flex-row items-center justify-between rounded-2xl border border-[${borderColor}] bg-[${bgColor}] p-4`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center justify-center rounded-full bg-[${bgIcon}] p-2`}
        >
          {icon}
        </div>
        <div className="text-sm font-semibold">
          <p>{title}</p>
        </div>
      </div>
      <div className={`text-sm font-semibold text-[${color}]`}>
        <p>{status}</p>
      </div>
    </div>
  );
};

type ProgressCardItem = {
  icon: React.ReactNode;
  title: string;
  status: string;
  color: string;
  bgColor: string;
  bgIcon: string;
  borderColor: string;
};
