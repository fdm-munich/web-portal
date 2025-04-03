import { TypographyH3 } from "@/components";
import { Event } from "@/components/event";
import { CardDescription } from "@/components/ui/card";
import { useNavigation } from "@/stores/page";

export function Events() {
  const { goToHistory } = useNavigation();
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 sm:col-span-3">
        <div className="sm:fixed sm:w-1/5 space-y-4">
          <div className="space-y-4">
            <div>
              <TypographyH3>🗓️ Evenements</TypographyH3>
              <CardDescription>retrouvez nous lors de</CardDescription>
            </div>
            <div className="grid gap-4">
              <p>
                Certains événements nécessiteront une participation. <br />
                Un tarif réduit sera proposé aux adhérents.
              </p>
              <p className="text-muted-foreground text-sm">
                Cette liste sera mise à jour tout au long de l&apos;année. Revenez la consulter régulièrement 😉
              </p>
              <p>
                Intéressé par notre <span className="text-upsdell-red hover:cursor-pointer hover:underline" onClick={goToHistory}>historique</span>?
              </p>
            </div>
          </div>
          {/* <div className="hidden sm:block">
            <NextEvent />
          </div> */}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9 space-y-4 w-full sm:w-4/5">
        <Event />
        <Event />
        <Event />
        {/* Try to scroll horizontally but ... annonying on mobile */}
        {/* <ScrollArea>
          <div className="flex space-x-4 p-4">
            <Event />
            <Event />
            <Event />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea> */}
      </div>
    </div>
  );
}
