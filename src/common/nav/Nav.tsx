"use client";

import { wait } from "@/helpers/function.helper";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { IconButton, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Transition from "../Transition";
import { ROUTER } from "@/constants/router.constant";

const navData = [
  { name: "Home", path: ROUTER.HOME, icon: <HomeRoundedIcon /> },
  { name: "About", path: ROUTER.ABOUT, icon: <PersonRoundedIcon /> },
  { name: "Project", path: ROUTER.PROJECT, icon: <AssignmentIcon /> },
  { name: "Contact", path: ROUTER.CONTACT, icon: <EmailRoundedIcon /> },
];

export default function Nav() {
  const pathName = usePathname();
  const [startTransition, setStartTransition] = useState(false);
  const router = useRouter();
  return (
    <>
      <Stack
        component={"nav"}
        sx={{
          zIndex: "1",
          justifyContent: "center",
          height: "100vh",
          width: "65px",
          position: "fixed",
          top: "0",
          right: "2%",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "hsla(0, 0%, 100%, .1)",
            borderRadius: "999999px",
            alignItems: "center",
            gap: "30px",
            py: "20px",
          }}
        >
          {navData.map((item, index) => {
            return (
              <IconButton
                onClick={async () => {
                  // setStartTransition(true);
                  // await wait(1000);
                  router.push(item.path);
                  // await wait(1000);
                  // setStartTransition(false);
                }}
                key={index}
                color={`${item.path === pathName ? "error" : "default"}`}
              >
                {item.icon}
              </IconButton>
            );
          })}
        </Stack>
      </Stack>
      {/* {startTransition && <Transition />} */}
    </>
  );
}
