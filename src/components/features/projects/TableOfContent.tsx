import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TableOfContents } from "lucide-react";
import { TocItem } from "@/lib/utils";

interface ToCProps {
  ToCs: TocItem[];
}

export default function TableOfContent({ ToCs }: ToCProps) {
  const activeIndex = 0;

  return (
    <Card className="mt-5">
      <CardHeader className="pt-5">
        <CardTitle className="flex items-center text-xl gap-2">
          <TableOfContents size={20} />
          Mục lục
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {ToCs.map((ToC, index) => (
          <div
            key={index}
            className={`
              flex items-start gap-2 text-sm
              ${
                index === activeIndex
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }
            `}
          >
            {/* Thanh highlight */}
            <div
              className={`
                w-1 h-4 mt-1
                ${
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-transparent"
                }
              `}
            />

            {/* Text */}
            <p className={`pl-${(ToC.level - 2) * 2} text-lg`}>
              {ToC.text}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
