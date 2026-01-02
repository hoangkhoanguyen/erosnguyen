import { CorePhilosophySection } from "@/components/features/my-story/CorePhilosophySection";
import { HardEarnedLessonsSection } from "@/components/features/my-story/HardEarnedLessonsSection";
import HeroSection from "@/components/features/my-story/HeroSection";
import MilestoneAndGrowth from "@/components/features/my-story/MilestoneAndGrowth";
import SparkSection from "@/components/features/my-story/SparkSection";
import StatsSection from "@/components/features/my-story/StatsSection";
import { TechToolkitSection } from "@/components/features/my-story/TechToolkitSection";
import { FutureCollaborativeSection } from "@/components/features/my-story/FutureCollaborativeSection";
import { CallToActionSection } from "@/components/features/my-story/CallToActionSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <SparkSection />
      <MilestoneAndGrowth />
      <HardEarnedLessonsSection />
      <CorePhilosophySection />
      <FutureCollaborativeSection />
      <TechToolkitSection />
      <CallToActionSection />
    </main>
  );
};

export default page;
