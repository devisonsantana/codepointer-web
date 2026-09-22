import { TrackingPanel } from "./TrackingPanel";
import { TrackingInfo } from "./TrackingInfo";

export const TrackingSection = () => {
  return (
    <section className="grid gap-12 bg-[#0F1524] px-4 py-20 sm:grid-cols-2 md:px-12">
      <TrackingInfo />
      <TrackingPanel />
    </section>
  );
};
