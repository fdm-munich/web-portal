import { useNavigation } from "@/stores/page";
import { List } from "./typography/list";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const emailAddress = "munich@francais-du-monde.org";
const address = "Josef-Weigl-Str.7a 82041 - Deisenhofen, Deutschland";

export function ContactInfo() {
  const { goToContact }  = useNavigation();
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Nos détails</CardTitle>
        <CardDescription>Voici nos information de contact</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <List>
              <li>{ emailAddress }</li>
              <li>{ address }</li>
            </List>
          </div>
          <div className="col-span-3">
            <div className="flex justify-center h-[90px]">
              <img src="./logo.png" className="rounded-md h-[80px] mx-auto" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-end">
        <Button onClick={ goToContact }>Nous contacter directement</Button>
      </CardFooter>
    </Card>
  );
}
