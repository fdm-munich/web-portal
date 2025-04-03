import { Event } from "@/components/event";
import { TypographyH3 } from "@/components";
import { CardDescription } from "@/components/ui/card";
import { HistoryYearSelector } from "@/components/history-year-selector";

export function History() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 sm:col-span-3">
        <div className="sm:fixed sm:w-1/5 space-y-4">
          <div className="space-y-4">
            <div>
              <TypographyH3>🗓️ Historique</TypographyH3>
              <CardDescription>Explorez les Moments Marquants</CardDescription>
            </div>
            <div className="grid gap-4">
              <p>
                Retrouvez l&apos;historique des évènements que nous avons proposés à nos membres et sympathisants. <br /><br />
                <i>Notez que l&apos;historique ne contient pas tous les événements. Il commence seulement à partir de la date où nous avons mis ce site en ligne.</i><br /><br />
                Il vous suffit de cliquer sur une année pour en voir le détail: <br />
              </p>
              <HistoryYearSelector />
            </div>
          </div>
          {/* <div className="hidden sm:block">
            <NextEvent />
          </div> */}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9 space-y-4 w-full sm:w-4/5">
        <div className="w-full sm:w-4/5 mx-auto"><Event /></div>
        <div className="w-full sm:w-4/5 mx-auto"><Event /></div>
        <div className="w-full sm:w-4/5 mx-auto"><Event /></div>
        <div className="w-full sm:w-4/5 mx-auto"><Event /></div>
        <div className="w-full sm:w-4/5 mx-auto"><Event /></div>
        <div className="w-full sm:w-4/5 mx-auto"><Event /></div>
      </div>
    </div>
  );
}
