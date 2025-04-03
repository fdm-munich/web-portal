import { useThemeStore } from "@/stores/theme";
import { ReactNode, useEffect } from "react";

interface props {
  children: ReactNode
}

export function ThemeProvider( {children}: props ) {
  const theme = useThemeStore( s => s.theme );

  useEffect( () => {
    const root = window.document.documentElement;

    const applyTheme = ( currentTheme: string ) => {
      root.classList.remove( "light", "dark" );
      root.classList.add( currentTheme );
    };

    const updateTheme = () => {
      if ( theme === "system" ) {
        const systemTheme = window.matchMedia( "(prefers-color-scheme: dark)" ).matches ? "dark" : "light";
        applyTheme( systemTheme );
      } else {
        applyTheme( theme );
      }
    };

    updateTheme();

    let mediaQuery: MediaQueryList;
    if ( theme === "system" ) {
      mediaQuery = window.matchMedia( "(prefers-color-scheme: dark)" );
      mediaQuery.addEventListener( "change", updateTheme );
    }

    return () => {
      if ( mediaQuery ) {
        mediaQuery.removeEventListener( "change", updateTheme );
      }
    };
  }, [ theme ] );

  return (
    <>
      {children}
    </>
  );
}
