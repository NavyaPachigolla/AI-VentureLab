import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PlanCard() {
  return (
    <Card className="border-border/70 bg-muted/20">
      <CardHeader>
        <CardTitle className="text-base">AI VentureLab Free</CardTitle>
        <CardDescription>
          Explore the core research workflow.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button type="button" variant="outline" className="w-full">
          View Plan
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Demo plan card — no billing or subscriptions implemented.
        </p>
      </CardContent>
    </Card>
  );
}
