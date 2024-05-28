import { LayoutDashboard } from "lucide-react";
import { ListTodo } from "lucide-react";

export type SideNavTypes = {
    title: string
    to: string
    icon: any
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