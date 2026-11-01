"use client";
import dynamic from "next/dynamic";
import { Spinner } from "@/infratrack/SiteExtras";

// The workspace uses browser-only APIs (window, localStorage, camera), so it is rendered on the client only.
const InfraTrack = dynamic(() => import("@/infratrack/InfraTrack"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "100vh", background: "#0A0F1A", display: "grid", placeItems: "center" }} aria-busy="true"><Spinner /></div>,
});

export default function WorkspaceClient({ user }: { user: { id: string; email: string; name: string } }) {
  return <InfraTrack user={user} />;
}
