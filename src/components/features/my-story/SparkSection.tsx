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
            <p className="text-sm text-gray-600 dark:text-gray-300 italic">
              &quot;The only way to do great work is to love what you do.&quot;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            The Spark
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              It all started in 2015. I wasn&apos;t studying Computer Science; I
              was actually a graphic design major. I felt limited by static
              images. I wanted my designs to <em>move</em>, to react, to live.
            </p>
            <p>
              I stumbled upon a &quot;View Source&quot; button on a browser.
              That chaotic mess of HTML tags felt like a secret language. I
              spent the next three months obsessed, breaking websites just to
              see if I could fix them.
            </p>
            <p>
              By the time I graduated, I knew my path wasn&apos;t just in making
              things look good, but in building the engines that power them. The
              transition from designer to developer gave me a unique superpower:
              <strong className="text-primary font-bold">
                I speak both languages.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;
