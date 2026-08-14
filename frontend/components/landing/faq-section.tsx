import { faqItems } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions about AI VentureLab"
        description="Clear answers about how the platform is designed to work."
      />

      <Card className="mx-auto max-w-3xl border-border/70 bg-card/80">
        <CardContent className="p-2 sm:p-4">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="px-3 text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-3 text-muted-foreground">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </Section>
  );
}
