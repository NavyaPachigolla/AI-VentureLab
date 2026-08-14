import { AgentsSection } from "@/components/landing/agents-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { ProblemSection } from "@/components/landing/problem-section";
import { ReportPreview } from "@/components/landing/report-preview";
import { SolutionSection } from "@/components/landing/solution-section";
import { TargetUsers } from "@/components/landing/target-users";
import { TrustSection } from "@/components/landing/trust-section";
import { PageShell } from "@/components/shared/page-shell";

export default function Home() {
  return (
    <PageShell>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <AgentsSection />
        <FeaturesSection />
        <ReportPreview />
        <BenefitsSection />
        <TargetUsers />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </PageShell>
  );
}
