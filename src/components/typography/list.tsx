import { ReactNode } from "react";

interface props {
  children: ReactNode
}

export function List( { children }: props ) {
  return (
    <ul className="ml-6 list-disc [&>li]:mt-2">
      { children }
    </ul>
  );
}
