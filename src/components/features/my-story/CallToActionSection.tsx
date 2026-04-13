import { Button } from "@/components/ui";
import { Mail, ArrowRight, Download } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="py-24 bg-background border-t border-stroke">
      <div className="container text-center flex flex-col gap-6 items-center w-full max-w-175">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
          <Mail className="w-8 h-8" />
        </div>
        <h2 className="text-foreground text-3xl md:text-5xl font-black">
          Let&apos;s work together.
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg">
          Open for remote and hybrid roles, freelance projects, and technical
          collaboration. Feel free to reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button size={"lg"}>
            <span>Get in touch</span>
            <ArrowRight />
          </Button>
          <Button size={"lg"} variant="outline">
            <span>Download resume</span>
            <Download />
          </Button>
        </div>
      </div>
    </section>
  );
}
