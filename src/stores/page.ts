import { create } from "zustand";

export enum Pages {
  Home = "Home",
  Dashboard = "Tableau de bord",
  Contact = "Contact",
  Settings = "Paramètres",
  Event = "Evénements",
  History= "Historique",
  Resources = "Resources",
  Checkout = "Checkout",
  NotFound = "Not Found",
  Status = "Nos statuts",
  Board = "Votre Bureau"
}

interface PageStore {
  page: Pages,
  setPage: ( page: Pages ) => void
}

export const usePageStore = create<PageStore>( set => ( {
  page    : Pages.Event,
  setPage : ( page ) => set( {page} )
} ) );

export function useNavigation() {
  const setPage = usePageStore( s => s.setPage );

  return {
    goToEvent     : () => setPage( Pages.Event ),
    goToCheckout  : () => setPage( Pages.Checkout ),
    goToDashboard : () => setPage( Pages.Dashboard ),
    goToHistory   : () => setPage( Pages.History ),
    goToHell      : () => {
      setPage( Pages.NotFound );
    }
  };
}
