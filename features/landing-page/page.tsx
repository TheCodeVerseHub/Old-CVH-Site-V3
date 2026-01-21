import { LandingHeader } from "./components/header";
import { LandingHero } from "./components/hero";
import { LandingWhoWeAre } from "./components/who-we-are";
import { LandingFeaturedProjects } from "./components/featured-projects";
import { LandingRecentAnnouncements } from "./components/recent-announcements";
import { LandingContactUs } from "./components/contact-us";
import { LandingFooter } from "./components/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <LandingHero />
      <LandingWhoWeAre />
      <LandingFeaturedProjects />
      <LandingRecentAnnouncements />
      <LandingContactUs />
      <LandingFooter />
    </div>
  );
}
