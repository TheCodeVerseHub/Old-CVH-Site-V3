import { getAllPages } from '@/lib/pages';
import Link from 'next/link';
import { LandingFooter } from "@/features/landing-page/components/footer";
import { SidebarNav } from "@/components/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = getAllPages();

  const sortedPages = pages.sort((a, b) => {
      const titleA = (a.title as string) || a.slug;
      const titleB = (b.title as string) || b.slug;
      return titleA.localeCompare(titleB);
  });
  
  const navItems = sortedPages.map(page => ({
    title: (page.title as string) || page.slug,
    href: `/pages/${page.slug}`
  }));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <ScrollArea className="h-full pr-6 py-6 lg:py-8">
                <div className="flex flex-col space-y-1 pl-4">
                    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight text-foreground">
                        Documentation
                    </h2>
                    <SidebarNav items={navItems} />
                </div>
            </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 lg:pr-10">
            <div className="mx-auto w-full min-w-0 max-w-4xl px-4 lg:px-0">
                {children}
            </div>
        </main>
        
      </div>
      <LandingFooter />
    </div>
  );
}
