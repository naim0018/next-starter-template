import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Compass } from "lucide-react";
import AnimatedContainer from "@/components/common/AnimatedContainer";
import PublicNavbar from "@/components/layout/PublicNavbar";
import PublicFooter from "@/components/layout/PublicFooter";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <main className="flex-1 flex flex-col min-h-screen justify-center items-center px-6 py-16 pb-24 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Badge */}
          <AnimatedContainer delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-wider">
              ⚡ NEXT.JS BASEKIT v1.0
            </span>
          </AnimatedContainer>

          {/* Title */}
          <AnimatedContainer delay={0.2} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
              Next-Generation <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                Dashboard Starter Kit
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium">
              A premium, highly-optimized boilerplate built with Next.js 15, App Router, Shadcn UI, Redux Toolkit, and custom data components.
            </p>
          </AnimatedContainer>

          {/* Action Buttons */}
          <AnimatedContainer delay={0.3} className="flex flex-wrap justify-center gap-4">
            {/* [ADMIN_LINK_START] */}
            <Link
              href="/admin"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Admin Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {/* [ADMIN_LINK_END] */}
            {/* [USER_LINK_START] */}
            <Link
              href="/user"
              className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>User Portal</span>
            </Link>
            {/* [USER_LINK_END] */}
          </AnimatedContainer>

          {/* Features list */}
          <AnimatedContainer delay={0.4} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-gray-100 dark:border-slate-900">
            {[
              {
                title: "Next.js App Router",
                desc: "Optimized React Server Components and nested layouts.",
              },
              {
                title: "Shadcn UI",
                desc: "Fully typed modular component system.",
              },
              {
                title: "RTK & Persistence",
                desc: "State management synchronized across client sessions.",
              },
            ].map((feat, idx) => (
              <div key={idx} className="space-y-1 text-left p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl">
                <h4 className="text-xs font-black uppercase text-slate-800 dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-[11px] text-gray-400 font-medium">
                  {feat.desc}
                </p>
              </div>
            ))}
          </AnimatedContainer>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
