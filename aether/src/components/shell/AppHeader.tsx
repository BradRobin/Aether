import { Bell, Search, UserCircle, Wifi, WifiOff } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { topNav } from "@/lib/navigation";

type AppHeaderProps = {
  isOnline?: boolean;
};

export function AppHeader({ isOnline = true }: AppHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b border-surface-variant bg-surface px-container-margin">
      <div className="flex items-center gap-4">
        <span className="text-headline-mobile font-bold uppercase tracking-tighter text-primary md:text-headline-lg">
          Aether Platform
        </span>
        <nav className="ml-8 hidden gap-6 md:flex">
          {topNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "px-3 py-1 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "border-b-2 border-primary font-bold text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high",
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-on-surface-variant" />
          <Input
            className="w-64 pl-9"
            placeholder="Search parameters..."
            type="search"
          />
        </div>
        <div className="flex items-center gap-3">
          {isOnline ? (
            <Wifi className="size-5 text-primary" aria-label="Online" />
          ) : (
            <WifiOff className="size-5 text-primary" aria-label="Offline" />
          )}
          <button
            type="button"
            className="text-on-surface-variant transition-colors hover:text-on-surface"
            aria-label="Notifications"
          >
            <Bell className="size-5" />
          </button>
          <button
            type="button"
            className="text-on-surface-variant transition-colors hover:text-on-surface"
            aria-label="Account"
          >
            <UserCircle className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
