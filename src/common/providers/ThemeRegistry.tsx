"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {
   Experimental_CssVarsProvider as CssVarsProvider,
   experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { useServerInsertedHTML } from "next/navigation";
import { useMemo, useState } from "react";

export const borderRadius = "30px";
export const heightHeader = "80px";

type TColor = {
   // input: {
   //   borderColor: string;
   // };
   colors: {
      1: string;
      2: string;
      3: string;
      4: string;
   };
   boxShadow: {
      1: string;
   };
};

declare module "@mui/material/styles" {
   interface TypeText {
      tertiary: string;
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
   }
   interface PaletteOptions extends TColor {}
   interface Palette extends TColor {}
}

export default function ThemeRegistry(props: any) {
   const theme = useMemo(
      () =>
         extendTheme({
            colorSchemes: {
               light: {
                  palette: {
                     background: {
                        paper: "rgba(255, 255, 255, 0.9)",
                        default: "rgb(255, 255, 255)",
                     },
                     colors: {
                        1: "rgba(255,255,255)",
                        2: "rgba(255,255,255)",
                        3: "rgba(255,255,255)",
                        4: "rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)",
                     },
                     text: {
                        primary: "rgb(33, 43, 54)",
                     },
                     boxShadow: {
                        1: "rgba(145, 158, 171, 0.24) -40px 40px 80px -8px",
                     },
                  },
               },
               dark: {
                  palette: {
                     // primary: { main: "rgb(255, 255, 255)" },
                     background: { paper: "rgba(22, 28, 36, 0.9)", default: "rgb(22, 28, 36)" },
                     colors: {
                        1: "rgba(22, 28, 36, 0.8)",
                        2: "rgb(33, 43, 54)",
                        3: "rgb(22, 28, 36)",
                        4: "rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)",
                     },
                     text: {
                        primary: "rgb(255, 255, 255)",
                     },
                     boxShadow: {
                        1: "rgba(0, 0, 0, 0.24) -40px 40px 80px -8px",
                     },
                  },
               },
            },
            components: {
               MuiButton: {
                  styleOverrides: {
                     root: {
                        textTransform: "none",
                        borderRadius: "10px",
                     },
                  },
               },
               MuiOutlinedInput: {
                  styleOverrides: {
                     root: {
                        borderRadius: "10px",
                     },
                  },
               },
               MuiContainer: {
                  defaultProps: {
                     maxWidth: "lg",
                  },
               },
            },
         }),
      []
   );

   const { options, children } = props;

   const [{ cache, flush }] = useState(() => {
      const cache = createCache(options);
      cache.compat = true;
      const prevInsert = cache.insert;
      let inserted: string[] = [];
      cache.insert = (...args) => {
         const serialized = args[1];
         if (cache.inserted[serialized.name] === undefined) {
            inserted.push(serialized.name);
         }
         return prevInsert(...args);
      };
      const flush = () => {
         const prevInserted = inserted;
         inserted = [];
         return prevInserted;
      };
      return { cache, flush };
   });

   useServerInsertedHTML(() => {
      const names = flush();
      if (names.length === 0) {
         return null;
      }
      let styles = "";
      for (const name of names) {
         styles += cache.inserted[name];
      }
      return (
         <style
            key={cache.key}
            data-emotion={`${cache.key} ${names.join(" ")}`}
            dangerouslySetInnerHTML={{
               __html: styles,
            }}
         />
      );
   });

   return (
      <CacheProvider value={cache}>
         <CssVarsProvider theme={theme}>
            <CssBaseline />
            {children}
         </CssVarsProvider>
      </CacheProvider>
   );
}
