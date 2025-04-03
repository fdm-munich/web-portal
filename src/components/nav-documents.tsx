// import {
//   IconDots,
//   type Icon,
// } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Pages, usePageStore } from "@/stores/page";

export function NavDocuments( {
  items,
}: {
  items: {
    name: string
    page: Pages
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
  }[]
} ) {
  const setPage = usePageStore( s => s.setPage );
  const page = usePageStore( s => s.page );

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map( ( item ) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild isActive={ page === item.page }>
              <SidebarMenuButton onClick={() => setPage( item.page )}>
                <item.icon />
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ) )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
