
import {
  HomeIcon,
  FolderIcon,
  ChartBarIcon,
  SettingsIcon,
  CodeIcon,
  CalendarCheck2,
  Component,
  Store,
  Handshake,
  Cog,
  SquareDashedKanban
} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavProjects } from "@/components/dashboard/nav-projects"
import { NavUser } from "@/components/dashboard/nav-user"
import { TeamSwitcher } from "@/components/dashboard/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Raghav Kumar Jha",
    email: "raghav.kumar@taskmaster.com",
    avatar: "/avatars/raghav.png",
    role: "Project Manager",
  },
  teams: [
    {
      name: "Development Team",
      logo: CodeIcon,
      plan: "Enterprise",
    },
    {
      name: "Marketing Team",
      logo: SquareDashedKanban,
      plan: "Pro",
    },
    {
      name: "Operations Team",
      logo: Cog,
      plan: "Basic",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: HomeIcon,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
        },
        {
          title: "Activity Logs",
          url: "/dashboard/activity-logs",
        },
        {
          title: "Notifications",
          url: "/dashboard/notifications",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: CalendarCheck2,
      items: [
        {
          title: "My Tasks",
          url: "/tasks/my-tasks",
        },
        {
          title: "Team Tasks",
          url: "/tasks/team-tasks",
        },
        {
          title: "Archived Tasks",
          url: "/tasks/archived",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderIcon,
      items: [
        {
          title: "Active Projects",
          url: "/projects/active",
        },
        {
          title: "Completed Projects",
          url: "/projects/completed",
        },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ChartBarIcon,
      items: [
        {
          title: "Task Reports",
          url: "/reports/tasks",
        },
        {
          title: "Team Performance",
          url: "/reports/team",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
      items: [
        {
          title: "Profile Settings",
          url: "/settings/profile",
        },
        {
          title: "Team Settings",
          url: "/settings/team",
        },
        {
          title: "Subscription",
          url: "/settings/subscription",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Website Redesign",
      url: "/projects/website-redesign",
      icon: Component,
      status: "In Progress",
    },
    {
      name: "Marketing Campaign",
      url: "/projects/marketing-campaign",
      icon: Store,
      status: "Completed",
    },
    {
      name: "Customer Onboarding",
      url: "/projects/customer-onboarding",
      icon: Handshake,
      status: "Not Started",
    },
  ],
  tasks: [
    {
      id: 1,
      title: "Create wireframes for homepage",
      description: "Design the initial wireframes for the new homepage redesign.",
      status: "To Do",
      priority: "High",
      assignedTo: "Ananya Kapoor",
      dueDate: "2025-01-20",
    },
    {
      id: 2,
      title: "Write blog post for campaign launch",
      description: "Draft and review the blog post for the upcoming marketing campaign.",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Ravi Patel",
      dueDate: "2025-01-15",
    },
    {
      id: 3,
      title: "Finalize project requirements",
      description: "Collaborate with stakeholders to finalize the scope and requirements.",
      status: "Completed",
      priority: "Low",
      assignedTo: "Raghav Sharma",
      dueDate: "2025-01-10",
    },
  ],
};


export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

