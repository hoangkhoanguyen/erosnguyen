import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui";

type SAV = {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  title: string;
  description: string;
};

interface SAVCardProps {
  SAV: SAV;
}

export default function SAVCard({ SAV }: SAVCardProps) {
  return (
    <Card className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
      <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <DynamicIcon name={SAV.icon} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{SAV.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {SAV.description}
      </p>
    </Card>
  );
}
