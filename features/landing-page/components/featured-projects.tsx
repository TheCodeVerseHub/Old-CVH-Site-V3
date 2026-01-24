import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DoodleStars, DoodleSparkle } from "@/components/doodles";
const projects = [
  {
    title: "CodeVerse-Bot",
    description:
      "Our main customized Discord bot managing economy, moderation, and events.",
    color: "from-primary/10 to-transparent",
    repoUrl: "https://github.com/TheCodeVerseHub/CodeVerse-Bot",
  },
  {
    title: "Eigen-Bot",
    description:
      "The heart of our community fun! Games, utilities, and engaging features.",
    color: "from-chart-2/10 to-transparent",
    repoUrl: "https://github.com/TheCodeVerseHub/Eigen-Bot",
  },
  {
    title: "ModMail-Bot",
    description: "Ensuring smooth communication between members and staff.",
    color: "from-chart-3/10 to-transparent",
    repoUrl: "https://github.com/TheCodeVerseHub/ModMail-Bot",
  },
  {
    title: "CodeBuddy",
    description: "Our legacy coding quiz bot, now integrated into Eigen.",
    color: "from-chart-4/10 to-transparent",
    repoUrl: "https://github.com/TheCodeVerseHub/CodeBuddy",
  },
  {
    title: "CodeVerse Linux Distro",
    description:
      "A community-driven, Arch-based Linux distribution focused on Wayland and developer tools.",
    color: "from-chart-5/10 to-transparent",
    repoUrl: "https://github.com/TheCodeVerseHub/CodeVerseLinuxDistro",
  },
];

export function LandingFeaturedProjects() {
  return (
    <section className="relative border-b border-border border-dashed py-16">
      <DoodleStars className="absolute bottom-8 right-12 size-16 text-muted-foreground/15" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold md:text-2xl">
            Featured Projects
          </h2>
          <DoodleSparkle className="size-6 text-primary" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden transition-all hover:border-primary/50"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  {i === 0 && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                      Featured
                    </span>
                  )}
                </div>
                <CardDescription className="text-xs">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repoUrl} target="_blank">
                    <Github className="size-3.5" />
                    View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
