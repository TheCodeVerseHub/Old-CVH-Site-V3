import Link from "next/link";
import { Mail, ArrowRight, GithubIcon } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";

export function LandingContactUs() {
  return (
    <section className="relative border-b border-border border-dashed py-16 overflow-hidden">
      {/* Removed DoodleArrowCurved */}

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold md:text-2xl">Contact Us</h2>
          {/* Replaced DoodleSquiggle with gradient line */}
          <div className="h-1 w-16 rounded-full bg-linear-to-r from-primary/50 to-transparent" />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-base font-medium">Get in Touch</h3>
            <p className="relative mt-2 text-2xl font-bold md:text-3xl">
              {"Let's Build Something"}
              <br />
              <span className="relative inline-block text-primary">
                Amazing Together
                {/* Replaced DoodleUnderline with gradient border */}
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-linear-to-r from-primary/0 via-primary to-primary/0 opacity-60" />
              </span>
            </p>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Whether you have a question about our projects, want to
              collaborate, or just want to say hi,{" "}
              <Highlighter color="#9E7AFF" action="underline">
                our inbox is always open
              </Highlighter>
              . Join our community on Discord for the fastest response!
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-primary/50">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email Us</p>
                  <p className="text-sm font-medium">
                    thecodeversedev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-primary/50">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="size-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Join Community
                  </p>
                  <p className="text-sm font-medium">
                    The CodeVerse Hub Discord
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-primary/50">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <GithubIcon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Follow Development
                  </p>
                  <p className="text-sm font-medium">@TheCodeVerseHub</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" placeholder="Your full name" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <Input id="subject" placeholder="What is this about?" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    0 / 1200 chars
                  </p>
                </Field>
                <Button type="submit" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
