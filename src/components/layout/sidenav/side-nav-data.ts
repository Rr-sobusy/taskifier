import { ListTodo, type LucideIcon, BarChart3 } from "lucide-react";


export type SideNavTypes = {
    title: string
    to: string
    icon: LucideIcon
}

export const SideNavData: SideNavTypes[] = [{
    title: "Dashboard",
    to: "/dashboard",
    icon: BarChart3,
}, {
    title: "Tasks",
    to: "/tasks",
    icon: ListTodo
}]