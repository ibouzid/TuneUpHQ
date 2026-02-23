import type { ReactNode } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { TopNav } from "../components/layout/TopNav";

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-background-primary">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 ">
        <TopNav />
        <main className="flex-1 min-w-0 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
