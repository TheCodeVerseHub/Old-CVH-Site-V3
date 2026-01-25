import { getAllPages } from '@/lib/pages';
import Link from 'next/link';
import { LandingFooter } from "@/features/landing-page/components/footer";
import { SidebarNav } from "@/components/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import RetroGrid from "@/components/framer/retro-grid";
import DecryptedText from '@/components/framer/decrypted-text';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Menu } from "lucide-react";

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
    <div className="relative flex min-h-screen flex-col bg-background/50 selection:bg-purple-500/30 overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
            <RetroGrid />
        </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center p-4 border-b border-white/10 relative z-20 bg-background/40 backdrop-blur-md">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] max-w-[300px] border-r-white/10 bg-background/95 backdrop-blur-xl pt-10">
             <div className="h-full flex flex-col">
                <h2 className="mb-6 px-4 text-lg font-bold tracking-tight text-foreground/80 uppercase">
                    <DecryptedText text="Documentation" />
                </h2>
                <ScrollArea className="flex-1 pr-6 -mr-6">
                    <div className="px-4 pb-10">
                        <SidebarNav items={navItems} />
                    </div>
                </ScrollArea>
             </div>
          </SheetContent>
        </Sheet>
        <div className="font-bold text-lg tracking-tight">Docs</div>
      </div>

      {/* Desktop Resizable Layout */}
      <div className="hidden md:flex flex-1 h-[calc(100vh)] z-10 relative">
         <ResizablePanelGroup direction="horizontal" className="h-full w-full rounded-lg">
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30} className="border-r border-white/10 bg-background/30 backdrop-blur-xl">
                <ScrollArea className="h-full py-6">
                    <div className="flex flex-col space-y-1 pl-6 pr-4">
                        <h2 className="mb-6 px-2 text-lg font-bold tracking-tight text-foreground/80 uppercase">
                            <DecryptedText text="Documentation" />
                        </h2>
                        <SidebarNav items={navItems} />
                    </div>
                </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80}>
                <ScrollArea className="h-full">
                    <div className="flex flex-col min-h-full">
                         <main className="relative flex-1 py-8 px-10">
                            <div className="mx-auto w-full min-w-0 max-w-4xl">
                                {children}
                            </div>
                        </main>
                        <LandingFooter />
                    </div>
                </ScrollArea>
            </ResizablePanel>
         </ResizablePanelGroup>
      </div>

      {/* Mobile Content Fallback */}
       <div className="md:hidden flex-1 overflow-auto z-10 relative">
            <main className="relative py-6 px-4">
                {children}
            </main>
            <LandingFooter />
       </div>
    </div>
  );
}

