import { TechStackSection } from "@/components/features/home-page/TechStackSection";
import HeroSection from "@/components/features/home-page/HeroSection";
// import StoryAndValues from "@/components/features/home-page/StoryAndValues";
import Projects from "@/components/features/home-page/Projects";
import Blogs from "@/components/features/home-page/Blogs";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      {/* <StoryAndValues /> */}

      <Projects />

      <TechStackSection />

      <Blogs />
    </main>
  );
}
