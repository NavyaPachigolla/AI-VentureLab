import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { PageShell } from "@/components/shared/page-shell";

export default function Home() {
  return (
    <PageShell className="items-center justify-center py-16">
      <Container className="max-w-md">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>AI VentureLab</CardTitle>
              <Badge variant="secondary">Phase 1</Badge>
            </div>
            <CardDescription>Foundation setup complete.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Multi-Agent AI Startup Research, Validation &amp; Product
              Planning Platform
            </p>
          </CardContent>
        </Card>
      </Container>
    </PageShell>
  );
}
