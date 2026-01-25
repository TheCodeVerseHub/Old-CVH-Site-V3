import { getAllPages } from '@/lib/pages';
import Link from 'next/link';
import { TextReveal } from "@/components/framer/text-reveal";
import SpotlightCard from "@/components/framer/spotlight";

export default function PagesIndex() {
  const pages = getAllPages();

  return (
    <>
      <div className="space-y-4">
        <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
           <TextReveal text="Documentation" />
        </div>
        <p className="text-lg text-muted-foreground">
          Welcome to the CodeVerse Hub documentation. Select a topic from the sidebar to get started.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/pages/${page.slug}`}
            className="block h-full group"
          >
            <SpotlightCard className="h-full p-6 transition-colors hover:bg-muted/10 cursor-pointer bg-card/50 backdrop-blur-sm border-white/10 group-hover:border-purple-500/50" spotlightColor="rgba(139, 92, 246, 0.3)">
                <h3 className="font-semibold leading-none tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                {page.title || page.slug}
                </h3>
               <p className="text-sm text-muted-foreground">
                   Explore the {page.title || page.slug} section.
               </p>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </>
  );
}
