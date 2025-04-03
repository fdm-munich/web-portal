import * as React from "react";
import {
  Camera,
  BarChart2,
  Calendar,
  LayoutDashboard,
  FileCode2,
  FileText,
  FileCog,
  Settings,
  File,
  Users
} from "lucide-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FdMIcon } from "./fdm-icon";
import { Pages } from "@/stores/page";
import { Mail } from "lucide-react";

const data = {
  navMain : [
    {
      title : "Evénements",
      page  : Pages.Event,
      icon  : Calendar,
    },
    {
      title : "Tableau de bord",
      page  : Pages.Dashboard,
      icon  : LayoutDashboard,
    },
    {
      title : "Resources",
      page  : Pages.Resources,
      icon  : BarChart2,
    },
  ],
  navClouds : [
    {
      title    : "Capture",
      icon     : Camera,
      isActive : true,
      url      : "#",
      items    : [
        {
          title : "Active Proposals",
          url   : "#",
        },
        {
          title : "Archived",
          url   : "#",
        },
      ],
    },
    {
      title : "Proposal",
      icon  : FileText,
      url   : "#",
      items : [
        {
          title : "Active Proposals",
          url   : "#",
        },
        {
          title : "Archived",
          url   : "#",
        },
      ],
    },
    {
      title : "Prompts",
      icon  : FileCode2,
      url   : "#",
      items : [
        {
          title : "Active Proposals",
          url   : "#",
        },
        {
          title : "Archived",
          url   : "#",
        },
      ],
    },
  ],
  navSecondary : [
    {
      title : "Paramètres",
      page  : Pages.Settings,
      icon  : Settings,
    },
    {
      title : "Contact",
      page  : Pages.Contact,
      icon  : Mail,
    },
  ],
  documents : [
    {
      name : "Votre bureau",
      page : Pages.Board,
      icon : Users,
    },
    {
      name : "Nos status",
      page : Pages.Status,
      icon : File,
    },
    {
      name : "Compte rendus",
      url  : "#",
      icon : FileCog,
    },
  ],
};

export function AppSidebar( { ...props }: React.ComponentProps<typeof Sidebar> ) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <FdMIcon />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
