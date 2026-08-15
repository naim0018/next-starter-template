import React from "react";
import { Users, DollarSign, ShoppingBag, ArrowUpRight, TrendingUp } from "lucide-react";
import AnimatedContainer from "@/components/common/AnimatedContainer";

export default function AdminPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$48,259.00",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Active Users",
      value: "10,249",
      change: "+8.2%",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Sales Orders",
      value: "1,402",
      change: "+18.3%",
      icon: ShoppingBag,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Conversion Rate",
      value: "3.42%",
      change: "+4.1%",
      icon: TrendingUp,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedContainer key={index} delay={index * 0.1}>
              <div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white">
                      {stat.value}
                    </h3>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-4 text-xs font-bold text-emerald-500">
                  <span>{stat.change}</span>
                  <span className="text-gray-400 dark:text-gray-500">vs last month</span>
                </div>
              </div>
            </AnimatedContainer>
          );
        })}
      </div>

      {/* Main Dashboard Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Analytics Chart Dummy */}
        <AnimatedContainer delay={0.4} className="lg:col-span-2">
          <div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm h-96 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">
                Revenue Growth
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Monthly performance overview
              </p>
            </div>
            
            {/* SVG Chart placeholder */}
            <div className="h-56 w-full flex items-end">
              <svg className="w-full h-full text-blue-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2 L100,30 L0,30 Z"
                  fill="currentColor"
                  fillOpacity="0.05"
                />
                <path
                  d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            
            <div className="flex justify-between text-xs uppercase font-black text-gray-400 tracking-wider">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
        </AnimatedContainer>

        {/* Right Side: Recent activity */}
        <AnimatedContainer delay={0.5}>
          <div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm h-96 flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">
                Recent Signups
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Newly registered administrators
              </p>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {[
                { name: "Eleanor Vance", role: "Manager", time: "2m ago" },
                { name: "Aria Montgomery", role: "Moderator", time: "15m ago" },
                { name: "Caleb Rivers", role: "Contributor", time: "1h ago" },
                { name: "Spencer Hastings", role: "Reseller", time: "4h ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs">
                      {item.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-white">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}
