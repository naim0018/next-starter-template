"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { NavGroup, NavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface SidebarProps {
  navGroups: NavGroup[];
  logoText?: string;
}

const SidebarItem = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path + "/"));

  const Icon = item.icon;

  return (
    <div className="w-full">
      {hasChildren ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center justify-between w-full px-4 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-200 group text-white/70 hover:bg-white/10 hover:text-white"
            )}
          >
            <div className="flex items-center gap-3">
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              <span>{item.name}</span>
            </div>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-transform duration-200 opacity-60 group-hover:opacity-100",
                isOpen && "rotate-180"
              )}
            />
          </button>
          {isOpen && (
            <div className="mt-1 pl-4 space-y-1 border-l border-white/10 ml-6 animate-in slide-in-from-top-1 duration-200">
              {item.children!.map((child) => (
                <SidebarItem key={child.path} item={child} pathname={pathname} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all duration-200",
            isActive
              ? "bg-white text-slate-900 shadow-sm"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          )}
        >
          {Icon && <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-slate-900" : "text-white/70")} />}
          <span>{item.name}</span>
        </Link>
      )}
    </div>
  );
};

export default function Sidebar({ navGroups, logoText = "BASEKIT" }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "bg-slate-900 text-white min-h-screen sticky top-0 flex flex-col transition-all duration-300 z-40 border-r border-slate-800 shrink-0",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
        {!isCollapsed && (
          <span className="text-lg font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {logoText}
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors text-white/70 hover:text-white"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-7 scrollbar-thin scrollbar-thumb-slate-800">
        {navGroups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            {!isCollapsed && (
              <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-4 block">
                {group.group}
              </span>
            )}
            <div className="space-y-1">
              {group.items.map((item) =>
                isCollapsed ? (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "flex items-center justify-center p-3 rounded-xl transition-all duration-200 hover:bg-slate-800 text-white/70 hover:text-white"
                    )}
                  >
                    {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
                  </Link>
                ) : (
                  <SidebarItem key={item.path} item={item} pathname={pathname} />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
