import { ProgressCard } from "../progress-card/ProgressCard";
import { ProgressInfo } from "../progress-info/ProgressInfo";

export const ProgressSection = () => {
  return (
    <section className="grid gap-12 bg-[#0F1524] px-4 py-20 sm:grid-cols-2 md:px-12">
      <ProgressInfo />
      <ProgressCard />
    </section>
  );
};
