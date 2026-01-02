import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";
import { Card } from "@/components/ui";

type SAV = {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  title: string;
  description: string;
  rotate: boolean;
};

interface SAVCardProps {
  SAV: SAV;
}

const SAVs: SAV[] = [
  {
    icon: "lightbulb",
    title: "Sự tò mò dẫn lối",
    description:
      "Không chỉ là viết code, tôi kể chuyện qua các sản phẩm số với tư duy lấy người dùng làm trung tâm.",
    rotate: true,
  },
  {
    icon: "sparkles",
    title: 'Công nghệ "Vô hình"',
    description:
      "Bắt đầu từ sự hiếu kỳ về cách web vận hành. Những dòng HTML đầu tiên trên Notepad đã thắp lên đam mê kiến tạo những sản phẩm hữu hình từ code trừu tượng.",
    rotate: false,
  },
  {
    icon: "gem",
    title: "Tinh tế trong đơn giản",
    description:
      '"Code không chỉ để máy chạy". Sự đơn giản là đỉnh cao của sự tinh tế. Tôi viết code sạch, dễ bảo trì để đảm bảo tính bền vững cho mọi dự án.',
    rotate: true,
  },
];

export default function StoryAndValues() {
  return (
    <section className="py-20 bg-surface border-b border-stroke">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 mb-16 items-end justify-between">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
              Story &amp; Values
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Hành trình &amp;{" "}
              <span className="relative inline-block">
                Triết lý
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-sm" />
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              Không chỉ là viết code, tôi kể chuyện qua các sản phẩm số với tư
              duy lấy người dùng làm trung tâm.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SAVs.map((SAV) => (
            <SAVCard key={SAV.title} SAV={SAV} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SAVCard({ SAV }: SAVCardProps) {
  return (
    <Card className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
      <div
        className={`w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 transition-all duration-300
      ${SAV.rotate ? "group-hover:rotate-3" : "group-hover:-rotate-3"}
      `}
      >
        <DynamicIcon name={SAV.icon} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{SAV.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {SAV.description}
      </p>
    </Card>
  );
}
