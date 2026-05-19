import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useConnectivity } from "@/hooks/use-connectivity";
import { Bot, Building2, GitBranch, ShieldCheck } from "lucide-react";

const summaryCards = [
  {
    title: "Agents in mesh",
    value: "—",
    description: "Live agent registry across your organizations",
    icon: Bot,
  },
  {
    title: "Organizations",
    value: "—",
    description: "Multi-org control — assign agents per org",
    icon: Building2,
  },
  {
    title: "Active collaborations",
    value: "—",
    description: "Real-time agent-to-agent workflows",
    icon: GitBranch,
  },
  {
    title: "Pending human gates",
    value: "—",
    description: "Decisions requiring your approval",
    icon: ShieldCheck,
  },
] as const;

export function DashboardPage() {
  const { isOnline } = useConnectivity();

  return (
    <div className="flex flex-1 flex-col gap-density-comfortable overflow-y-auto p-container-margin">
      <header>
        <Badge variant={isOnline ? "synced" : "offline"}>
          {isOnline ? "Mesh online" : "Mesh offline"}
        </Badge>
        <h1 className="mt-3 text-headline-lg font-semibold tracking-tight text-on-surface">
          Dashboard
        </h1>
        <p className="mt-2 max-w-3xl text-on-surface-variant">
          Sovereign agent mesh for land verification, drone operations, and
          public service delivery. Interactive collaboration views will render
          here with real-time updates.
        </p>
      </header>

      <section className="grid gap-gutter sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-on-surface-variant">
                    {card.title}
                  </CardTitle>
                  <p className="mt-2 font-mono text-2xl font-semibold text-primary">
                    {card.value}
                  </p>
                </div>
                <Icon className="size-5 text-primary" aria-hidden />
              </CardHeader>
              <CardContent>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Agent mesh canvas</CardTitle>
          <CardDescription>
            Interactive visualization of agents and cross-organization
            collaboration — next implementation step.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-48 items-center justify-center rounded border border-dashed border-outline-variant bg-surface-container-lowest font-mono text-data-mono text-on-surface-variant">
            Mesh graph placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
