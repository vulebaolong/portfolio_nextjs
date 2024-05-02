"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
   typography: {
      fontFamily: "var(--font-sora)",
   },
   components: {
      MuiOutlinedInput: {
         styleOverrides: {
            root: {
               "borderRadius": "10px",
               "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                     borderColor: "#783b37",
                  },
               },
            },
         },
      },
      MuiInputLabel: {
         styleOverrides: {
            root: {
               "&.Mui-focused": {
                  color: "#783b37",
               },
            },
         },
      },
   },
});
export default function ThemeRegistry(props: any) {
   // const theme = useMemo(
   //   () =>
   //     extendTheme({
   //       colorSchemes: {
   //         light: {
   //           palette: {
   //             primary: { main: "rgb(58, 67, 76)" },
   //             background: { paper: "rgba(255, 255, 255, 0.9)", default: "rgb(255, 255, 255)" },
   //             colors: {
   //               1: "rgba(255,255,255)",
   //               2: "rgba(255,255,255)",
   //               3: "rgba(255,255,255)",
   //               4: "rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)",
   //             },
   //             text: {
   //               primary: "rgb(33, 43, 54)",
   //             },
   //             boxShadow: {
   //               1: "rgba(145, 158, 171, 0.24) -40px 40px 80px -8px",
   //             },
   //           },
   //         },
   //         dark: {
   //           palette: {
   //             primary: { main: "rgb(255, 255, 255)" },
   //             background: { paper: "rgba(22, 28, 36, 0.9)", default: "rgb(22, 28, 36)" },
   //             colors: {
   //               1: "rgba(22, 28, 36, 0.8)",
   //               2: "rgb(33, 43, 54)",
   //               3: "rgb(22, 28, 36)",
   //               4: "rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)",
   //             },
   //             text: {
   //               primary: "rgb(255, 255, 255)",
   //             },
   //             boxShadow: {
   //               1: "rgba(0, 0, 0, 0.24) -40px 40px 80px -8px",
   //             },
   //           },
   //         },
   //       },
   //       components: {
   //         MuiButton: {
   //           styleOverrides: {
   //             root: {
   //               textTransform: "none",
   //               borderRadius: "8px",
   //             },
   //           },
   //         },
   //         MuiContainer: {
   //           defaultProps: {
   //             maxWidth: "lg",
   //           },
   //         },
   //       },
   //     }),
   //   []
   // );

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
         <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
         </ThemeProvider>
      </CacheProvider>
   );
}
