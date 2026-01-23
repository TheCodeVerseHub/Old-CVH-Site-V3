import Link from "next/link";
import { Github, Mail, Heart, TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DoodleStars, DoodleSparkle } from "@/components/doodles";

export function LandingFooter() {
  return (
    <footer className="relative py-8 overflow-hidden">
      <DoodleStars className="absolute left-1/4 top-8 size-12 text-muted-foreground/10" />
      <DoodleSparkle className="absolute right-1/3 bottom-12 size-6 text-primary/20" />

      <div className="mx-auto max-w-6xl px-2">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-medium"
            >
              <TerminalIcon className="size-5 text-primary" />
              <span>CodeVerse Hub</span>
            </Link>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-muted-foreground">
              A community for developers to learn, share, and grow together.
              Join us to build the future.
            </p>
            <div className="mt-4 flex items-center gap-1">
              <Heart className="size-4 text-primary fill-primary/20" />
              <span className="text-sm text-muted-foreground">
                Made with love by the community
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-medium">Community</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/pages/rules"
                  className="transition-colors hover:text-foreground"
                >
                  Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/code-of-conduct"
                  className="transition-colors hover:text-foreground"
                >
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/server-info"
                  className="transition-colors hover:text-foreground"
                >
                  Server Info
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/moderation-guide"
                  className="transition-colors hover:text-foreground"
                >
                  Moderation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/pages/how-to-ask"
                  className="transition-colors hover:text-foreground"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/tags"
                  className="transition-colors hover:text-foreground"
                >
                  Tags
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/resources"
                  className="transition-colors hover:text-foreground"
                >
                  Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/faq"
                  className="transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/pages/privacy-policy"
                  className="transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/security-notice"
                  className="transition-colors hover:text-foreground"
                >
                  Security Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/acknowledgements"
                  className="transition-colors hover:text-foreground"
                >
                  Acknowledgements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 CodeVerse Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm" asChild>
              <Link
                href="https://github.com/TheCodeVerseHub/"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <Link
                href="https://discord.gg/3xKFvKhuGR"
                target="_blank"
                aria-label="Discord"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <Link
                href="https://instagram.com/thecodeversehub"
                target="_blank"
                aria-label="Instagram"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <Link
                href="mailto:thecodeversedev@gmail.com"
                aria-label="Email Us"
              >
                <Mail className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
