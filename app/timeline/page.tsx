import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Calendar, Flag, Trophy, Users, Zap, Search, Rocket } from "lucide-react";
import { LandingFooter } from "@/features/landing-page/components/footer";

interface TimelineItem {
  date: string;
  title: string;
  category: "Milestone" | "Community" | "Recognition" | "Identity" | "Automation" | "Growth" | "Vision";
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "JAN 07, 2026",
    title: "900 Members Milestone",
    category: "Milestone",
    description: "Reached 900 members! The road to 1000 is almost complete.",
  },
  {
    date: "JAN 03, 2026",
    title: "Top.gg Award Results",
    category: "Community",
    description:
      'Unfortunately lost the award for "Most Welcoming Server 2025" but we are looking forward to a great year ahead.',
  },
  {
    date: "DEC 15, 2025",
    title: "800 Members Milestone",
    category: "Milestone",
    description: "The community grew to 800 members, ending the year on a high note.",
  },
  {
    date: "DEC 15, 2025",
    title: "Top.gg Nomination",
    category: "Recognition",
    description:
      'Got nominated for "Top 4 Most Welcoming Server 2025" by Top.gg! A huge honor for our community.',
  },
  {
    date: "NOV 21, 2025",
    title: "700 Members Milestone",
    category: "Milestone",
    description: "Hit 700 members milestone.",
  },
  {
    date: "OCT 13, 2025",
    title: "500 Members Milestone",
    category: "Milestone",
    description: "Halfway to a thousand! Reached 500 active members.",
  },
  {
    date: "SEP 15, 2025",
    title: "400 Members Milestone",
    category: "Milestone",
    description:
      "Celebrated reaching 400 members! The community continues to thrive and attract passionate programmers.",
  },
  {
    date: "AUG 25, 2025",
    title: "Official Server Logo Released",
    category: "Identity",
    description:
      "Unveiled the official CodeVerseHub server logo, giving the community a unique and recognizable identity.",
  },
  {
    date: "AUG 23, 2025",
    title: "300 Members Milestone",
    category: "Milestone",
    description:
      "Community reached 300 members, continuing the rapid growth and engagement.",
  },
  {
    date: "AUG 01, 2025",
    title: "Official Bot Launched",
    category: "Automation",
    description:
      'Launched our official server bot "Codeverse" to automate tasks, manage contests, and enhance the community experience.',
  },
  {
    date: "JUL 28, 2025",
    title: "200 Members Milestone",
    category: "Milestone",
    description:
      "Community doubled to 200 members, showing the growing interest in CodeVerseHub.",
  },
  {
    date: "JUL 06, 2025",
    title: "100 Members Milestone",
    category: "Milestone",
    description:
      "Our community reached its first 100 members, marking the beginning of a rapidly growing journey.",
  },
  {
    date: "JUN 01, 2025",
    title: "CodeVerseHub Activation",
    category: "Growth",
    description:
      "Decision made to actively develop and grow CodeVerseHub. The community started gaining new members daily and the vision became a reality.",
  },
  {
    date: "JUL 17, 2024",
    title: "CodeVerseHub Founded (Inactive)",
    category: "Vision",
    description:
      "Founded with the vision to build a vibrant programming community, remained inactive for several months as the idea matured.",
  },
];

const roadmapData = [
  {
    date: "Q1 2026",
    title: "1000 Members Milestone",
    description: "Scale community to 1000+ active members.",
  },
];

const getIcon = (category: string) => {
  switch (category) {
    case "Milestone":
      return <Flag className="size-4" />;
    case "Community":
      return <Users className="size-4" />;
    case "Recognition":
      return <Trophy className="size-4" />;
    case "Identity":
      return <Search className="size-4" />;
    case "Automation":
      return <Zap className="size-4" />;
    case "Growth":
      return <div className="size-4">📈</div>;
    case "Vision":
      return <div className="size-4">👁️</div>;
    default:
      return <Calendar className="size-4" />;
  }
};

const getColor = (category: string) => {
    switch (category) {
      case "Milestone":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Community":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Recognition":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Identity":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Automation":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      case "Growth":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Vision":
        return "bg-indigo-500/10 text-indigo-500 border-indigo-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

export default function TimelinePage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 bg-background relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    The Journey of <span className="text-primary">CodeVerseHub</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    From a simple idea in 2024 to a thriving community. Explore our milestones and see what's next on our roadmap.
                </p>
                <Separator className="my-8 w-24 mx-auto bg-primary/30" />
            </div>

            <div className="relative space-y-12 pb-12">
                 {/* Desktop Center Line - Inside container */}
                <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-primary/20 md:block" />

                 {/* Timeline Items */}
                {timelineData.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Mobile Line (Left) */}
                        <div className="absolute left-[11px] top-0 bottom-[-48px]  w-px bg-primary/20 md:hidden last:bottom-0" />

                        {/* Dot */}
                        <div className="absolute left-[3px] top-6 size-4 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] md:left-1/2 md:-translate-x-1/2 z-20" />
                        
                        {/* Content */}
                        <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group pl-8 md:pl-0`}>
                             {/* Date Side */}
                             <div className={`hidden md:flex w-full md:w-1/2 items-center ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                                <span className="text-sm font-bold text-muted-foreground tracking-wider uppercase font-mono">{item.date}</span>
                            </div>

                             {/* Card Side */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <Card className="w-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                                    <CardHeader className="pb-2">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                         <Badge variant="outline" className={`gap-1.5 ${getColor(item.category)}`}>
                                            {getIcon(item.category)}
                                            {item.category}
                                         </Badge>
                                         <span className="md:hidden text-xs font-bold text-muted-foreground tracking-wider uppercase font-mono">{item.date}</span>
                                    </div>
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

             {/* Roadmap Section */}
             <div className="mt-20">
                <SparklesText text="Our Roadmap" className="text-3xl text-center mb-2" />
                <p className="text-center text-muted-foreground mb-12">What we're building next to empower the community.</p>

                <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                    {roadmapData.map((item, index) => (
                        <Card key={index} className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Rocket className="size-5 text-primary" />
                                    <div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <span className="text-xs font-bold text-primary tracking-wider uppercase font-mono">{item.date}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
             </div>
        </div>
        <LandingFooter />
    </main>
  );
}
