import { create } from "zustand";

type Theme = "dark" | "light" | "system"

interface ThemeStore {
  theme: Theme,
  setTheme: ( t: Theme ) => void
}

export const useThemeStore = create<ThemeStore>( set => ( {
  theme    : "system",
  setTheme : ( theme ) => {
    localStorage.setItem( "vite-ui-theme", theme );
    return set( {theme} );
  }
} ) );
