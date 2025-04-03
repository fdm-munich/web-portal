import { Pages, usePageStore } from "@/stores/page";
import { Dashboard } from "./dashboard";
import { Settings } from "./settings";
import { Checkout } from "./checkout";
import { Events } from "./events";
import { Status } from "./status";
import { History } from "./history";
import { Contact } from "./contact";
import { Board } from "./board";

export function Layout() {
  const page = usePageStore( s => s.page );

  switch ( page ) {
  case Pages.Home:
    return "home";
  case Pages.Event:
    return <Events />;
  case Pages.History:
    return <History />;
  case Pages.Dashboard:
    return <Dashboard />;
  case Pages.Settings:
    return <Settings />;
  case Pages.Checkout:
    return <Checkout />;
  case Pages.Status:
    return <Status />;
  case Pages.Contact:
    return <Contact />;
  case Pages.Board:
    return <Board />;
  default:
    return (
      <>
          Not found 🙇
      </>
    );
  }
}
