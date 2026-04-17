import HeroSection from "@/components/features/my-story/HeroSection";
import StatsSection from "@/components/features/my-story/StatsSection";
import MilestoneAndGrowth from "@/components/features/my-story/MilestoneAndGrowth";
import { CorePhilosophySection } from "@/components/features/my-story/CorePhilosophySection";
import { HardEarnedLessonsSection } from "@/components/features/my-story/HardEarnedLessonsSection";
import { TechStackSection } from "@/components/features/home-page/TechStackSection";
// import { CallToActionSection } from "@/components/features/my-story/CallToActionSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <MilestoneAndGrowth />
      <CorePhilosophySection />
      <HardEarnedLessonsSection />
      <TechStackSection />
      {/* <CallToActionSection /> */}
    </main>
  );
};

export default page;
