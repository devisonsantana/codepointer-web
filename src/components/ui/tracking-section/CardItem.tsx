export const CardItem = ({ ...props }: CardItemType) => {
  const { icon, title, status, color, bgColor, bgIcon, borderColor } = props;
  return (
    <div
      style={{ borderColor, background: bgColor }}
      className="flex flex-row items-center justify-between rounded-2xl border p-4"
    >
      <div className="flex items-center gap-4">
        <div
          style={{ background: bgIcon }}
          className="flex items-center justify-center rounded-full p-2"
        >
          {icon}
        </div>
        <div className="text-sm font-semibold">
          <p>{title}</p>
        </div>
      </div>
      <div style={{ color }} className="text-sm font-semibold">
        <p>{status}</p>
      </div>
    </div>
  );
};

type CardItemType = {
  icon: React.ReactNode;
  title: string;
  status: string;
  color: string;
  bgColor: string;
  bgIcon: string;
  borderColor: string;
};
