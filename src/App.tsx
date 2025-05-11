import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { LoginForm } from "./components/login-form";
import { useUserStore } from "./stores/user";
import { Layout } from "@/layouts";
import { useRedirect } from "./hooks/useRedirection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { Membership } from "./components/membership"
const queryClient = new QueryClient();

export default function Page() {
  const loggedIn = useUserStore( s => s.loggedIn );
  useRedirect();

  if ( !loggedIn ) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </QueryClientProvider>
    );
  }


  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="py-4 md:py-6 px-1 sm:px-4 lg:px-6">
            <Layout />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
