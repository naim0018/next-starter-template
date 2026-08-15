"use client";

import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import UserProfile from "@/components/common/UserProfile";

export default function Header() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-30 flex items-center shrink-0">
      <div className="flex items-center justify-between w-full px-6">
        {/* Search Input */}
        <div className="relative w-72 md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-4 h-4 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search dashboard..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-800 dark:text-white placeholder:text-gray-400"
          />
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl relative transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          <div className="h-6 w-[1px] bg-gray-200 dark:bg-slate-800"></div>

          {/* User Profile */}
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
