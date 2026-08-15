"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
      <Link href="/" className="hover:text-gray-950 dark:hover:text-white transition-colors flex items-center gap-1.5">
        <Home className="w-3.5 h-3.5" />
      </Link>

      {segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const displayName = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        return (
          <div key={url} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-slate-700" />
            {isLast ? (
              <span className="text-gray-950 dark:text-white font-extrabold">{displayName}</span>
            ) : (
              <Link href={url} className="hover:text-gray-950 dark:hover:text-white transition-colors">
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
