"use client";

import Link from "next/link";
import { ChevronDown, Menu, TerminalIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Page {
  slug: string;
  title?: string;
  [key: string]: any;
}

interface LandingHeaderProps {
  pages: Page[];
}

export function LandingHeader({ pages }: LandingHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Sort pages
  const sortedPages = [...(pages || [])].sort((a, b) => {
    const titleA = (a.title as string) || a.slug;
    const titleB = (b.title as string) || b.slug;
    return titleA.localeCompare(titleB);
  });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm border-dashed transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                 <TerminalIcon className="size-6 text-primary" />
            </div>
            
            <SparklesText className="text-2xl font-bold hidden md:block" sparklesCount={5}>
              CodeVerse Hub
            </SparklesText>
          </Link>
          <nav className="hidden items-center gap-1 text-base font-medium md:flex">
             <Button variant="ghost" className="text-base" asChild>
                <Link href="/">Home</Link>
             </Button>

            <Button variant="ghost" className="text-base" asChild>
                <Link href="/timeline">Timeline</Link>
             </Button>
      
             <Button variant="ghost" className="text-base" asChild>
                <Link href="/pages/rules">Rules</Link>
             </Button>

             <Button variant="ghost" className="text-base" asChild>
                <Link href="/pages/faq">FAQ</Link>
             </Button>

            <Button variant="ghost" className="text-base" asChild>
                <Link href="/pages/resources">Resources</Link>
             </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-base">
                  More
                  <ChevronDown className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2">
                <ScrollArea className="h-[300px]">
                    <div className="flex flex-col gap-1 p-1">
                        <DropdownMenuItem asChild>
                             <Link href="/pages" className="font-semibold cursor-pointer w-full">
                                All Pages
                             </Link>
                        </DropdownMenuItem>
                        {sortedPages.map((page) => (
                        <DropdownMenuItem key={page.slug} asChild>
                            <Link href={`/pages/${page.slug}`} className="cursor-pointer w-full">
                            {page.title || page.slug}
                            </Link>
                        </DropdownMenuItem>
                        ))}
                    </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="lg" className="hidden md:flex font-semibold shadow-lg shadow-primary/20" asChild>
            <Link href="https://discord.gg/3xKFvKhuGR" target="_blank">
              Join Discord
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                 <Link
                    href="/"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                   <Link
                    href="/pages/resources"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </Link>
                  <div className="space-y-3 pt-2">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Documentation</p>
                    <div className="grid grid-cols-1 gap-3 pl-2 border-l-2 border-primary/20">
                         <Link
                            href="/pages"
                            className="text-base font-medium hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Overview
                        </Link>
                        {sortedPages.map((page) => (
                            <Link
                                key={page.slug}
                                href={`/pages/${page.slug}`}
                                className="text-sm text-foreground/80 hover:text-primary transition-colors block py-0.5"
                                onClick={() => setIsOpen(false)}
                            >
                                {page.title || page.slug}
                            </Link>
                        ))}
                    </div>
                  </div>
              </nav>
               <div className="pt-2">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="https://discord.gg/3xKFvKhuGR" target="_blank">
                      Join Discord
                    </Link>
                  </Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
