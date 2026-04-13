import { BookOpenText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-surface border-b border-stroke">
      <div className="flex flex-col container flex-1">
        <div className="@container">
          <div className="flex flex-col gap-6 items-center text-center py-10">
            <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              <BookOpenText size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">
                About Me
              </span>
            </div>
            <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-7xl max-w-4xl">
              Eros Khoa Nguyen
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Full-stack developer with 4 years of experience building web and
              mobile products. I focus on user experience, developer experience,
              and clear communication—bridging technical and non-technical teams
              to deliver products that work for real people.
            </p>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Background in Electrical Engineering (HCMC University of
              Technology), with prior experience in tutoring and sales that
              shaped how I communicate and understand user needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
