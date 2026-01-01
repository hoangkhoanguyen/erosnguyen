import HeroSection from "@/components/features/my-story/HeroSection";
import SparkSection from "@/components/features/my-story/SparkSection";
import StatsSection from "@/components/features/my-story/StatsSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <SparkSection />
    </main>
  );
};

export default page;
