import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/shell/AppHeader";
import { AppSidebar } from "@/components/shell/AppSidebar";
import { StatusBar } from "@/components/shell/StatusBar";
import { useConnectivity } from "@/hooks/use-connectivity";

export function AppLayout() {
  const { isOnline, latencyMs } = useConnectivity();

  return (
    <div className="min-h-screen bg-background">
      <AppHeader isOnline={isOnline} />
      <AppSidebar />
      <div className="ml-64 flex min-h-screen flex-col pt-16">
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
        <StatusBar isOnline={isOnline} latencyMs={latencyMs} />
      </div>
    </div>
  );
}
