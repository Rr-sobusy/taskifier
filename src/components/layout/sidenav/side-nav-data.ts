import { LayoutDashboard } from "lucide-react";
import { ListTodo, LucideIcon } from "lucide-react";


export type SideNavTypes = {
    title: string
    to: string
    icon: LucideIcon
}

export const SideNavData: SideNavTypes[] = [{
    title: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
}, {
    title: "Tasks",
    to: "/tasks",
    icon: ListTodo
}]