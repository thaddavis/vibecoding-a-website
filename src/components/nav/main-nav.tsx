import Link from "next/link";
import { Youtube, Linkedin, Instagram } from "lucide-react";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex w-full justify-between items-center">
      <div className="flex items-center">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
        >
          <span className="hidden font-bold sm:inline-block text-white">
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
        </nav>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex gap-4 items-center">
        <a
          href="https://youtube.com/@cmd_labs"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-red-200 transition-colors duration-200"
          aria-label="YouTube"
        >
          <Youtube className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/company/commandlabs"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-red-200 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://instagram.com/cmdlabs"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-red-200 transition-colors duration-200"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
} 