"use client";

import { useState } from "react";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { cn } from "@/lib/utils";

type DashboardShellProps = {
  title?: string;
  children: React.ReactNode;
};

export function DashboardShell({
  title = "Overview",
  children,
}: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:block">
        <DashboardSidebar className="fixed inset-y-0 left-0 z-40" />
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          />
          <DashboardSidebar
            className="absolute inset-y-0 left-0 z-50 shadow-2xl"
            onNavigate={() => setMobileOpen(false)}
          />
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <DashboardTopbar
          title={title}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className={cn("flex-1 px-4 py-6 sm:px-6 lg:px-8")}>
          {children}
        </main>
      </div>
    </div>
  );
}
