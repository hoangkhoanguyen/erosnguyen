import Link from "next/link";
import {
  Facebook,
  Github,
  Heart,
  LinkedinIcon,
  Mail,
  MessageCircleMore,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/hoangkhoanguyen",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/hoangkhoanguyen",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "mailto:nguyenhoangkhoa2305@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://facebook.com/hoangkhoanguyen2305",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://zalo.me/0772028960",
    label: "Zalo",
    icon: MessageCircleMore,
  },
] as const;

const navColumns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "My Story", href: "/my-story" },
      { label: "Projects", href: "/projects" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/hoangkhoanguyen" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/hoangkhoanguyen",
      },
      {
        label: "Facebook",
        href: "https://facebook.com/hoangkhoanguyen2305",
      },
      { label: "Email", href: "mailto:nguyenhoangkhoa2305@gmail.com" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Gradient accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="bg-linear-to-b from-muted/30 to-background">
        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Got an idea?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let&apos;s build something{" "}
              <span className="bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
                great together.
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="mailto:nguyenhoangkhoa2305@gmail.com"
                className="inline-flex items-center gap-2 btn-beautiful-primary rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              >
                <Mail className="size-4" aria-hidden />
                Get in Touch
              </Link>
              <Link
                href="https://github.com/hoangkhoanguyen"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary hover:shadow-md"
              >
                <Github className="size-4" aria-hidden />
                View GitHub
              </Link>
            </div>
          </div>

          {/* Footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="size-8 rounded-lg bg-linear-to-br from-primary to-primary-light flex items-center justify-center shadow-md shadow-primary/25">
                  <span className="text-sm font-black text-white leading-none">
                    E
                  </span>
                </div>
                <span className="text-base font-bold tracking-tight text-foreground">
                  Eros Nguyen
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                Full-Stack Developer building products and systems that help
                teams ship faster and people get things done.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group flex items-center justify-center size-9 rounded-lg border border-border/60 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="size-4" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {navColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={
                          link.href.startsWith("http") ||
                          link.href.startsWith("mailto")
                            ? "_blank"
                            : undefined
                        }
                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Eros Nguyen. All rights
                reserved.
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                Built with
                <Heart
                  className="size-3 text-primary fill-primary inline-block"
                  aria-hidden
                />
                using Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
