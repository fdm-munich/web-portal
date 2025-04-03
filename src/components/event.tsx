import { Participation } from "./participation";
import { TypographyH3 } from "./typography";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Event() {
  return (
    <Card className="">
      <CardHeader>
        <TypographyH3>Visite insolite Munich de 1933 à 1945</TypographyH3>
        <CardDescription className="text-green-cyan">🗓️ SAMEDI 5 AVRIL À 14H</CardDescription>
        <CardDescription className="text-upsdell-red">🎙️ KATHRIN LIAKOV</CardDescription>
        <CardDescription className="text-purple-navy">📍 RDV MUNICH LENBACHSPLATZ (DEVANT LA FONTAINE DES WITTELSBACH)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-80">
          <img src="/munich_insolite.jpeg" className="w-full h-full object-cover rounded-lg"/>
        </div>
        <div className="grid gap-4">
          <p>
            Dans le cadre de ses <b>Visites insolites</b> notre association vous propose une remontée dans le temps: Munich de 1933 à 1945.
          </p>
          <p>
            Quelle était la vie quotidienne des Munichois sous la dictature ?  Destins oubliés, résistants et victimes ; venez découvrir avec nous le sort de ces Munichois.  <br /> Rendez-vous : Lenbachsplatz (devant la Fontaine des Wittelsbach) à 14h.
          </p>
          <p className="mt-4 text-upsdell-red font-bold">
            Evenement limité à 25 personnes
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-1">
          <div className="flex flex-col sm:flex-row justify-start gap-1">
            <Button className="bg-purple-navy hover:bg-purple-navy-light">Reserver au prix adherents</Button>
            <Button className="bg-upsdell-red hover:bg-upsdell-red-light">Reserver au prix normal</Button>
          </div>
          <div className="flex flex-col sm:flex-row">
            <Button className="bg-green-cyan hover:bg-green-cyan-light">Partager 💌</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
