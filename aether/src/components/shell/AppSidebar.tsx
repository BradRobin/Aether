import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sidebarFooterNav, sidebarNav } from "@/lib/navigation";

export function AppSidebar() {
  return (
    <nav className="fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-surface-variant bg-surface-container-lowest pt-20">
      <div className="mb-8 px-6">
        <h1 className="text-headline-mobile font-black uppercase text-primary">
          Aether OS
        </h1>
        <p className="mt-1 font-mono text-label-sm uppercase tracking-widest text-on-surface-variant">
          High Integrity Platform
        </p>
      </div>

      <div className="flex grow flex-col gap-1 px-2">
        {sidebarNav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out",
                  isActive
                    ? "border-r-4 border-primary bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high",
                )
              }
            >
              <Icon className="size-5 shrink-0" />
              <span className="font-mono text-label-sm uppercase tracking-widest">
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-1 border-t border-surface-variant p-4">
        {sidebarFooterNav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-4 px-4 py-2 transition-colors",
                  isActive
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface",
                )
              }
            >
              <Icon className="size-4 shrink-0" />
              <span className="font-mono text-label-sm uppercase tracking-widest">
                {item.title}
              </span>
            </NavLink>
          );
        })}
        <Button className="mt-4 w-full" size="sm">
          Support
        </Button>
      </div>
    </nav>
  );
}
