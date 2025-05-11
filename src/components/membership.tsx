import { CalendarDays, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { useUserStore } from "@/stores/user";

const subscription = {
  daysRemaining : 258
};

export function Membership() {

  const email = useUserStore( s => s.email );
  const percentRemaining = Math.min( 100, Math.max( 0, ( subscription.daysRemaining / 365 ) * 100 ) );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adhésion</CardTitle>
        <CardDescription>Consultez les informations relatives à votre adhésion FdM Munich</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Status</div>
            <div className="font-medium">Adhérent</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Expire le</div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="font-medium text-muted-foreground">Temps restants</div>
            <div>{ subscription.daysRemaining } days</div>
          </div>
          <Progress value={percentRemaining} className="h-2" />
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h3 className="mb-2 font-semibold">Mon adhésion permet</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>D'avoir réduction aux évènements organisé par la section de Munich</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>D'acceder à tous les documents de l'association</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>De participer au financement de Radio Lora</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>D'aider à l'hebergement du podcast à propos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>De soutenir le réseau Français du monde et ses plus de 120 sections reparties dans 80 pays</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4">
          <Button variant="outline" ><a download href="/certificat.pdf">Telecharger mon certificat</a></Button>
          <Button onClick={ () => window.location.href = `https://buy.stripe.com/test_28o7w224Dblm1JmaEI?prefilled_email=${email}` }>Renouveler mon adhésion</Button>
        </div>
      </CardContent>
    </Card>
  );
}
