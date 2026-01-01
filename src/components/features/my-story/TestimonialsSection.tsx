'use client';

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-gray-900 dark:text-white text-3xl font-bold text-center mb-12">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
            <div className="text-primary flex gap-1">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed">
              "Alex transformed our buggy MVP into a scalable product that
              handled our Series A launch without a hitch. A true
              professional."
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500">
                JD
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-sm">
                  John Doe
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  CTO @ TechStart
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
            <div className="text-primary flex gap-1">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed">
              "Rare to find a developer who cares as much about the design
              details as the backend logic. The result was Pixel Perfect."
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500">
                SM
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-sm">
                  Sarah Miller
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Product Manager
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
            <div className="text-primary flex gap-1">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed">
              "Communication was excellent throughout the project. Alex
              explained technical constraints clearly and offered smart
              alternatives."
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500">
                ML
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-sm">
                  Mike Lee
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Founder @ Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
