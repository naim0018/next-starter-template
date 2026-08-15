"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { NavGroup, NavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface SidebarProps {
  navGroups: NavGroup[];
}

const exactMatchPaths = ["/admin", "/user"];

// Clean, tech-styled logo that matches the site's dark slate & blue theme
const SeeSayDoLogo = ({ collapsed }: { collapsed: boolean }) => {
  if (collapsed) {
    return (
      <div className="flex flex-col items-center justify-center w-full py-1">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 py-1 select-none">
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col">
        <div className="text-lg tracking-tight leading-none text-white font-medium flex items-baseline">
          <span>See</span>
          <span className="font-semibold text-blue-500">Say</span>
          <span>Do</span>
          <span className="text-[7px] font-normal align-super ml-0.5 opacity-80">TM</span>
        </div>
        <span className="text-[7px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
          Player Development
        </span>
      </div>
    </div>
  );
};

const SidebarItem = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  const isActive = exactMatchPaths.includes(item.path)
    ? pathname === item.path
    : pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path + "/"));

  const Icon = item.icon;

  return (
    <div className="w-full">
      {hasChildren ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center justify-between w-full h-10 px-4 text-base font-semibold rounded-xl transition-all duration-200 group text-white/70 hover:bg-white/10 hover:text-white"
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
            "flex items-center gap-3 px-4 h-10 text-base font-semibold rounded-xl transition-all duration-200",
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

export default function Sidebar({ navGroups }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    }
  }, []);

  const toggleCollapse = () => {
    const nextState = !isCollapsed;
    setIsCollapsed(nextState);
    localStorage.setItem("sidebar-collapsed", String(nextState));
  };

  return (
    <aside
      className={cn(
        "bg-slate-900 text-white min-h-screen sticky top-0 flex flex-col transition-all duration-300 z-40 border-r border-slate-800 shrink-0 relative",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Floating Collapse/Expand Button aligned with Header Center */}
      {isMounted && (
        <button
          onClick={toggleCollapse}
          className="absolute right-[-12px] top-10 z-50 transform -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center cursor-pointer shadow-md hover:border-slate-500 transition-colors text-slate-400 hover:text-white focus:outline-none"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" />
          )}
        </button>
      )}

      {/* Sidebar Header with Site-styled SeeSayDo Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800 px-4">
        <SeeSayDoLogo collapsed={isCollapsed} />
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-7 scrollbar-thin scrollbar-thumb-slate-800">
        {navGroups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            {!isCollapsed && (
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 px-4 block">
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
                      "flex items-center justify-center h-10 rounded-xl transition-all duration-200 hover:bg-slate-800",
                      pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path + "/"))
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        className={cn(
                          "w-5 h-5 shrink-0",
                          pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path + "/"))
                            ? "text-slate-900"
                            : "text-white/70"
                        )}
                      />
                    )}
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
