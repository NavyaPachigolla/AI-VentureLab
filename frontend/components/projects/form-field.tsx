import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  charCount?: { current: number; max: number };
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  id,
  label,
  required = false,
  hint,
  error,
  charCount,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor={id}>
          {label}
          {required ? (
            <span className="text-destructive" aria-hidden="true">
              {" "}
              *
            </span>
          ) : null}
        </Label>
        {charCount ? (
          <span className="text-xs text-muted-foreground">
            {charCount.current} / {charCount.max}
          </span>
        ) : null}
      </div>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
