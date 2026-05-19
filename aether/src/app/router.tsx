import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "@/components/shell/AppLayout";
import { PlaceholderPage } from "@/components/pages/PlaceholderPage";
import { DashboardPage } from "@/features/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: "geospatial",
        element: (
          <PlaceholderPage
            title="Geospatial"
            description="Map-centric views, ortho layers, and 3D viewers — loaded on demand from secure storage."
          />
        ),
      },
      {
        path: "analysis",
        element: (
          <PlaceholderPage
            title="Analysis"
            description="LiDAR segmentation, inference logs, and human-in-the-loop decision queue — Stitch reference screen."
          />
        ),
      },
      {
        path: "operations",
        element: (
          <PlaceholderPage
            title="Operations"
            description="Drone operations, mission control workflows, and agent orchestration."
          />
        ),
      },
      {
        path: "archive",
        element: (
          <PlaceholderPage
            title="Archive"
            description="Historical missions, audit trails, and securely stored media galleries."
          />
        ),
      },
      {
        path: "settings",
        element: (
          <PlaceholderPage
            title="Settings"
            description="Organizations, agents, preferences, cache policy, and pinned quick actions."
          />
        ),
      },
      {
        path: "mission-control",
        element: (
          <PlaceholderPage
            title="Mission Control"
            description="Top-level mission planning and live operational oversight."
          />
        ),
      },
      {
        path: "fleet",
        element: (
          <PlaceholderPage
            title="Fleet"
            description="Fleet status, asset health, and deployment readiness."
          />
        ),
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
