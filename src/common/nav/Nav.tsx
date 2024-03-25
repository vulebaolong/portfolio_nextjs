"use client";

import AssignmentIcon from "@mui/icons-material/Assignment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navData = [
  { name: "Home", path: "/", icon: <HomeRoundedIcon /> },
  { name: "About", path: "/about", icon: <PersonRoundedIcon /> },
  { name: "Project", path: "/project", icon: <AssignmentIcon /> },
  { name: "Contact", path: "/contact", icon: <EmailRoundedIcon /> },
];

export default function Nav() {
  const pathName = usePathname();
  return (
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
            <Link href={item.path} key={index}>
              <IconButton color={`${item.path === pathName ? "error" : "default"}`}>
                {item.icon}
              </IconButton>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
}
