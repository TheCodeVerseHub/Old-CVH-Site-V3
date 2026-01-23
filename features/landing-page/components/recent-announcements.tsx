import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { getAnnouncements } from "@/lib/announcements";

export async function LandingRecentAnnouncements() {
  const announcements = await getAnnouncements();

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

        <div className="grid gap-6 mt-8">
            {announcements.map((announcement) => (
                <Card key={announcement.id} className="group max-w-xl overflow-hidden transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader className="relative">
                    <div className="flex items-center gap-2">
                    <Heart className="size-5 text-primary fill-primary/20" />
                    <CardTitle>{announcement.title}</CardTitle>
                    </div>
                    <CardDescription>{announcement.date}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <p className="text-sm text-muted-foreground">
                    {announcement.content}
                    </p>
                </CardContent>
                </Card>
            ))}
             {announcements.length === 0 && (
                 <p className="text-muted-foreground">No announcements yet.</p>
             )}
        </div>
      </div>
    </section>
  );
}
