"use client";

import React from "react";
import AdvancedTableExample from "@/components/common/DynamicTable/TableExampleAndGuide/DynamicTableAdvancedExample";

export default function TableDemoPage() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm p-6 overflow-hidden">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
        Dynamic Table Demo
      </h2>
      <AdvancedTableExample />
    </div>
  );
}
