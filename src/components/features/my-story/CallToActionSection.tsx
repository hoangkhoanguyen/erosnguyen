import { Button } from "@/components/ui";
import { Mail, ArrowRight, Download } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="py-24 bg-background border-t border-stroke">
      <div className="container text-center flex flex-col gap-6 items-center w-full max-w-175">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 animate-bounce">
          <Mail className="w-8 h-8" />
        </div>
        <h2 className="text-foreground text-3xl md:text-5xl font-black">
          Let&apos;s write the next chapter together.
        </h2>
        <p className="text-muted-foreground text-lg">
          Whether you have a project in mind or just want to chat about tech,
          I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button size={"lg"}>
            <span>Start a Conversation</span>
            <ArrowRight />
          </Button>
          <Button size={"lg"} variant="outline">
            <span>View Resume</span>
            <Download />
          </Button>
        </div>
      </div>
    </section>
  );
}
