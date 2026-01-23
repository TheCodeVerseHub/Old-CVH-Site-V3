import Link from "next/link";
import { ArrowRight, Terminal, Users, Cpu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DoodleStars, DoodleSparkle } from "@/components/doodles";
import { Highlighter } from "@/components/ui/highlighter";

export function LandingHero() {
  return (
    <section className="relative border-b border-dashed border-border py-8 md:py-16 overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      {/* Radial Gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(var(--primary-rgb),0.05),transparent)] pointer-events-none" />

      {/* Doodle decorations - Kept subtle */}
      <DoodleStars className="absolute left-4 top-10 size-16 text-primary/20 md:left-12 opacity-40" />
      <DoodleSparkle className="absolute right-10 top-20 size-8 animate-pulse text-primary/30" />

      <div className="relative mx-auto max-w-4xl px-4 text-center z-10 flex flex-col items-center">
        {/* Top Icon & Label */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Terminal className="size-6" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
            The CodeVerse Hub
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          A community crafted for
          <br className="hidden md:block" />
          <span className="relative mx-2 inline-block text-primary">
            <Highlighter color="#9E7AFF" action="underline">
              developer success
            </Highlighter>
          </span>
          and growth
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Join the CodeVerse Hub to{" "}
          <Highlighter color="#9E7AFF" action="circle">
            collaborate, learn appropriate software practices
          </Highlighter>
          , and build the future together.
        </p>

        {/* Buttons */}
        <div className="mt-10 items-center justify-center flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:max-w-md">
          <Button size="lg" className="text-base group max-sm:w-full" asChild>
            <Link href="/pages/join">
              Get started
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base max-sm:w-full"
            asChild
          >
            <Link href="/pages/resources">
              Read the docs
              <ArrowRight className="ml-2 size-4 opacity-50 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid grid-cols-3 gap-8 sm:grid-cols-3 sm:gap-12 text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <Users className="size-5 text-primary" />
            <span className="text-sm font-medium">Community Driven</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Cpu className="size-5 text-primary" />
            <span className="text-sm font-medium">Open Source Focused</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            <span className="text-sm font-medium">Rich Resources</span>
          </div>
        </div>
      </div>
    </section>
  );
}
