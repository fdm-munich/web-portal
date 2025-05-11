import { TypographyH3 } from "@/components";
import { Event } from "@/components/event";
import { EventMini } from "@/components/event-min";
import { HistoryYearSelector } from "@/components/history-year-selector";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigation } from "@/stores/page";
import { BarChart2, EditIcon, PlusIcon, Search } from "lucide-react";

export function Events() {
  const { goToHistory } = useNavigation();
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 sm:col-span-3">
        <div className="sm:fixed sm:w-1/5 space-y-4">
          <div className="space-y-4">
            <div>
              <TypographyH3>🗓️ Evenements</TypographyH3>
              <CardDescription>Gerez les evenement FdM Munich</CardDescription>
            </div>
            <div className="grid gap-2">
              <div>
                <Label htmlFor="search-event"><Search className="size-4"/>Chercher un evenement</Label>
                <div className="flex justify-between gap-2">
                  <Input placeholder="Nom de l'evenement" id="search-event"></Input>
                  <HistoryYearSelector />
                </div>
              </div>
              <div>
                <p>
                    Retrouvez plus de détails pour chacun de vos evenements.
                </p>
              </div>
              <div>
                <ul className="">
                  <li className="flex items-center gap-2"><EditIcon className="size-4"/> modifier un evenement</li>
                  <li className="flex items-center gap-2"><BarChart2 className="size-4"/> voir plus de détails</li>
                </ul>
              </div>
              <div className="flex justify-end">
                <Button variant="default"><PlusIcon />Créer un evenement</Button>
              </div>
            </div>
          </div>
          {/* <div className="hidden sm:block">
            <NextEvent />
          </div> */}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9 space-y-4 w-full sm:w-4/5">
        <EventMini />
        <EventMini />
        <EventMini />
        <EventMini />
        <EventMini />
        {/* <Event />
        <Event /> */}
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
