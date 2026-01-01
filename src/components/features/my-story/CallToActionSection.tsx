'use client';

export function CallToActionSection() {
  return (
    <section className="px-4 py-24 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
      <div className="max-w-[700px] mx-auto text-center flex flex-col gap-6 items-center">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 animate-bounce">
          <span className="material-symbols-outlined text-3xl">mail</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black">
          Let's write the next chapter together.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Whether you have a project in mind or just want to chat about
          tech, I'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="flex items-center gap-2 rounded-lg h-14 px-8 bg-primary hover:bg-blue-600 text-white text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
            <span>Start a Conversation</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-lg h-14 px-8 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white text-lg font-bold transition-all">
            <span>View Resume</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </button>
        </div>
      </div>
    </section>
  );
}
