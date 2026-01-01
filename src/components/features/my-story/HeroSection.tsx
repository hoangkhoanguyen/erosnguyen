const HeroSection = () => {
  return (
    <section className="py-16 bg-surface border-b border-stroke">
      <div className="flex flex-col container flex-1">
        <div className="@container">
          <div className="flex flex-col gap-8 items-center text-center py-10">
            <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-2">
              <span className="material-symbols-outlined text-sm">
                history_edu
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                My Personal Story
              </span>
            </div>
            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-7xl max-w-4xl">
              Behind the Code: <br className="hidden md:block" />A Journey of
              Curiosity.
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Im Alex, a developer who believes that every line of code tells a
              story. This is a deep dive into how I went from tinkering with
              HTML to architecting scalable systems, and the lessons learned
              along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
