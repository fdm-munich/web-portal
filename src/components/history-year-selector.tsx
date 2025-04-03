import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const years = [
  {
    value : "2025",
    label : "2025",
  },
  {
    value : "2024",
    label : "2024",
  },
  {
    value : "2023",
    label : "2023",
  },
];

export function HistoryYearSelector() {
  const [ open, setOpen ] = React.useState( false );
  const [ value, setValue ] = React.useState( "" );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? years.find( ( year ) => year.value === value )?.label
              : "Choississez une année"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Cherchez une année ..." className="h-9" />
          <CommandList>
            <CommandEmpty>Historique non disponible.</CommandEmpty>
            <CommandGroup>
              {years.map( ( framework ) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={( currentValue ) => {
                    setValue( currentValue === value ? "" : currentValue );
                    setOpen( false );
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ) )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
