import { Loader2 } from "lucide-react";
import { Button } from "./button";

export function Button() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  )
}
