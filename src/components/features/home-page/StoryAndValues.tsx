import { Lightbulb, Sparkles, Gem } from "lucide-react";

export default function StoryAndValues() {
  return (
    <section className="container relative py-20">
      <div className="mx-auto">
        {/* Header */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />

            <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Lightbulb size={24} />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">
              Sự tò mò dẫn lối
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bắt đầu từ sự hiếu kỳ về cách web vận hành. Những dòng HTML đầu
              tiên trên Notepad đã thắp lên đam mê kiến tạo những sản phẩm hữu
              hình từ code trừu tượng.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />

            <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
              <Sparkles size={24} />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">
              Công nghệ &quot;Vô hình&quot;
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tôi tin rằng công nghệ xuất sắc nhất là khi nó hoạt động mượt mà
              đến mức người dùng quên mất sự hiện diện của nó, chỉ còn lại trải
              nghiệm thuần túy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />

            <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Gem size={24} />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">
              Tinh tế trong đơn giản
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              &quot;Code không chỉ để máy chạy&quot;. Sự đơn giản là đỉnh cao
              của sự tinh tế. Tôi viết code sạch, dễ bảo trì để đảm bảo tính bền
              vững cho mọi dự án.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
