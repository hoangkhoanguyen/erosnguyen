import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";
import { Card } from "@/components/ui";

type SAV = {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  title: string;
  description: string;
};

const SAVs: SAV[] = [
  {
    icon: "lightbulb",
    title: "User-First Craft",
    description:
      "I design experiences that feel obvious: clear flows, thoughtful micro-interactions, and accessibility built in from the start.",
  },
  {
    icon: "hand-coins",
    title: "Quality You Can Maintain",
    description:
      "I value clean, readable code and stable contracts. Less guesswork, fewer surprises, and smoother collaboration over time.",
  },
  {
    icon: "gauge",
    title: "Performance as a Feature",
    description:
      "Fast is a form of respect. I optimize critical paths with caching and smart delivery so users get responsive, reliable experiences.",
  },
];

export default function StoryAndValues() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 mb-16 items-end justify-between">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
              Story &amp; Values
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Journey &amp;{" "}
              <span className="relative inline-block">
                philosophy
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-sm" />
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              More than writing code — I craft digital products with a clear
              focus on the people who use them.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SAVs.map((SAV, i) => (
            <Card
              key={SAV.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              <div
                className={`w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 transition-all duration-300
                ${i % 2 === 0 ? "group-hover:rotate-3" : "group-hover:-rotate-3"}
              `}
              >
                <DynamicIcon name={SAV.icon} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {SAV.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {SAV.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
