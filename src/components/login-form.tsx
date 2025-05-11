import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { functionClient } from "@/api/functions/client";
import { Loader2 } from "lucide-react";

function SignIn() {
  const [ email, setEmail ] = useState( "" );
  const [ key, setKey ] = useState( "" );
  const { mutateAsync, data, isPending } = functionClient.useMutation( "post", "/sign-in" );

  const signIn = async () => {
    await mutateAsync( {
      params : {
        query : {
          email,
          key
        }
      }
    } );
  };

  return (
    <>
      <div>
        <p className="text-muted-foreground text-balance">
          Connectez vous à votre compte
        </p>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Votre email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          placeholder="mon@email.com"
          required
          onChange={e => setEmail( e.target.value )}
        />
        <Label htmlFor="email">Clef d'authentication</Label>
        <Input
          id="key"
          type="string"
          placeholder="Clef reçu par email"
          value={key}
          required
          onChange={e => setKey( e.target.value )}
        />
      </div>
      {
        isPending ? (
          <Button disabled className="w-full">
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full" onClick={signIn}>
          Se connecter
          </Button>
        )
      }
      {
        data && (
          <>
            DATA: {data.isAuthorized}
          </>
        )
      }
    </>
  );
}

function SignUp() {
  const [ email, setEmail ] = useState( "" );
  const [ name, setName ] = useState( "" );
  const [ bitrhDate, setBirthdate ] = useState( "" );
  const [ isFrench, setIsFrench ] = useState( true );

  return (
    <>
      <div>
        <p className="text-muted-foreground text-balance">
          Créer votre compte FdM - Munich
        </p>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Votre email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          placeholder="mon@email.com"
          required
          onChange={e => setEmail( e.target.value )}
        />
        <Label htmlFor="email">Votre nom</Label>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder="Elsa Morin"
          required
          onChange={e => setName( e.target.value )}
        />
        <Label htmlFor="email">Date de naissance</Label>
        <Input
          id="bitrhDate"
          type="date"
          value={bitrhDate}
          placeholder="05/11/1986"
          required
          onChange={e => setBirthdate( e.target.value )}
        />
        <div className="flex items-center space-x-2 justify-end">
          <Label htmlFor="is-french">Je suis français</Label>
          <Switch id="is-french" checked={isFrench} onCheckedChange={setIsFrench}/>
        </div>
      </div>
      <Button type="submit" className="w-full" onClick={() => null}>
        S'inscrire
      </Button>
    </>
  );
}

export function LoginForm() {
  const [ displayNewFrom, setDisplayNewForm ] = useState( false );

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex justify-start space-x-4">
            <div>
              <img src="./logo.png" className="h-14"/>
            </div>
            <div className="">
              <h1 className="text-2xl font-bold">FdM Munich e.V.</h1>
            </div>
          </div>
          {
            !displayNewFrom && <SignIn />
          }
          {
            displayNewFrom && <SignUp />
          }
          <div className="text-center text-sm">
            <a href="#" className="underline underline-offset-4 text-upsdell-red" onClick={() => setDisplayNewForm( !displayNewFrom )}>
              { !displayNewFrom ? "Je crée mon compte" : "Je me connecte" }
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
