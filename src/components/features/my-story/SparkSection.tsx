import Image from "next/image";

const SparkSection = () => {
  return (
    <section className="py-20 border-b border-stroke bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative group w-full aspect-4/5 md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
          <div
            className="w-full h-full relative bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            data-alt="Portrait of a developer working in a modern office setup with warm lighting"
          >
            <Image
              src={
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAW__BnID-JtvZue1iglmK9CSbUL-MevXbusdcY1QY2z0-bkKV2RBKI4rP1-zNofi9M42sk16UvnwMznMW8vnxxezDlNWBIwLxA3pgrBuAbb5DPH5_XDDM0X5EePBCHAf2zQATmPVmxgWJ3sgq3CzH3E5Q5zZ1Yu41V5OPBJeiK2JvjKtYS_F6-T6ob-r_SrGWg1KsgoZBOUTPcT8gdV8N6RFb-ai9vy-KaZLbD_qwjXqe3_4OntDyDOF4ZLItOSsxDXcJloRAxHNM"
              }
              fill
              alt="Portrait of a developer working in a modern office setup with warm lighting"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg z-20">
            <p className="text-sm text-gray-300 italic">
              &quot;Good products aren&apos;t just built well—they&apos;re built
              for the people who use them.&quot;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-foreground leading-tight">
            The Spark
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              During university, I took courses in C programming and computer systems—subjects that built my foundation for algorithmic thinking. Then I got the opportunity to take on a frontend role, learning HTML, CSS, and JavaScript on the job. That hands-on start led me to expand into backend with React and Express.
            </p>
            <p>
              Before that, I worked in tutoring and sales. These taught me to <em>listen closely to what people need</em> and <em>explain complex ideas simply</em>—skills that carry directly into how I build products.
            </p>
            <p>
              So today, I don't just ship features.{" "}
              <strong className="text-primary font-bold">
                I build solutions that solve real problems for the people who use them.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;
