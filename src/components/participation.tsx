import { Button } from "./ui/button";

export function Participation() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-start gap-2">
        <Button className="bg-purple-navy hover:bg-purple-navy-light">Reserver au prix adherents</Button>
        <Button className="bg-upsdell-red hover:bg-upsdell-red-light">Reserver au prix normal</Button>
      </div>
    </>
  );
}
