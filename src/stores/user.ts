import { create } from "zustand";



interface MyStore {
  loggedIn: boolean,
  email: string,
  setEmail: ( email: string ) => void,
  signIn: () => void,
  signOut: () => void
}

export const useUserStore = create<MyStore>( ( set ) => ( {
  loggedIn : true,
  email    : "",
  setEmail : ( email: string ) => set( {email} ),
  signIn   : () => set( {loggedIn: true} ),
  signOut  : () => set( {loggedIn: false} ),
} ) );
