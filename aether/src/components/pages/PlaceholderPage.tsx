import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-1 flex-col gap-density-comfortable overflow-y-auto p-container-margin">
      <div>
        <Badge variant="outline">Coming soon</Badge>
        <h1 className="mt-3 text-headline-lg font-semibold text-on-surface">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-on-surface-variant">{description}</p>
      </div>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Workspace shell ready</CardTitle>
          <CardDescription>
            Navigation, design tokens, and layout are wired. This view will be
            implemented in a follow-up pass.
          </CardDescription>
        </CardHeader>
        <CardContent className="font-mono text-data-mono text-on-surface-variant">
          Route: {title}
        </CardContent>
      </Card>
    </div>
  );
}
