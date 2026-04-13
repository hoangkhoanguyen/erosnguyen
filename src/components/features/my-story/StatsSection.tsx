const mockStats = [
  { value: "4", label: "Years of experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "14K+", label: "Users onboarded" },
  { value: "EN + VI", label: "Languages" },
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
      <span className="text-sm text-muted-foreground font-medium">{label}</span>
    </div>
  );
}
