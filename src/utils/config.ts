import { FileClock, Home, Settings, WalletCards } from "lucide-react";

export const MENU_LIST = [
    {
        id: "menu-item-1",
        title: "Home",
        icon: Home,
        path: "/dashboard",
    },
    {
        id: "menu-item-2",
        title: "History",
        icon: FileClock,
        path: "/dashboard/history",
    },
    {
        id: "menu-item-3",
        title: "Pricing",
        icon: WalletCards,
        path: "/dashboard/pricing",
    },
    {
        id: "menu-item-4",
        title: "Settings",
        icon: Settings,
        path: "/dashboard/settings",
    },
] as const;