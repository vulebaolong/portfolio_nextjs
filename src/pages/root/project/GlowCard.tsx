"use client";

import { Box } from "@mui/material";
import { ReactElement, useEffect } from "react";

type TProps = {
   children: ReactElement;
   identifier: string;
};

const GlowCard = ({ children, identifier }: TProps): ReactElement => {
   useEffect(() => {
      const CONTAINER = document.querySelector<HTMLElement>(`.glow-container-${identifier}`);
      const CARDS = document.querySelectorAll<HTMLElement>(`.glow-card-${identifier}`);

      const CONFIG = {
         proximity: 40,
         spread: 80,
         blur: 12,
         gap: 32,
         vertical: false,
         opacity: 0,
      };

      const UPDATE = (event: PointerEvent) => {
         for (const CARD of CARDS) {
            const CARD_BOUNDS = CARD.getBoundingClientRect();

            if (
               event.x > CARD_BOUNDS.left - CONFIG.proximity &&
               event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
               event.y > CARD_BOUNDS.top - CONFIG.proximity &&
               event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
            ) {
               CARD.style.setProperty("--active", "1");
            } else {
               CARD.style.setProperty("--active", CONFIG.opacity.toString());
            }

            const CARD_CENTER = [
               CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
               CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
            ];

            let ANGLE =
               (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) * 180) / Math.PI;

            ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

            CARD.style.setProperty("--start", `${ANGLE + 90}`);
         }
      };

      document.body.addEventListener("pointermove", UPDATE);

      const RESTYLE = () => {
         CONTAINER?.style.setProperty("--gap", `${CONFIG.gap}`);
         CONTAINER?.style.setProperty("--blur", `${CONFIG.blur}`);
         CONTAINER?.style.setProperty("--spread", `${CONFIG.spread}`);
         CONTAINER?.style.setProperty("--direction", CONFIG.vertical ? "column" : "row");
      };

      RESTYLE();
      const fakePointerEvent = new PointerEvent("pointermove", {
         clientX: 0,
         clientY: 0,
      });
      UPDATE(fakePointerEvent); // Update with initial values

      // Cleanup event listener
      return () => {
         document.body.removeEventListener("pointermove", UPDATE);
      };
   }, [identifier]);

   return (
      <Box
         sx={{ width: `100%`, height: `100%` }}
         className={`glow-container-${identifier} glow-container`}
      >
         <article
            className={`glow-card glow-card-${identifier}`}
            style={{
               cursor: `pointer`,
               border: `1px solid #2a2e5a`,
               transition: `all .3s`,
               position: `relative`,
               background: `#101123`,
               color: `rgb(229 231 235,1)`,
               borderRadius: `15px`,
               width: `100%`,
               height: `100%`
            }}
         >
            <div className="glows"></div>
            {children}
         </article>
      </Box>
   );
};

export default GlowCard;
