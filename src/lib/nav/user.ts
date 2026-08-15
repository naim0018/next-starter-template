import { ChartPie, Users, Settings } from "lucide-react";
import { NavGroup } from "./types";

export const userNavItems: NavGroup[] = [
  {
    group: "Dashboard",
    items: [
      {
        name: "My Overview",
        path: "/user",
        icon: ChartPie,
      },
      {
        name: "Profile Setup",
        path: "/user/profile",
        icon: Users,
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        name: "Settings",
        path: "/user/settings",
        icon: Settings,
      },
    ],
  },
];
