"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart2, Grid, Users, PieChart, FileText } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#2C3333] text-white">
      <div className="flex h-16 items-center px-6">
        <div className="h-8 w-8 rounded-full bg-[#5C5C5C]" />
        <span className="ml-3 text-sm font-semibold">Company Name</span>
      </div>
      <div className="mt-6 px-4">
        <nav className="mt-4 space-y-1">
          <Link
            href="/dashboard/users"
            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${["/dashboard/users", "/dashboard/team", "/dashboard/campaign", "/dashboard/client", "/dashboard/alerts"].includes(pathname)
                ? "bg-[#5C5C5C] text-white"
                : "text-[#E7E7E7] hover:bg-[#5C5C5C]"
              }`}
          >
            <Grid className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/campaigns"
            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard/campaigns"
              ? "bg-[#5C5C5C] text-white"
              : "text-[#E7E7E7] hover:bg-[#5C5C5C]"
              }`}
          >
            <Users className="mr-3 h-5 w-5" />
            Campaigns
          </Link>
          <Link
            href="/analytics"
            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard/analytics"
              ? "bg-[#5C5C5C] text-white"
              : "text-[#E7E7E7] hover:bg-[#5C5C5C]"
              }`}
          >
            <PieChart className="mr-3 h-5 w-5" />
            Analytics
          </Link>
          <Link
            href="/reports"
            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard/reports"
              ? "bg-[#5C5C5C] text-white"
              : "text-[#E7E7E7] hover:bg-[#5C5C5C]"
              }`}
          >
            <FileText className="mr-3 h-5 w-5" />
            Reports
          </Link>
        </nav>
      </div>
    </div>
  );
}

