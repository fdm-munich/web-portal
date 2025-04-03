
import { useUserStore } from "@/stores/user";

export function NavUser() {
  const email = useUserStore( s => s.email );

  return (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">Alexis Zankowitch</span>
      <span className="text-muted-foreground truncate text-xs">
        {email}
      </span>
    </div>
  );
}
