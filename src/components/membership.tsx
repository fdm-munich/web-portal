import { CalendarDays, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const subscription = {
  daysRemaining: 258
}

export function Membership() {

  const percentRemaining = Math.min(100, Math.max(0, (subscription.daysRemaining / 365) * 100))

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
            <div className="font-medium text-muted-foreground">Time Remaining</div>
            <div>{ subscription.daysRemaining } days</div>
          </div>
          <Progress value={percentRemaining} className="h-2" />
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h3 className="mb-2 font-semibold">Membership Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>Access to all association resources</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>Discounted event tickets</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
              <span>...D'autres benefices?</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
