import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactUs() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/4 text-muted-foreground">
        ... On potentiellement afficher ici les precedentes conversations ?
      </div>
      <div className="w-full sm:w-3/4">
        <Card>
          <CardHeader>
            <CardTitle>Contactez nous</CardTitle>
            <CardDescription>Envoyez un message directemenet au bureau</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">Votre message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message-2"
                className="min-h-[300px] flex-1 p-4 md:min-h-[300px] lg:min-h-[300px]"
              />
              <p className="text-sm text-muted-foreground">
                Un membre du bureau vous repondra dès que possible.
              </p>
              <div className="flex flex-col sm:flex-row justify-end">
                <Button>Envoyer</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
