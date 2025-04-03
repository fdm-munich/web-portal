// import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"
//
import { Mail, PlusCircleIcon} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Pages, usePageStore } from "@/stores/page";

export function NavMain( {
  items,
}: {
  items: {
    title: string
    page: Pages
    icon?: any
  }[]
} ) {
  const setPage = usePageStore( s => s.setPage );
  const page = usePageStore( s => s.page );

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="... action ?"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <PlusCircleIcon />
              <span>... action ?</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <Mail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map( ( item ) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} onClick={() => setPage( item.page )} isActive={page === item.page}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
