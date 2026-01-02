import { CorePhilosophySection } from "@/components/features/my-story/CorePhilosophySection";
import { HardEarnedLessonsSection } from "@/components/features/my-story/HardEarnedLessonsSection";
import HeroSection from "@/components/features/my-story/HeroSection";
import MilestoneAndGrowth from "@/components/features/my-story/MilestoneAndGrowth";
import SparkSection from "@/components/features/my-story/SparkSection";
import StatsSection from "@/components/features/my-story/StatsSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <SparkSection />
      <MilestoneAndGrowth />
      <HardEarnedLessonsSection />
      <CorePhilosophySection />
    </main>
  );
};

export default page;
