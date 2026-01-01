const mockStats = [
  { value: "5+", label: "Years of Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "12", label: "Open Source Contribs" },
  { value: "∞", label: "Curiosity" },
];

const StatsSection = () => {
  return (
    <section className="py-8 bg-background border-b border-stroke">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {mockStats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-3xl font-black text-primary">{value}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        {label}
      </span>
    </div>
  );
}
