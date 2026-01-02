'use client';

export function TechToolkitSection() {
  const tools = [
    { icon: 'html', label: 'HTML5' },
    { icon: 'css', label: 'CSS3' },
    { icon: 'javascript', label: 'JavaScript' },
    { icon: 'code_blocks', label: 'React' },
    { icon: 'dns', label: 'Node.js' },
    { icon: 'database', label: 'SQL' },
    { icon: 'cloud', label: 'AWS' },
  ];

  return (
    <section className="px-4 py-16 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-[960px] mx-auto text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
          My Technical Toolkit
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {tools.map((tool) => (
            <div
              key={tool.icon}
              className="flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-4xl">
                {tool.icon}
              </span>
              <span className="text-xs font-bold">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
