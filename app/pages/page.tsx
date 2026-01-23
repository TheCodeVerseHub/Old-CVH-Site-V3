import { getAllPages } from '@/lib/pages';
import Link from 'next/link';
import { LandingFooter } from "@/features/landing-page/components/footer";

export default function PagesIndex() {
  const pages = getAllPages();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="container mx-auto py-12 px-4 md:px-6 flex-1 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Pages</h1>
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.slug}>
              <Link 
                href={`/pages/${page.slug}`}
                className="text-xl text-primary hover:underline"
              >
                {page.title || page.slug}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <LandingFooter />
    </div>
  );
}
