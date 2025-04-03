import { create } from "zustand";

interface CheckoutStore {
  checkoutId: string | undefined
  setCheckoutId: ( c: string ) => void
}

export const useCheckoutStore = create<CheckoutStore>( set => ( {
  checkoutId    : undefined,
  setCheckoutId : ( checkoutId ) => set( {checkoutId} )
} ) );
