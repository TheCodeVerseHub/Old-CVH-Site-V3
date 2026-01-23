import { getAllPages } from '@/lib/pages';
import Link from 'next/link';
import { LandingFooter } from "@/features/landing-page/components/footer";

export default function PagesIndex() {
  const pages = getAllPages();

  return (
    <>
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the CodeVerse Hub documentation. Select a topic from the sidebar to get started.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/pages/${page.slug}`}
            className="group relative rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold leading-none tracking-tight group-hover:underline">
              {page.title || page.slug}
            </h3>
            {/* You could extract an excerpt here if you wanted */}
          </Link>
        ))}
      </div>
    </>
  );
}
