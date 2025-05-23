import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t shadow py-6 md:py-0 bg-red-800 text-white">
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
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
} 