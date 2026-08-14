import { cn } from "@/lib/utils";

type PageShellProps = React.ComponentProps<"main">;

export function PageShell({ className, ...props }: PageShellProps) {
  return (
    <main className={cn("flex flex-1 flex-col", className)} {...props} />
  );
}
