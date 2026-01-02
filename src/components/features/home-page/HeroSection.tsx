import Image from "next/image";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-16 bg-background border-b border-stroke">
      <div className="flex flex-col container flex-1">
        <div className="relative overflow-hidden pt-20">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 order-2 md:order-1 z-10 justify-around">
              <div className="animate-fade-in-up">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                  Full-Stack Developer
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-4">
                  Biến ý tưởng thành{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-light">
                    hiện thực số.
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  Chào bạn, tôi là Anh Nguyễn. Tôi không chỉ viết code, tôi xây
                  dựng các giải pháp giúp doanh nghiệp và người dùng kết nối
                  hiệu quả hơn trong thế giới kỹ thuật số.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* Primary CTA */}
                  <Button
                    variant={"default"}
                    size={"lg"}
                    className="flex-1"
                    asChild
                  >
                    <Link href="#" className="inset-0 z-10">
                      <span>Xem hồ sơ năng lực</span>
                      <ArrowRight size={18} />
                    </Link>
                  </Button>

                  {/* Secondary CTA */}
                  <Button variant={"secondary"} size={"lg"} className="flex-1">
                    Về tôi
                  </Button>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up delay-200 relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary-light/20 rounded-full blur-2xl animate-pulse" />

                {/* Avatar */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-stroke shadow-2xl bg-surface">
                  <Image
                    src="/avatar.png"
                    alt="Avatar Anh Nguyen"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                {/* Experience badge */}
                <div
                  className="absolute -bottom-4 -left-4 bg-surface p-4 rounded-xl shadow-xl border border-stroke flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Code size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Kinh nghiệm
                    </p>
                    <p className="text-sm font-bold text-foreground">5+ Năm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
