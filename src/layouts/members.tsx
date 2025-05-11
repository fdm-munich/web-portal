import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MembersBarChart } from "@/components/members-bar-chart";
import { DataTable } from "@/components/members-data";
import data from "@/components/data.json";

export function Members() {
  return (
    <div className="flex flex-1 flex-col">
      What do we want: <br ></br>
      - see how many members we have <br ></br>
      - see if someone is a member <br ></br>
      - be able to get an email list <br ></br>
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-2 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
                <Card className="@container/card">
                  <CardHeader className="relative">
                    <CardDescription>Adherents</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                      35
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                      <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                        <TrendingUpIcon className="size-3" />
                        +12.5%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="text-muted-foreground">
                      Total adherents de la section de Francais du monde - Munich. Inclut aussi les personnes qui ne sont pas à jour de cotisation.
                    </div>
                  </CardFooter>
                </Card>
                <Card className="@container/card">
                  <CardHeader className="relative">
                    <CardDescription>Adherents à jour de cotisation</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                      24
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                      <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                        <TrendingDownIcon className="size-3" />
                        -20%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Personnes a jour de cotisation pour l'année en cours.
                    </div>
                    <div className="text-muted-foreground">
                      9 personnes n'ont pas renouvelés leurs adhésions
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="col-span-6">
              <MembersBarChart />
            </div>
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
