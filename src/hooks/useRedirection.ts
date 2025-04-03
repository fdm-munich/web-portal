import { useCheckoutStore } from "@/stores/checkout";
import { useNavigation } from "@/stores/page";
import { useEffect } from "react";

interface RedirectConfig {
  [key: string]: ( param?: string ) => void;
}


/**
*   Main idea:
*     The redirect logic would check the pathname and populate whatever store that must be populated for the page to work fine
*
*   Example:
*   redirect to checkout:
*     - goToCheckout (that uses the pageStore under the hood)
*     - setCheckoutId of checkout store
*/

function getQueryParam( param: string ) {
  const queryParams = new URLSearchParams( window.location.search );
  const value = queryParams.get( param );

  return value;
}

export function useRedirect() {
  const { goToCheckout, goToHell, goToHistory } = useNavigation();
  const setCheckoutId = useCheckoutStore( s => s.setCheckoutId );

  const config: RedirectConfig = {
    "/history" : () => {
      goToHistory();
    },
    "/checkout-return" : () => {
      const param = getQueryParam( "checkout" );

      if ( !param ){
        goToHell();
        return;
      }

      setCheckoutId( param );
      goToCheckout();
    }
  };


  useEffect( () => {
    const pathname = window.location.pathname;
    const redirect = config[pathname];


    if ( !redirect ) {
      return;
    }

    redirect();
  } );
}
