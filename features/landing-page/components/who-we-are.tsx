import { Lightbulb } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export function LandingWhoWeAre() {
  return (
    <section className="relative border-b border-border border-dashed py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold md:text-2xl">
            <Highlighter color="#9E7AFF" action="underline">
              Who We Are
            </Highlighter>
          </h2>
        </div>

        <div className="mt-2 grid gap-8 md:grid-cols-2">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            CodeVerse Hub is more than just a Discord server. We are a
            collective of{" "}
            <Highlighter color="#9E7AFF" action="underline">
              passionate developers, designers, and creators
            </Highlighter>
            . Whether you are a seasoned pro or just starting your coding
            journey, you will find a place here to share knowledge, find
            mentorship, and work on open-source projects.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-border  p-4 transition-colors hover:border-primary/20">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">
                Active Members
              </div>
            </div>
            <div className="rounded-lg border border-border  p-4 transition-colors hover:border-primary/20">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-xs text-muted-foreground">
                Open Source Projects
              </div>
            </div>
            <div className="rounded-lg border border-border  p-4 transition-colors hover:border-primary/20">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-xs text-muted-foreground">
                Learning Resources
              </div>
            </div>
            <div className="rounded-lg border border-border  p-4 transition-colors hover:border-primary/20">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">
                Community Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
