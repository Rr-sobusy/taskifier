import { RxDashboard } from "react-icons/rx";
import { BsListTask } from "react-icons/bs";
import { MdManageHistory } from "react-icons/md";


export const SideNavData: { title: string, to: string, icon: any }[] = [{
    title: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
}, {
    title: "Tasks",
    to: "/tasks",
    icon: BsListTask
}, {
    title: "Management",
    to: "/management",
    icon: MdManageHistory,
}]