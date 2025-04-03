import { List } from "./typography/list";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const emailAddress = "munich@francais-du-monde.org";
const address = "Josef-Weigl-Str.7a 82041 - Deisenhofen, Deutschland";

export function ContactUs() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Nos détails</CardTitle>
            <CardDescription>Voici nos information de contact</CardDescription>
          </CardHeader>
          <CardContent>
            <List>
              <li>{ emailAddress }</li>
              <li>{ address }</li>
            </List>
            <div className="flex justify-center items-center h-full mx-auto">
              {/* Ensure the parent has a specific height */}
              <div className="flex justify-center items-center h-[200px]">
                <img src="./logo.png" className="rounded-md h-full object-contain" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full sm:w-2/3">
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
