import { cn } from "@/lib/utils";

type StatusBarProps = {
  isOnline?: boolean;
  latencyMs?: number;
  className?: string;
};

export function StatusBar({
  isOnline = true,
  latencyMs = 12,
  className,
}: StatusBarProps) {
  return (
    <footer
      className={cn(
        "flex h-8 shrink-0 items-center justify-between border-t border-surface-variant bg-surface-container-lowest px-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "size-2 rounded-full",
            isOnline ? "bg-primary" : "bg-secondary",
          )}
          aria-hidden
        />
        <span
          className={cn(
            "font-mono text-[9px] font-semibold uppercase tracking-widest",
            isOnline ? "text-primary" : "text-secondary",
          )}
        >
          Status: {isOnline ? "Synced" : "Offline"}
        </span>
      </div>
      <span className="font-mono text-[9px] text-outline">
        LATENCY: {isOnline ? `${latencyMs}ms` : "—"}
      </span>
    </footer>
  );
}
