import { useNavigation } from "@/stores/page";
import { TypographyH4 } from "./typography";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function NextEvent() {
  const { goToEvent } = useNavigation();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Votre prochain rdv</CardTitle>
        <CardDescription>Tout ce que vous devez savoir pour votre prochain événement</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full gap-4">
        <div className="flex flex-col gap-4 my-auto">
          <div className="text-center text-upsdell-red">
            <TypographyH4>Votre agenda est vide pour l'instant.</TypographyH4>
          </div>
          <p className="text-muted-foreground">Consultez nos prochains événements pour découvrir ce que nous vous réservons. Vous trouverez sûrement quelque chose qui vous conviendra parfaitement !</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-end">
          <Button onClick={() => goToEvent()}>Consulter les événements</Button>
        </div>
      </CardContent>
    </Card>
  );
}
