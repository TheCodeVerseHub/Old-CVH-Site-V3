import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";

export function LandingRecentAnnouncements() {
  return (
    <section className="relative border-b border-border border-dashed py-16 overflow-hidden">
      {/* Replaced DoodleCircle with cleaner empty space or keep purely structural */}

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold md:text-2xl">
            <Highlighter color="#9E7AFF" action="underline">
              Recent Announcements
            </Highlighter>
          </h2>
          <div className="flex h-5 items-center rounded-full bg-primary/10 px-2 text-[10px] text-primary">
            New
          </div>
        </div>

        <Card className="group mt-8 max-w-xl overflow-hidden transition-all hover:border-primary/50">
          <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <CardHeader className="relative">
            <div className="flex items-center gap-2">
              <Heart className="size-5 text-primary fill-primary/20" />
              <CardTitle>Welcome to CodeVerse Hub!</CardTitle>
            </div>
            <CardDescription>2026-01-18</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm text-muted-foreground">
              We are excited to launch our new community website. Stay tuned for
              more updates.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
