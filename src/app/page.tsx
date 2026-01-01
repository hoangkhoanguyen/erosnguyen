import { TechStackSection } from "@/components/features/home-page/TechStackSection";
import HeroSection from "@/components/features/home-page/HeroSection";
import StoryAndValues from "@/components/features/home-page/StoryAndValues";
import Projects from "@/components/features/home-page/Projects";
import Blogs from "@/components/features/home-page/Blogs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-240 px-4 pt-24">
        <div className="@container">
          <HeroSection />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-white/5" />
          <StoryAndValues />
        </div>

        <Projects />

        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white dark:bg-white/5" />
          <TechStackSection />
        </div>

        <Blogs />
      </main>
    </div>
  );
}
