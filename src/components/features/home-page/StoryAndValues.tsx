import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";
import SAVCard from "./SAVCard";

type SAV = {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  title: string;
  description: string;
};

const SAVs: SAV[] = [
  {
    icon:"lightbulb",
    title:"Sự tò mò dẫn lối",
    description:"Không chỉ là viết code, tôi kể chuyện qua các sản phẩm số với tư duy lấy người dùng làm trung tâm."
  },
  {
    icon:"sparkles",
    title:'Công nghệ "Vô hình"',
    description:"Bắt đầu từ sự hiếu kỳ về cách web vận hành. Những dòng HTML đầu tiên trên Notepad đã thắp lên đam mê kiến tạo những sản phẩm hữu hình từ code trừu tượng."
  },
  {
    icon:"gem",
    title:"Tinh tế trong đơn giản",
    description:'"Code không chỉ để máy chạy". Sự đơn giản là đỉnh cao của sự tinh tế. Tôi viết code sạch, dễ bảo trì để đảm bảo tính bền vững cho mọi dự án.'
  },
]

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
