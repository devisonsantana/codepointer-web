import { FeatureHighlight } from "./FeatureHighlight";
import { featureHighlights } from "./data";

export const HighlightSection = () => {
  return (
    <section className="flex flex-col items-start justify-between gap-8 border-y border-y-[#1E293B] bg-[#0F152481] px-4 py-6 sm:flex-row sm:items-center md:px-20">
      {featureHighlights.map((feature, idx) => (
        <FeatureHighlight key={idx} {...feature} />
      ))}
    </section>
  );
};
