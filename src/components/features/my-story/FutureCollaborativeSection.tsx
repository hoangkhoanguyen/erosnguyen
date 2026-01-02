'use client';

export function FutureCollaborativeSection() {
  return (
    <section
      className="py-32 px-6 bg-cover bg-center relative bg-fixed"
      data-alt="Abstract digital blue mesh network background representing connectivity"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKnWnkmrKLkNb0rcrvi4gg2f_rYv0hnnIJG08KMFkr0x48pPc0WOcLVC1OcMOhbLF6NSB51bzFImSIKOBpuw1wRgRQVSyKWN89jzE_9bDcr1KlhJCeiNU9l713bs_VbaoI11tuzBaYZQCmWKZnbylMMBJPaENLhyf1CANQBQGk9RrbQzjB3eBz-l9mWEruAb3hzqy1m5N_cADjJjrQleR4A80LR8uR-NACU5et4bq6RAreyOoQcqyhcIP9mLgCdPyLx7Vg8muSavM')`,
      }}
    >
      <div className="absolute inset-0 bg-background-dark/90"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8">
        <div>
          <span
            className="material-symbols-outlined text-primary text-6xl mb-6 opacity-80"
          >
            auto_awesome
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            "The Future is Collaborative"
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I am currently exploring the intersection of
            <strong> AI and Web Development</strong>. My goal is to build
            tools that augment human creativity rather than replace it. I am
            always open to discussing new ideas, wild theories, and the next
            big thing.
          </p>
        </div>
      </div>
    </section>
  );
}
