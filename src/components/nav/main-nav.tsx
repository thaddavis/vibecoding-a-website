import Link from "next/link";
import { cn } from "@/lib/utils";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        className="mr-6 flex items-center space-x-2"
      >
        <span className="hidden font-bold sm:inline-block">
          COMMAND LABS
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/about"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          About
        </Link>
        <Link
          href="/services"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Services
        </Link>
        <Link
          href="/case-studies"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Case Studies
        </Link>
        <Link
          href="/contact"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
} 