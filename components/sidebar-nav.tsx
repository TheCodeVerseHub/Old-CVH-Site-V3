"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnet from "@/components/framer/magnet";
import { motion } from "motion/react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2 perspective-[800px]",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Magnet key={item.href} magnetStrength={3}>
            <Link
              href={item.href}
              className={cn(
                "relative group flex w-full items-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-purple-600 text-white shadow-none"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <span className="relative z-10 flex items-center gap-3">
                 {/* Active Dot Indicator */}
                 <motion.span 
                    initial={false}
                    animate={{ 
                        scale: isActive ? 1 : 0, 
                        opacity: isActive ? 1 : 0,
                        width: isActive ? 6 : 0,
                        marginRight: isActive ? 8 : 0
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-white/90" 
                />
                 
                 <span className={cn(
                     "transition-all duration-300", 
                     isActive ? "font-medium" : ""
                 )}>
                    {item.title}
                 </span>
              </span>
            </Link>
          </Magnet>
        );
      })}
    </nav>
  );
}

