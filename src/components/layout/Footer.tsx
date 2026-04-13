import Link from "next/link";
import {
  Facebook,
  Github,
  LinkedinIcon,
  Mail,
  MessageCircleMore,
} from "lucide-react";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="container mx-auto mt-20 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Eros Nguyen. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/hoangkhoanguyen"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="GitHub"
            target="_blank"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://linkedin.com/in/hoangkhoanguyen"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
          >
            <LinkedinIcon className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="mailto:nguyenhoangkhoa2305@gmail.com"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="Email"
            target="_blank"
          >
            <Mail className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://facebook.com/hoangkhoanguyen2305"
            target="_blank"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://zalo.me/0772028960"
            target="_blank"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="Instagram"
          >
            <MessageCircleMore className="w-6 h-6" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
