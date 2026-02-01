// app/admin/layout.tsx
import type { ReactNode } from "react";
import AdminHeader from "@/src/components/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AdminHeader />
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}