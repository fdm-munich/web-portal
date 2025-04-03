import { $api } from "@/lib/api";
import { useCheckoutStore } from "@/stores/checkout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/stores/page";

export function Checkout() {
  const checkoutId = useCheckoutStore( s => s.checkoutId );
  const {goToEvent, goToDashboard} = useNavigation();
  const { data: customer, isFetching }  = $api.useQuery( "get", "/customer", {
    params : {query: { checkout_session: checkoutId ?? ""}}
  } );

  if ( isFetching ) {
    return (
      <div className="my-auto w-full">
        <div className="text-muted-foreground flex items-center gap-4 justify-center my-auto">
          <Loader2 className="animate-spin" />  Loading ...
        </div>
      </div>
    );
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Confirmation</CardTitle>
        <CardDescription>Votre demande a été traitée avec succès.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p>Vous recevrez une confirmation par e-mail à l’adresse indiquée lors de votre paiement : </p>
          <p className="text-upsdell-red">{customer.email}</p>
          <p className="text-grayish">Pensez à vérifier votre dossier spam si vous ne trouvez pas l’e-mail.</p>
          <p> Merci encore pour votre soutien !</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <Button onClick={() => goToDashboard()} variant="outline">Consulter mon tableau de bord</Button>
          <Button onClick={() => goToEvent()}>Voir les événements</Button>
        </div>
      </CardContent>
    </Card>
  );
}
