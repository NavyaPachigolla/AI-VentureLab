"use client";

import { Bell, Menu, Search, User } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DashboardTopbarProps = {
  title: string;
  onMenuClick?: () => void;
  className?: string;
};

export function DashboardTopbar({
  title,
  onMenuClick,
  className,
}: DashboardTopbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl sm:gap-4 sm:px-6",
        className
      )}
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <Menu className="size-4" />
      </Button>

      <div className="min-w-0 flex-1">
        <h1 className="truncate text-lg font-semibold tracking-tight sm:text-xl">
          {title}
        </h1>
      </div>

      <div className="hidden max-w-sm flex-1 md:block">
        <label className="relative block">
          <span className="sr-only">Search projects and reports</span>
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search projects, reports..."
            disabled
            aria-disabled="true"
            className="h-9 w-full rounded-lg border border-border/70 bg-muted/30 pr-3 pl-9 text-sm text-muted-foreground"
          />
        </label>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
        </Button>
        <ThemeToggle />
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="User menu"
        >
          <User className="size-4" />
        </Button>
      </div>
    </header>
  );
}
