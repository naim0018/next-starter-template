import {
  ChartPie,
  Users,
  Megaphone,
  Grid2x2,
  Clipboard,
  Settings,
  HelpCircle,
} from "lucide-react";
import { NavGroup } from "./types";

export const adminNavItems: NavGroup[] = [
  {
    group: "Main Menu",
    items: [
      {
        name: "Overview",
        path: "/admin",
        icon: ChartPie,
      },
      {
        name: "Dynamic Table",
        path: "/admin/table-demo",
        icon: Clipboard,
      },
      {
        name: "Dynamic Form",
        path: "/admin/form-demo",
        icon: Grid2x2,
      },
    ],
  },
  {
    group: "Management",
    items: [
      {
        name: "Employees",
        path: "/admin/employees",
        icon: Users,
      },
      {
        name: "Marketing",
        path: "/admin/marketing",
        icon: Megaphone,
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        name: "System Settings",
        path: "/admin/settings",
        icon: Settings,
      },
      {
        name: "Help & Support",
        path: "/admin/help",
        icon: HelpCircle,
      },
    ],
  },
];
