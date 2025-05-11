import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Profile() {
  return (
    <div className="space-y-4">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Votre addresse email"/>
    </div>
  );
}
