import { LearningLevelCard } from "./LearningLevelCard";
import { LearningPathInfo } from "./LearningPathInfo";
import { learningLevels } from "./data";

export const LearningPath = () => {
  return (
    <section className="space-y-12 px-4 py-8 md:px-12">
      <LearningPathInfo />

      <div className="grid place-content-center gap-6 sm:grid-cols-3">
        {learningLevels.map((learningLevel, idx) => (
          <LearningLevelCard key={idx} {...learningLevel} />
        ))}
      </div>
    </section>
  );
};
