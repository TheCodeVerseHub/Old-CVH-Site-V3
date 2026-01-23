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
    <>
      <div className="space-y-2 mb-8">
         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
          {page.title}
         </h1>
      </div>
       <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-m-20 prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm">
          <ReactMarkdown>{page.content}</ReactMarkdown>
       </div>
    </>
  );
}
