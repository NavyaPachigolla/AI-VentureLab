import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  containerClassName?: string;
};

export function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)} {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
