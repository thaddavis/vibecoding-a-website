"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Drawer */}
          <aside className="fixed top-0 right-0 z-50 h-screen w-4/5 max-w-xs bg-red-800 shadow-2xl flex flex-col animate-in slide-in-from-right-40">
            <div className="flex items-center justify-between px-6 py-5 border-b border-red-700">
              <span className="text-xl font-bold tracking-tight text-white">
                COMMAND LABS
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 hover:bg-red-700 text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-2 px-6 bg-red-800">
              <Link
                href="/"
                className="py-3 text-lg font-semibold text-white hover:text-red-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-3 text-lg font-semibold text-white hover:text-red-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="py-3 text-lg font-semibold text-white hover:text-red-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
} 