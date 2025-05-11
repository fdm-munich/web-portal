import { TypographyH2, TypographyH3, TypographyH4 } from "@/components";
import { Profile } from "@/components/profile";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Settings() {
  return (
    <div className="space-y-4">
      <TypographyH3>Parametres</TypographyH3>
      <div className="grid grid-cols-12">
        <div className="col-span-4 space-y-4">
          <Profile />
          <ThemeSwitcher />
        </div>
        <div className="col-span-4">
        </div>
      </div>
    </div>
  );
}
