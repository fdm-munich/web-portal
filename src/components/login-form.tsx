import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/stores/user";

export function LoginForm( {
  className,
  ...props
}: React.ComponentProps<"div"> ) {
  const email = useUserStore( s => s.email );
  const setEmail = useUserStore( s => s.setEmail );
  const signIn = useUserStore( s => s.signIn );

  return (
    <div className={cn( "flex flex-col gap-6", className )} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">FdM Munich e.V.</h1>
                <p className="text-muted-foreground text-balance">
                  Connectez vous à votre compte
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="m@example.com"
                  required
                  onChange={e => setEmail( e.target.value )}
                />
              </div>
              <div className="grid gap-3">
                {/* <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
                <Input id="password" type="password" required /> */}
              </div>
              <Button type="submit" className="w-full" onClick={signIn}>
                Se connecter
              </Button>
              <div className="text-center text-sm">
                nouveau? {" "}
                <a href="#" className="underline underline-offset-4">
                  je créer mon compte
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block bg-gradient-to-r from-red to-green">
            <img
              src="/logo.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
