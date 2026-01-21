"use client";

import Link from "next/link";
import { ChevronDown, Menu, TerminalIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm border-dashed">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <TerminalIcon className="size-5 text-primary" />
            <SparklesText className="text-xs md:text-sm">
              The CodeVerse Hub
            </SparklesText>
          </Link>
          <nav className="hidden items-center gap-4 text-xs md:flex">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/timeline"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Timeline
            </Link>
            <Link
              href="/resources"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <button
              type="button"
              className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              More
              <ChevronDown className="size-3" />
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden md:flex">
            Join Discord
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden "
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/timeline"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Timeline
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>

              <Button size="sm" className="w-full">
                Join Discord
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
