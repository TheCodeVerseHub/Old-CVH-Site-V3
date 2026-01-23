import { getPageBySlug, getAllPages } from '@/lib/pages';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { LandingFooter } from "@/features/landing-page/components/footer";

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let page;
  try {
     page = getPageBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="container mx-auto py-12 px-4 md:px-6 flex-1 max-w-4xl">
         <h1 className="text-4xl font-bold mb-8 capitalize">{page.title}</h1>
         <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{page.content}</ReactMarkdown>
         </div>
      </main>
      <LandingFooter />
    </div>
  );
}
