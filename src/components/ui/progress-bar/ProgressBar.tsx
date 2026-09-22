export const ProgressBar = ({ progress }: ProgressBar) => {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#172033]">
      <div style={{ width: `${progress}%` }} className="h-full bg-[#50dbb6]" />
    </div>
  );
};

type ProgressBar = {
  progress: number;
};
