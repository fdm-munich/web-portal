"use client";

import * as React from "react";
// import { IconLogout, type Icon } from "@tabler/icons-react"
import { LogOut } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUserStore } from "@/stores/user";
import { Pages, usePageStore } from "@/stores/page";

export function NavSecondary( {
  items,
  ...props
}: {
  items: {
    title: string
    page: Pages
    icon: any
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup> ) {
  const signOut = useUserStore( s => s.signOut );
  const setPage = usePageStore( s => s.setPage );
  const page = usePageStore( s => s.page );

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map( ( item ) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton onClick={() => setPage( item.page )} isActive={page === item.page}>
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) )}
          <SidebarMenuItem >
            <SidebarMenuButton onClick={signOut} className="text-destructive">
              <LogOut />
              <span>Se déconnecter</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
