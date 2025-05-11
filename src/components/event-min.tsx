import { TypographyH3 } from "./typography";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Edit, Edit2, Edit3, EditIcon, BarChart2, Calendar, User, MapPin, Users } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function EventMini() {
  return (
    <Card className="">
      <Sheet>
        <CardContent className="grid grid-cols-12 gap-4 text-start">
          <div className="col-span-7">
            <TypographyH3>Visite insolite Munich de 1933 à 1945</TypographyH3>
            <CardDescription className="text-green-cyan flex items-center gap-2"><Calendar className="size-5"/> Samedi 5 avril à 14h</CardDescription>
            <CardDescription className="text-upsdell-red flex items-center gap-2"><User className="size-5" /> Kathrin Liakov</CardDescription>
            <CardDescription className="text-purple-navy flex items-center gap-2"><MapPin className="size-5" /> rdv munich lenbachsplatz </CardDescription>
            <div className="mt-4 text-muted-foreground">
            Ipsum aliquip sint ex occaecat in ex reprehenderit ea qui aute do consectetur proident laboris occaecat aliqua minim eu deserunt duis eiusmod magna nulla ...
            </div>
            <div className="flex justify-end">
              <SheetTrigger>
                <Button className="" variant="outline">Plus de détails</Button>
              </SheetTrigger>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-upsdell-red font-bold"><Users /></span> 24 / 25
            </div>
          </div>
          <div className="col-span-4">
            <div className="size-24 sm:size-52 mx-auto">
              <img src="/munich_insolite.jpeg" className="w-full h-full object-cover rounded-lg"/>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <Button variant="ghost"><EditIcon /></Button>
            </div>
            <Button variant="ghost"><BarChart2 /></Button>
          </div>
          <div className="col-span-12">

          </div>
        </CardContent>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Details de l'evenement ... </SheetTitle>
            <SheetDescription>
                Ipsum aliquip sint ex occaecat in ex reprehenderit ea qui aute do consectetur proident laboris occaecat aliqua minim eu deserunt duis eiusmod magna nulla Ipsum aliquip sint ex occaecat in ex reprehenderit ea qui aute do consectetur proident laboris occaecat aliqua minim eu deserunt duis eiusmod magna nulla Ipsum aliquip sint ex occaecat in ex reprehenderit ea qui aute do consectetur proident laboris occaecat aliqua minim eu deserunt duis eiusmod magna nulla
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </Card>
  );
}
