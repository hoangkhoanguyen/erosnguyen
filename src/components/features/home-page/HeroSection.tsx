import Image from "next/image";
import { ArrowRight, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="container relative py-16 overflow-hidden">
      <div className="max-w-250 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1 z-10 justify-around">
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Full-Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15] mb-4">
              Biến ý tưởng thành
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                hiện thực số.
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-lg">
              Chào bạn, tôi là Anh Nguyễn. Tôi không chỉ viết code, tôi xây dựng
              các giải pháp giúp doanh nghiệp và người dùng kết nối hiệu quả hơn
              trong thế giới kỹ thuật số.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 h-12 rounded-md bg-linear-to-r from-primary to-primary-dark text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <span>Xem hồ sơ năng lực</span>
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight size={18}/>
                </span>
              </button>
              <button className="px-6 h-12 rounded-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300">
                Về tôi
              </button>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up delay-200 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl">
              <div className="w-full h-full bg-center bg-cover">
                <Image
                  src="/avatar.png"
                  alt="Avatar Anh Nguyen"
                  fill
                  priority
                  className="object-cover object-center"
                ></Image>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-primary-light dark:bg-primary-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/5 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined"><Code size={18}/></span>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                  Kinh nghiệm
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  5+ Năm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
