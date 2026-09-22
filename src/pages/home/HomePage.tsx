import {
  FeatureHighlights,
  Footer,
  Header,
  LearningPath,
  NavBar,
  ProgressSection,
  ProjectSection,
} from "@/components/ui";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main className="space-y-24">
        <FeatureHighlights />
        <LearningPath />
        <ProgressSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
};
