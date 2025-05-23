import { Youtube, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t py-6 md:py-0 bg-red-800 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:h-20 px-6 md:px-12 min-h-[64px]">
        <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left w-full md:w-auto">
          <p className="text-sm leading-loose text-muted-foreground">
            Built by{' '}
            <a
              href="https://cmdlabs.io"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              COMMAND LABS
            </a>
            . All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 w-full md:w-auto justify-center md:justify-end">
          <a
            href="https://youtube.com/@cmd_labs"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-red-200 transition-colors duration-200"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/company/commandlabs"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-red-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/cmdlabs"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-red-200 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
} 