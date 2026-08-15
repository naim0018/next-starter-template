"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import { NavGroup } from "@/lib/nav";

interface DashboardShellProps {
  children: React.ReactNode;
  navGroups: NavGroup[];
  logoText: string;
  title: string;
  description: string;
}

export default function DashboardShell({
  children,
  navGroups,
  logoText,
  title,
  description,
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Sidebar */}
      <Sidebar navGroups={navGroups} logoText={logoText} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header />

        {/* Content View */}
        <main className="p-6 flex-1 overflow-y-auto">
          {/* Breadcrumbs & Header Details */}
          <div className="mb-6 flex flex-col gap-2">
            <Breadcrumbs />
            <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Children views */}
          {children}
        </main>
      </div>
    </div>
  );
}
