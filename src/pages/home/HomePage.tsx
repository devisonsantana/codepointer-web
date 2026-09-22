import {
  HighlightSection,
  Footer,
  Header,
  LearningPath,
  NavBar,
  TrackingSection,
  ProjectSection,
} from "@/components/ui";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main className="space-y-24">
        <HighlightSection />
        <LearningPath />
        <TrackingSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
};
